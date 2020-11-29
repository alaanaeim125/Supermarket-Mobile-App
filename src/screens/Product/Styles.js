import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const {width} = Dimensions.get('window');

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  productWrapper: {
    position: 'relative',
    marginBottom: '10@vs',
  },
  icon: {
    color: 'white',
    fontSize: '22@s',
    marginEnd: '50@vs',
  },
  titleProduct: {
    color: 'black',
    fontSize: '15@s',
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft: '38@vs',
  },
  title: {color: 'white', fontSize: '22@s'},
  productHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    top: '35@vs',
  },
  productImage: {
    width: width,
    height: width * 0.9,
  },
  info: {
    marginHorizontal: '10@vs',
  },
  productDescription: {
    fontSize: '14@s',
    marginTop: '12@vs',
    lineHeight: '20@vs',
  },
  productBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '30@vs',
    marginHorizontal: '10@vs',
  },
});

export default styles;
