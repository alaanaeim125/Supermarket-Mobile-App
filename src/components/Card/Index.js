import React from 'react';
import {View} from 'react-native';
import {styles} from './Style';

const Card = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

export default Card;
