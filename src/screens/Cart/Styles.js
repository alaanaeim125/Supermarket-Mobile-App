import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginTop: '10@vs',
  },
  items: {flex: 1},
  empty: {flex: 1},
  checkout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: '25@vs',
    paddingTop: '10@vs',
    marginBottom: '20@vs',
  },
  total: {
    fontWeight: 'bold',
    fontSize: '15@s',
    marginBottom: '5@vs',
  },
});

export default styles;
