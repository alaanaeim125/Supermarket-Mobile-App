import {ScaledSheet} from 'react-native-size-matters';
import {TINT_COLOR} from '../../../assets/Colors';

const styles = ScaledSheet.create({
  container: {
    position: 'relative',
  },
  icon: {
    fontSize: 22,
  },
  badgeIcon: {
    width: '15@vs',
    height: '15@vs',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: '10@s',
    position: 'absolute',
    top: -5,
    right: -10,
  },
  focused: {
    color: TINT_COLOR,
  },
});

export default styles;
