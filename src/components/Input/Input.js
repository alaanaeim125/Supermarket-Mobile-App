import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TINT_COLOR} from '../../../assets/Colors';
const Input = (props) => {
  const {
    inputStyleWrapper,
    placeholder,
    placeholderPosition,
    underlined,
    undelinedColor,
    underlinedHeight,
    bordered,
    borderedColor,
    borderedWidth,
    borderedRadius,
    renderIconLeft,
    renderIconRight,
    stacked,
    showValidationFeedback,
    touched,
    isValid,
    ...rest
  } = props;

  return (
    <View
      style={
        bordered && {
          borderWidth: borderedWidth || 1,
          borderColor: borderedColor || '#bbb',
          borderRadius: borderedRadius || 10,
          padding: 10,
        }
      }>
      {stacked && <Text>{placeholder}</Text>}
      <View style={{flexDirection: 'row'}}>
        {renderIconLeft && <View style={styles.icon}>{renderIconLeft()}</View>}
        <TextInput
          placeholder={stacked ? '' : placeholder}
          {...rest}
          style={[
            {
              flex: 1,
              padding: 0,
              textAlign: placeholderPosition || 'left',
            },
            inputStyleWrapper,
          ]}
        />
        {renderIconRight && (
          <View style={styles.icon}>{renderIconRight()}</View>
        )}

        {showValidationFeedback && touched && (
          <Icon
            style={{
              color: isValid ? TINT_COLOR : 'red',
              fontSize: 20,
              fontWeight: 'bold',
            }}
            name={isValid ? 'checkmark' : 'close'}
          />
        )}
      </View>
      {(underlined || stacked) && (
        <View
          style={{
            height: underlinedHeight || 1,
            backgroundColor: undelinedColor || '#bbb',
          }}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
