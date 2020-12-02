import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import signIn from '../screens/SingIn/Index';
import ConfirmationCode from '../screens/ConfirmationCode/Index';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signIn"
        component={signIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConfirmationCode"
        component={ConfirmationCode}
        options={{headerBackTitle: true, title: 'Confirm Code'}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
