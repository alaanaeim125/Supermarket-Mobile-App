import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import AppButton from '../AppButton/Index';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import {getCartItems} from '../../store/actions/CartAction';
const AddToCartButton = (props) => {
  const {productId, countItems, cost} = props;
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const mactchproduct = cartItems.find(
    (item) => item.product._id === productId,
  );

  const count = mactchproduct ? mactchproduct.count : 0;
  const [counter, setCounter] = useState(count);

  const addOrderToCart = () => {
    axios
      .post('/cart', {product: productId, cost: cost, count: countItems})
      .then((res) => {
        dispatch(getCartItems());
      })
      .catch((err) => {
        console.log('err : ', err);
      });
  };

  const increaseInCartOrders = () => {
    axios
      .put('/cart', {
        id: mactchproduct._id,
        action: 'increase',
        count: countItems,
      })
      .then((res) => {
        dispatch(getCartItems());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const decreaseInCartOrders = () => {
    axios
      .put('/cart', {
        id: mactchproduct._id,
        action: counter === 1 ? 'delete' : 'decrease',
        count: countItems,
      })
      .then((res) => {
        dispatch(getCartItems());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const IncrementCounterHandler = () => {
    if (counter === 0) {
      addOrderToCart();
    } else {
      increaseInCartOrders();
    }
    setCounter(counter + 1);
  };

  const DecrementCounterHandler = () => {
    decreaseInCartOrders();
    setCounter(counter - 1);
  };

  const renderInitialButton = () => {
    return <AppButton title="ADD TO CART" onPress={IncrementCounterHandler} />;
  };

  const renderIncreaseDecreaseButton = () => {
    return (
      <View style={styles.containerCart}>
        <Text onPress={DecrementCounterHandler} style={styles.operation1}>
          -
        </Text>
        <Text style={styles.quantity}>{counter}</Text>
        <Text onPress={IncrementCounterHandler} style={styles.operation2}>
          +
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {counter === 0 ? renderInitialButton() : renderIncreaseDecreaseButton()}
    </View>
  );
};

export default AddToCartButton;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  containerCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  operation1: {
    width: width * 0.1,
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'gray',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
  },

  operation2: {
    width: width * 0.1,
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'gray',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: height * 0.009,
  },
});
