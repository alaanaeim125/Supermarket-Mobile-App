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
        options={{headerShown: false, title: 'Home'}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={Product}
        options={{headerBackTitle: true, title: 'Product'}}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={Category}
        options={{headerBackTitle: true, title: 'Category'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
