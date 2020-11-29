import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const imageWidth = width / 3;
const imageHeight = imageWidth * 2;

export const styles = ScaledSheet.create({
  category: {
    alignItems: 'flex-start',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  title: {
    fontSize: '18@s',
  },
});
