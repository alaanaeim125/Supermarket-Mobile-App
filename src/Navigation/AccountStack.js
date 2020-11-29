import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Account from '../screens/Account/Index';
import AddAdress from '../screens/AddAdress/Index';
import Orders from '../screens/Orders/Index';
import UpdateAccount from '../screens/UpdateAccount/Index';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UpdateAccount"
        component={UpdateAccount}
        options={{headerBackTitle: true}}
      />
      <Stack.Screen
        name="AddAdress"
        component={AddAdress}
        options={{headerBackTitle: true}}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerBackTitle: true}}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
