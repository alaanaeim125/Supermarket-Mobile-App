import React from 'react';
import {Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {dummyProductWithDiscount} from '../../utils/dummyData';
import Card from '../Card/Index';
import Price from '../Price/Index';
import {styles} from './Styles';
import {cutLongName} from '../../../assets/helperFunction';

const baseURLImages = 'http://rncourseproject.com/uploads/products/resized/';

const Product = (props) => {
  const navigation = useNavigation();
  const {product} = props;

  return (
    <TouchableOpacity
      style={styles.product}
      onPress={() => navigation.navigate('ProductScreen', {product: product})}>
      <Card>
        <Image
          source={{uri: baseURLImages + product.images[0]}}
          style={styles.image}
        />
      </Card>
      <Price
        price={product.price}
        discount={dummyProductWithDiscount[0].discount}
      />
      <Text style={styles.title}>
        {cutLongName(product.title, (maxChar = 18))}
      </Text>
    </TouchableOpacity>
  );
};

export default Product;
