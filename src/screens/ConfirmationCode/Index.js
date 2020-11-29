import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Input from '../../components/Input/Input';
import styles from './Style';
import AppButton from '../../components/AppButton/Index';
import {useInput} from '../../utils/useInput';
import {useDispatch, useSelector} from 'react-redux';
import ShowErrMsg from '../../components/ShowErrMsg.js/Index';

const ConfirmationCode = (props) => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {route} = props;
  const [loading, setIsLoading] = useState(false);

  const [input, updateInputValue] = useInput('', [
    {key: 'isMinChars', minChars: 4},
  ]);

  const doneHandler = () => {
    if (input.isValid) {
      setIsLoading(true);
      axios
        .post('/verify/validate', {
          phone: route.params.phone,
          code: input.value,
        })
        .then((res) => {
          const {token, userData} = res.data;
          axios.defaults.headers.Authorization = 'Bearer ' + token;
          AsyncStorage.setItem('token', token);
          AsyncStorage.setItem('user', JSON.stringify(userData));
          dispatch({type: 'SET_TOKEN', payload: {token}});
          dispatch({
            type: 'SET_USER',
            payload: {user: userData},
          });
        })
        .catch((err) => {
          dispatch({
            type: 'SHOW_ERROR',
            payload: {
              showError: true,
              errMessage: 'Enter Correct Confirmation Code!',
            },
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Enter Confirmation Code </Text>
      </View>
      <Input
        placeholder="__ __ __ __"
        maxLength={4}
        bordered
        placeholderPosition="center"
        inputStyleWrapper={styles.inputStyleWrapper}
        keyboardType="numeric"
        showValidationFeedback
        isValid={input.isValid}
        touched={input.touched}
        onChangeText={updateInputValue}
        onSubmitEditing={doneHandler}
      />
      <View style={styles.button}>
        <AppButton
          title="DONE"
          onPress={doneHandler}
          disabled={!input.isValid}
          isLoading={loading}
        />
      </View>
      {state.showError && <ShowErrMsg />}
    </View>
  );
};

export default ConfirmationCode;
