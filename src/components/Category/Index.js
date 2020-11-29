import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {dummyCategory} from '../../utils/dummyData';
import Card from '../Card/Index';
import {styles} from './Styles';
import {cutLongName} from '../../../assets/helperFunction';

const baseURLImages = 'http://rncourseproject.com/uploads/cat-thumbs/resized/';

const Category = (props) => {
  const navigation = useNavigation();
  const {category} = props;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('CategoryScreen', {category: category})
      }
      style={styles.category}>
      <Card>
        <Image
          source={{uri: baseURLImages + category.image}}
          style={styles.image}
        />
      </Card>
      <Text style={styles.title}>{cutLongName(category.name)}</Text>
    </TouchableOpacity>
  );
};

export default Category;
