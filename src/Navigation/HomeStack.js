import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Index';
import Product from '../screens/Product/Index';
import Category from '../screens/Category/Index';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={Product}
        options={{headerBackTitle: true}}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={Category}
        options={{headerBackTitle: true}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
