import React, {useState} from 'react';
import {Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {cutLongName} from '../../../assets/helperFunction';
import styles from './Style';

const baseURLImages = 'http://rncourseproject.com/uploads/cat-thumbs/resized/';

const ParentCategory = (props) => {
  const {category, selectedCategory, setSelectedCategory} = props;

  return (
    <TouchableOpacity
      style={styles.category}
      onPress={() => setSelectedCategory(category)}>
      <Image
        style={[
          styles.image,
          category._id === selectedCategory._id ? styles.imageActive : null,
        ]}
        source={{uri: baseURLImages + category.image}}
      />
      <Text
        style={[
          styles.title,
          category._id === selectedCategory._id ? styles.titleActive : null,
        ]}>
        {category.parentId ? cutLongName(category.name) : 'All'}
      </Text>
    </TouchableOpacity>
  );
};

export default ParentCategory;
