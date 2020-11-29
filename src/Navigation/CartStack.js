import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart/Index';
import Product from '../screens/Product/Index';
import CheckOut from '../screens/CheckOut/Index';
import AddAdress from '../screens/AddAdress/Index';

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={Product}
        options={{headerBackTitle: true}}
      />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckOut}
        options={{headerBackTitle: true}}
      />
      <Stack.Screen
        name="AddAdress"
        component={AddAdress}
        options={{headerBackTitle: true}}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
