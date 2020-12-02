import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search/Index';
import Product from '../screens/Product/Index';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={Search}
        options={{title: 'Search In Products'}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={Product}
        options={{headerBackTitle: true, title: 'Product'}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
