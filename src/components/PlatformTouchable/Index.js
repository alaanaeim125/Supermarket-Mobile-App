import React from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const PlatformTouchable = (props) => {
  const Touchable =
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

  return <Touchable {...props} />;
};

export default PlatformTouchable;
