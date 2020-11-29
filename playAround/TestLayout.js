import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Dimensions, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import rem from '../assets/constants';

//instead using StyleSheet you can use ScaledSheet
const {width} = Dimensions.get('window');

const TestLayout = () => {
  const [realTimeWidth, setWidth] = useState(width);

  useEffect(() => {
    Dimensions.addEventListener('change', ({window}) => {
      setWidth(window.width);
    });
    Dimensions.removeEventListener('change');

    return () => {
      return;
    };
  }, []);

  return (
    <View style={[styles.container, {width: realTimeWidth * 0.9}]}>
      <TextInput placeholder="username ... " style={styles.input} />
      <View style={realTimeWidth > 500 ? {flexDirection: 'row'} : null}>
        <View style={realTimeWidth > 500 ? {flex: 1, marginEnd: 10} : null}>
          <TextInput placeholder="password ... " style={styles.input} />
        </View>
        <View style={realTimeWidth > 500 ? {flex: 1, marginStart: 10} : null}>
          <TextInput placeholder="confirm password ... " style={styles.input} />
        </View>
      </View>
      <View style={styles.titlea}>
        <Text style={styles.title}>Sign Up</Text>
      </View>
      <View>
        <Text style={styleScalesSheet.titleStyle}>Sign Up</Text>
      </View>
    </View>
  );
};

export default TestLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    fontSize: 22 * rem,
    height: 40 * rem,
  },
  titlea: {
    alignItems: 'center',
  },
  title: {
    fontSize: 29 * rem,
  },
});

const styleScalesSheet = ScaledSheet.create({
  titleStyle: {
    fontSize: '22@s',
  },
});
