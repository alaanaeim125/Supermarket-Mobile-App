import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const imageWidth = width / 3;
const imageHeight = imageWidth * 2;

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '12@vs',
  },
  category: {},
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  title: {
    fontSize: '18@s',
  },
  productsList: {
    marginTop: '15@vs',
  },
  titleProduct: {
    fontSize: '15@s',
    paddingLeft: '10@s',
  },
});
