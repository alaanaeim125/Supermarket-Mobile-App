import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Style';

const Address = (props) => {
  const {navigation, addressShip} = props;

  return (
    <View style={styles.addresses}>
      <Text style={styles.ship}>Shipt To</Text>
      {addressShip ? (
        <View>
          <Text style={styles.address}>Name : {addressShip.name}</Text>
          <Text style={styles.address}>Phone : {addressShip.phone}</Text>
          <Text style={styles.address}>City : {addressShip.city}</Text>
          <Text style={styles.address}>Area : {addressShip.area}</Text>
          <Text style={styles.address}>Street : {addressShip.street}</Text>
          <Text style={styles.address}>Buillding : {addressShip.building}</Text>
          <View style={styles.updateCart}>
            <TouchableOpacity onPress={() => navigation.navigate('AddAdress')}>
              <Text style={styles.update}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text style={styles.addAddress}>please Select || Add Address</Text>
      )}
    </View>
  );
};

export default Address;
