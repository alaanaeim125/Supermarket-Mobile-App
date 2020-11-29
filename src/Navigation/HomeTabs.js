import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {TINT_COLOR} from '../../assets/Colors';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
import TabBarCartIcon from '../components/TabBarCartIcon/Index';
const Tabs = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const IconName = {
          Home: 'home',
          Search: 'search',
          Account: 'person',
        };
        const LabelName = {
          Home: 'Home',
          Cart: 'Cart',
          Search: 'Search',
          Account: 'Account',
        };

        return {
          tabBarIcon: ({focused}) =>
            route.name === 'Cart' ? (
              <TabBarCartIcon focused={focused} />
            ) : (
              <Icon
                name={IconName[route.name]}
                style={{color: focused ? TINT_COLOR : 'black', fontSize: 22}}
              />
            ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? TINT_COLOR : 'black', fontSize: 17}}>
              {LabelName[route.name]}
            </Text>
          ),
        };
      }}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Cart" component={CartStack} />
      <Tabs.Screen name="Search" component={SearchStack} />
      <Tabs.Screen name="Account" component={AccountStack} />
    </Tabs.Navigator>
  );
};

export default HomeTabs;
