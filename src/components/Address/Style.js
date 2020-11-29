import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  addresses: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    padding: '15@s',
    marginTop: '10@vs',
  },
  ship: {
    fontSize: '22@s',
    marginBottom: '8@vs',
  },
  address: {
    fontSize: '15@s',
    lineHeight: 30,
    color: 'blue',
  },
  updateCart: {
    alignItems: 'flex-end',
  },
  update: {
    fontSize: '20@s',
    textDecorationLine: 'underline',
  },
  addAddress: {
    fontSize: '18@s',
    marginTop: '10@vs',
    color: 'red',
  },
});

export default styles;
