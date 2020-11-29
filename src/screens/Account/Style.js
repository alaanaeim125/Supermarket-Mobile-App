import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    marginTop: '60@vs',
    marginHorizontal: '10@vs',
  },
  head: {
    flexDirection: 'row',
    marginHorizontal: '20@vs',
  },
  line: {
    height: '80@vs',
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: '10@vs',
  },
  image: {
    width: '80@vs',
    height: '80@vs',
    borderRadius: '10@vs',
  },
  info: {
    fontSize: '16@s',
    marginBottom: '5@vs',
  },
  detail: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: '20@s',
    marginRight: '10@vs',
  },
  title: {
    fontSize: '19@s',
  },
  details: {
    marginTop: '50@vs',
  },
  underLine: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: '25@vs',
    marginTop: '5@vs',
  },
});

export default styles;
