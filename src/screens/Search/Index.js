import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/Input/Input';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Style';

const Search = () => {
  const renderIconRight = () => {
    return <Icon style={styles.icon} name="search" />;
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Type Here ..... "
        bordered
        renderIconRight={renderIconRight}
        inputStyleWrapper={styles.inputStyleWrapper}
      />
    </View>
  );
};

export default Search;
