import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AppButton from '../../components/AppButton/Index';
import Input from '../../components/Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import styles from './Style';

const UpdateAccount = (props) => {
  const {navigation} = props;
  const state = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [name, setName] = useState({value: state.name || '', isValid: false});

  const updateUsername = () => {
    axios
      .put('user/change-name', {name: name.value})
      .then((res) => {
        axios.get('/user/get-data').then((res) => {
          dispatch({type: 'SET_USER', payload: {user: res.data.userData}});
        });
        navigation.navigate('Account');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateAndCheckValidUsername = (nweUsername) => {
    setName({
      value: nweUsername,
      isValid: nweUsername != '' && nweUsername != name.value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.update}>
        <View style={styles.name}>
          <Input
            placeholder="Name"
            stacked
            inputStyleWrapper={styles.inputStyleWrapper}
            onChangeText={updateAndCheckValidUsername}
            value={name.value}
          />
        </View>
      </View>

      <View style={styles.save}>
        <AppButton
          title="SAVE"
          onPress={updateUsername}
          disabled={!name.isValid}
        />
      </View>
    </View>
  );
};

export default UpdateAccount;
