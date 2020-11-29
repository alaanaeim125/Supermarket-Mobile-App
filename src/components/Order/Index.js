import React from 'react';
import {View, Image, Text} from 'react-native';
import Card from '../../components/Card/Index';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import Price from '../Price/Index';
import styles from './Style';

const Order = (props) => {
  const {order} = props;

  return (
    <Card style={styles.container}>
      <View style={styles.order}>
        <View>
          <Image style={styles.image} source={{uri: order.imageUrl}} />
        </View>
        <View style={{flex: 1}}>
          <Text numberOfLines={2} style={styles.title}>
            {order.title}
          </Text>
          <Price price={order.price} discount={order.discount} />
          <View style={styles.statusOrder}>
            <Text style={styles.status}>{order.status}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default Order;
