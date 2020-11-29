import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './Style';

const DoneBuy = (props) => {
  const {setShowDoneBuy} = props;
  return (
    <View style={styles.container}>
      <Icon name="checkmark-circle-outline" style={styles.icon} />
      <Text style={styles.congrates}>Congrates</Text>
      <Text style={styles.orderDone}>Your Order is Done</Text>
      <TouchableOpacity onPress={setShowDoneBuy}>
        <Text style={styles.ok}>ok</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoneBuy;
