import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '70@vs',
    paddingHorizontal: 30,
  },
  titleWrapper: {
    alignItems: 'center',
    marginBottom: '60@vs',
  },
  title: {
    fontSize: '22@s',
    fontWeight: '400',
  },
  icon: {
    fontSize: '22@s',
    marginEnd: '10@vs',
    marginTop: '5@vs',
  },
  inputStyleWrapper: {
    fontSize: '15@s',
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '30@vs',
  },
});

export default styles;
