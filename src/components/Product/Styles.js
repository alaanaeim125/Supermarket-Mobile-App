import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const imageWidth = width / 2 - 15;
const imageHeight = imageWidth * 2;

export const styles = ScaledSheet.create({
  product: {
    alignItems: 'flex-start',
    marginBottom: '15@vs',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: '10@vs',
  },
  title: {
    fontSize: '15@s',
  },
});
