import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView, Keyboard} from 'react-native';
import Input from '../../components/Input/Input';
import styles from './Style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../components/AppButton/Index';
import {useInput} from '../../utils/useInput';
import axios from 'axios';

const SignIn = (props) => {
  const {navigation} = props;

  const [input, updateInputValue] = useInput('', [{key: 'isPhone'}]);
  const [loading, setIsLoading] = useState(false);

  const navigateToConfirmation = () => {
    if (input.isValid) {
      setIsLoading(true);
      axios
        .post('/verify', {phone: input.value})
        .then((res) => {
          navigation.navigate('ConfirmationCode', {phone: input.value});
          console.log(input.value, res.data);
        })
        .catch((err) => {
          console.log('Error Message : ', err);
        })
        .finally(() => setIsLoading(false));
    }
  };

  const renderIconLeft = () => {
    return <Icon name="phone" style={styles.icon} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Enter Your Phone Number</Text>
      </View>
      <Input
        placeholder="phone"
        maxLength={11}
        underlined
        renderIconLeft={renderIconLeft}
        inputStyleWrapper={styles.inputStyleWrapper}
        keyboardType="numeric"
        showValidationFeedback
        isValid={input.isValid}
        touched={input.touched}
        onChangeText={updateInputValue}
        onSubmitEditing={navigateToConfirmation}
      />

      <View style={styles.button}>
        <AppButton
          title="DONE"
          onPress={navigateToConfirmation}
          disabled={!input.isValid}
          isLoading={loading}
        />
      </View>
    </View>
  );
};

export default SignIn;
