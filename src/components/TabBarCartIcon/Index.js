import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Style';

const TabBarCartIcon = (props) => {
  const {focused} = props;
  const CartItemsCount = useSelector((state) => state.cart.cartItems) || [];

  return (
    <View style={styles.container}>
      <Icon
        name="cart"
        style={[styles.icon, focused ? styles.focused : null]}
      />
      <View style={styles.badgeIcon}>
        <Text>{CartItemsCount.length}</Text>
      </View>
    </View>
  );
};

export default TabBarCartIcon;
