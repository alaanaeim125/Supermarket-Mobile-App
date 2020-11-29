import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import PlatformTouchable from '../PlatformTouchable/Index';

const AppButton = (props) => {
  const {wrapperStyle, titleStyle, title, isLoading, disabled, ...rest} = props;
  return (
    <View>
      <PlatformTouchable
        disabled={disabled || isLoading}
        style={[
          style.wrapperStyle,
          wrapperStyle,
          disabled ? style.disabled : null,
        ]}
        {...rest}>
        {isLoading ? (
          <ActivityIndicator style={{fontSize: 18}} color="white" />
        ) : (
          <Text style={[style.titleStyle, titleStyle]}>{title}</Text>
        )}
      </PlatformTouchable>
    </View>
  );
};

export default AppButton;

const {width} = Dimensions.get('window');
const style = StyleSheet.create({
  wrapperStyle: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  disabled: {
    opacity: 0.5,
  },
});
