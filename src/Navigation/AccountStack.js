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
        options={{title: 'Account'}}
      />
      <Stack.Screen
        name="UpdateAccount"
        component={UpdateAccount}
        options={{headerBackTitle: true, title: 'Update Account'}}
      />
      <Stack.Screen
        name="AddAdress"
        component={AddAdress}
        options={{headerBackTitle: true, title: 'Add Address'}}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{headerBackTitle: true, title: 'Orders'}}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
