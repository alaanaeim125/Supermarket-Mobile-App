import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: '25@vs',
    borderRadius: '10@vs',
    zIndex: 99999,
  },
  ok: {fontSize: '18@s', fontWeight: 'bold', margin: '10@vs', color: 'blue'},
  orderDone: {fontSize: '16@s', fontWeight: 'bold', margin: '10@vs'},
  icon: {fontSize: '45@s', color: 'green', margin: '10@vs'},
  congrates: {fontSize: '25@s', margin: '10@vs'},
});

export default styles;
