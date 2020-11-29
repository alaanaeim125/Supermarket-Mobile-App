import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Address from '../../components/Address/Index';
import AppButton from '../../components/AppButton/Index';
import {useSelector} from 'react-redux';
import CartSelectors from '../../store/selectors/CartSelectors';
import axios from 'axios';
import styles from './Styles';
import DoneBuy from '../../components/DoneBuy/Index';

const CheckOut = (props) => {
  const {navigation} = props;
  const [showDoneBuy, setShowDoneBuy] = useState(false);

  const state = useSelector((state) => state);

  const total = CartSelectors(state);

  const [addressShip, setAddressShip] = useState();

  useEffect(() => {
    AsyncStorage.getItem('shippingAddress').then((res) => {
      setAddressShip(JSON.parse(res));
    });
  }, []);

  const buyNow = () => {
    const paymentMethod = 1;
    const items = state.cart.cartItems.map((item) => item._id);
    const shippingAddress = addressShip._id;
    const totalCost = total;

    axios
      .post('/order', {
        paymentMethod: paymentMethod,
        items: items,
        shippingAddress: shippingAddress,
        totalCost: totalCost,
      })
      .then((res) => {
        setShowDoneBuy(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View
      style={[styles.container, showDoneBuy ? styles.opacityBackground : null]}>
      {/* <View style={styles.header}>
        <IconIos
          style={styles.icon}
          name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
        />
        <Text style={styles.title}>CheckOut</Text>
      </View> */}
      <Address navigation={navigation} addressShip={addressShip} />
      <View style={styles.calculation}>
        <View style={styles.calc}>
          <Text style={styles.infoPrice}>SubTotal</Text>
          <Text style={styles.infoPrice}>{total} $</Text>
        </View>
        <View style={styles.calc}>
          <Text style={styles.infoPrice}>Shipping</Text>
          <Text style={styles.infoPrice}>Free</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.calc}>
          <Text style={styles.infoPrice}>Total</Text>
          <Text style={styles.infoPrice}>{total} $</Text>
        </View>
        <View style={styles.buy}>
          <AppButton title="BUY" disabled={!addressShip} onPress={buyNow} />
        </View>
      </View>

      {showDoneBuy && (
        <View style={styles.buyDone}>
          <DoneBuy setShowDoneBuy={() => setShowDoneBuy(false)} />
        </View>
      )}
    </View>
  );
};

export default CheckOut;
