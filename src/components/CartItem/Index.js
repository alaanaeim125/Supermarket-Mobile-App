import React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/Card/Index';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import Price from '../Price/Index';
import styles from './Styles';

const CartItem = (props) => {
  const {item} = props;
  const navigation = useNavigation();

  return (
    <Card style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
        <View style={styles.cart}>
          <View>
            <Image style={styles.image} source={{uri: item.imageUrl}} />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.title}>{item.title}</Text>
            <Price price={item.price} discount={item.discount} />
            <View style={styles.addToCart}>
              <AddToCartButton />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

export default CartItem;
