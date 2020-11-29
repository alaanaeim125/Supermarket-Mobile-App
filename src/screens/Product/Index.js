import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import styles from './Styles';
import Price from '../../components/Price/Index';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import {cutLongName} from '../../../assets/helperFunction';
const baseURLImages = 'http://rncourseproject.com/uploads/products/';

const Product = (props) => {
  const {product} = props.route.params;

  return (
    <View style={styles.container}>
      <View style={styles.productWrapper}>
        <Image
          style={styles.productImage}
          source={{uri: baseURLImages + product.images[0]}}
        />
      </View>
      <View style={styles.info}>
        <Price price={product.price} />
        <Text style={styles.titleProduct}>
          {cutLongName(product.title, 30)}
        </Text>
        <Text style={styles.productDescription}>{product.details}</Text>
      </View>
      <View style={styles.productBtn}>
        <AddToCartButton productId={product._id} />
      </View>
    </View>
  );
};

export default Product;
