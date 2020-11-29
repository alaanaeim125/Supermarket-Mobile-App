import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import AppButton from '../components/AppButton/Index';

const TestState = () => {
  const [counter, setCounter] = useState(0);

  const IncrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={style.container}>
      <View style={style.containerbtn}>
        <AppButton
          isLoading={false}
          title="+"
          wrapperStyle={style.wrapperStyle}
          titleStyle={style.titleStyle}
          onPress={IncrementCounter}
        />

        <AppButton
          isLoading={false}
          title="-"
          wrapperStyle={style.wrapperStyle}
          titleStyle={style.titleStyle}
          onPress={decrementCounter}
        />
      </View>
      <Text>{counter}</Text>
    </View>
  );
};

export default TestState;

const {width} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerbtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  wrapperStyle: {
    width: width * 0.2,
  },
});
