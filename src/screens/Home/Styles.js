import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '5@s',
    marginTop: '25@vs',
  },
  categories: {
    height: height * 0.5,
  },
  productsList: {
    marginTop: '-30@vs',
  },
  titleCategory: {
    fontSize: '20@s',
    color: '#bbb',
    marginTop: '20@vs',
  },
  titleProduct: {
    fontSize: '20@s',
    color: '#bbb',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
