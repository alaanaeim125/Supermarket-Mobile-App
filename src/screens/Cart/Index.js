import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import AppButton from '../../components/AppButton/Index';
import CartItem from '../../components/CartItem/Index';
import {useSelector} from 'react-redux';
import styles from './Styles';
import CartSelectors from '../../store/selectors/CartSelectors';
import EmptyData from '../../components/EmptyData/Index';

const Cart = (props) => {
  const {navigation} = props;
  const state = useSelector((state) => state);
  const cartItems = state.cart.cartItems;
  let total = CartSelectors(state);

  const renderItem = ({item}) => {
    return <CartItem item={item} navigation={navigation} />;
  };

  const keyExtractor = (items, index) => index.toString();

  const renderCartItems = (items) => {
    return (
      <FlatList
        data={items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    );
  };
  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <View style={styles.items}>{renderCartItems(cartItems)}</View>
      ) : (
        <View style={styles.empty}>
          <EmptyData message="Empty Cart" nameIcon="cart" />
        </View>
      )}

      <View style={styles.checkout}>
        <Text style={styles.total}>Total: {total} $</Text>
        <AppButton
          title="CHECKOUT"
          disabled={cartItems.length == 0}
          onPress={() => navigation.navigate('CheckoutScreen')}
        />
      </View>
    </View>
  );
};

export default Cart;
