import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../../assets/Colors';

export const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  price: {
    color: TINT_COLOR,
    fontSize: '17@s',
  },
  oldPrice: {
    fontSize: '14@s',
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: '5@vs',
  },
});
