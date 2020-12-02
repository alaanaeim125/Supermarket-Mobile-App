import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, StyleSheet, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppContainer from './src/Navigation/AppContainer';
import SplashScreen from 'react-native-splash-screen';
import {getCartItems} from './src/store/actions/CartAction';
import axios from 'axios';

const App = () => {
  const stateToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const [token, setToken] = useState('NOT_TOKEN');

  const getcategories = () => {
    axios.get('/category/get-parents').then((res) => {
      dispatch({type: 'GET_CATEGORY', payload: {categories: res.data.cats}});
    });
  };

  const getProducts = () => {
    axios.get('/product/best-seller').then((res) => {
      dispatch({type: 'GET_PRODUCTS', payload: {products: res.data.products}});
    });
  };

  useEffect(() => {
    if (stateToken) {
      getcategories();
      getProducts();
    }
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('shippingAddress').then((res) => {
      dispatch({
        type: 'SHIPPING_ADDRESS',
        payload: {shippingAddress: res},
      });
    });
  }, []);

  useEffect(() => {
    // AsyncStorage.clear();
    AsyncStorage.getItem('token').then((res) => {
      setToken(res);
      dispatch({type: 'SET_TOKEN', payload: {token: res}});
      if (res) {
        dispatch(getCartItems());
      }
      axios.defaults.headers.Authorization = 'Bearer ' + res;
      SplashScreen.hide();
    });
  }, [stateToken]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {token !== 'NOT_TOKEN' && <AppContainer isAuthenticated={!!stateToken} />}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
