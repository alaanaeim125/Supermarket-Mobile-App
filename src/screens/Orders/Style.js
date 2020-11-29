import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '5@vs',
  },
  total: {
    fontWeight: 'bold',
    fontSize: '15@s',
    marginBottom: '5@vs',
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: '15@vs',
  },
  icon: {
    fontSize: '20@s',
    paddingLeft: '10@vs',
  },
  title: {
    fontSize: '20@s',
  },
  titleHeader: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
