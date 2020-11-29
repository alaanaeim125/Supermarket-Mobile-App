import {ScaledSheet} from 'react-native-size-matters';
import {Dimensions} from 'react-native';

const styles = ScaledSheet.create({
  container: {},
  order: {
    flexDirection: 'row',
    backgroundColor: '#F1F2F2',
    padding: 5,
    marginHorizontal: '3@vs',
    borderRadius: 10,
  },
  image: {
    width: '110@s',
    height: '110@s',
    marginRight: '20@vs',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: '15@s',
    marginBottom: '7@vs',
    marginTop: '7@vs',
  },
  statusOrder: {
    alignItems: 'flex-end',
    marginTop: '20@vs',
    marginRight: '22@vs',
  },
  status: {
    fontSize: '18@s',
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default styles;
