import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import styles from './Style';

const imageProduct = 'https://reactjs.org/logo-og.png';

const Account = (props) => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('user').then((res) => {
      dispatch({type: 'SET_USER', payload: {user: JSON.parse(res)}});
    });

    return () => {
      return;
    };
  }, []);

  const {navigation} = props;
  const returnDetails = (iconName, title, navigateTo) => {
    const logOutApp = () => {
      dispatch({type: 'LOG_OUT'});
      AsyncStorage.clear();
      axios.defaults.headers.Authorization = 'NOT_TOKEN';
    };

    return (
      <TouchableOpacity
        onPress={() => {
          title !== 'Log Out' ? navigation.navigate(navigateTo) : logOutApp();
        }}>
        <View style={styles.detail}>
          <Icon style={styles.icon} name={iconName} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.underLine} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Image style={styles.image} source={{uri: imageProduct}} />
        <View style={styles.line} />
        <View style={styles.info}>
          <Text style={styles.info}>
            {state.user.name || 'Complete Your Info.'}
          </Text>
          <Text style={styles.info}>{state.user.phone}</Text>
        </View>
      </View>

      <View style={styles.details}>
        {returnDetails('person', 'Profile', 'UpdateAccount')}
        {returnDetails('location-outline', 'Shipping Address', 'AddAdress')}
        {returnDetails('cart', 'Previos Orders', 'Orders')}
        {returnDetails('log-out', 'Log Out')}
      </View>
    </View>
  );
};

export default Account;
