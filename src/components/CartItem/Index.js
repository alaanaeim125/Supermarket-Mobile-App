import React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/Card/Index';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import Price from '../Price/Index';
import styles from './Styles';
import {cutLongName, getActualPrice} from '../../../assets/helperFunction';
const baseURLImages = 'http://rncourseproject.com/uploads/products/resized/';

const CartItem = (props) => {
  const {item, navigation} = props;

  return (
    <Card style={styles.container}>
      <View>
        <View style={styles.cart}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProductScreen', {product: item.product})
            }>
            <Image
              style={styles.image}
              source={{uri: baseURLImages + item.product.images[0]}}
            />
          </TouchableOpacity>
          <View style={{flex: 1}}>
            <Text style={styles.title}>
              {cutLongName(item.product.title, 25)}
            </Text>
            <Price
              price={item.product.price}
              discount={item.product.discount}
              countItems={item.count}
            />
            <View style={styles.addToCart}>
              <AddToCartButton
                productId={item.product._id}
                cost={getActualPrice(item.product.price, item.product.discount)}
                countItems={item.product.increaseCount}
              />
            </View>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default CartItem;
