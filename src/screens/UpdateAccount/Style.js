import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '15@vs',
  },
  inputStyleWrapper: {
    fontSize: '18@s',
  },
  name: {
    marginBottom: '40@vs',
  },
  profileHeader: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: '20@s',
  },
  title: {
    fontSize: '20@s',
  },
  titleHeader: {
    flex: 1,
    alignItems: 'center',
  },
  update: {
    marginTop: '50@vs',
  },
  save: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '35@vs',
  },
});

export default styles;
