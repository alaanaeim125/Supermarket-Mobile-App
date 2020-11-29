import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const TestIcons = () => {
  return (
    <View>
      <Text>Test Icons</Text>
      <Image
        source={require('./camera.png')}
        style={{width: 100, height: 100}}
      />

      <Icon style={{color: 'red', fontSize: 50}} name="airplane-outline" />
      <EvilIcons style={{color: 'red', fontSize: 50}} name="trophy" />
    </View>
  );
};

export default TestIcons;
