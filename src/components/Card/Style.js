import {Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: Platform.select({
    android: {
      elevation: 4,
      backgroundColor: '#fff',
      padding: 5,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.6,
      shadowRadius: 3,
      shadowOffset: {width: 5, height: 7},
      padding: 5,
    },
  }),
});
