import React from 'react';
import {View, Text} from 'react-native';
import Product from '../../components/Product/Index';
import styles from './Styles';

const Products = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Product />
    </View>
  );
};

export default Products;
