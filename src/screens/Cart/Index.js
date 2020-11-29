import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import AppButton from '../../components/AppButton/Index';
import CartItem from '../../components/CartItem/Index';
import {dummyDataCartItems} from '../../utils/dummyData';
import {useSelector} from 'react-redux';
import styles from './Styles';
import CartSelectors from '../../store/selectors/CartSelectors';

const Cart = (props) => {
  const {navigation} = props;
  const state = useSelector((state) => state);
  const cartItems = state.cart.cartItems;
  const total = CartSelectors(state);
  const renderCartItems = (items) => {
    return (
      <FlatList
        data={items}
        keyExtractor={(items, index) => index.toString()}
        renderItem={({item, index}) => <CartItem item={item} />}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.items}>{renderCartItems(cartItems)}</View>
      <View style={styles.checkout}>
        <Text style={styles.total}>Total: {total} $</Text>
        <AppButton
          title="CHECKOUT"
          // disabled={cartItems.length == 0}
          onPress={() => navigation.navigate('CheckoutScreen')}
        />
      </View>
    </View>
  );
};

export default Cart;
