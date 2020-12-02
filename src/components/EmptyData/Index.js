import React from 'react';
import {Text, View} from 'react-native';
import EmptyIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Style';

const EmptyData = ({message, nameIcon}) => {
  return (
    <View style={styles.container}>
      <EmptyIcon name={nameIcon} style={styles.icon} />
      <Text style={styles.title}>{message}</Text>
    </View>
  );
};

export default EmptyData;
