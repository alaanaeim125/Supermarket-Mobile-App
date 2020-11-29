import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '15@vs',
  },
  inputStyleWrapper: {
    fontSize: '17@s',
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
  Address: {
    flex: 1,
    marginTop: '50@vs',
  },
  save: {
    // flex: 1,
    justifyContent: 'flex-end',
    marginBottom: '5@vs',
  },
  inputAddress: {
    marginBottom: '25@vs',
  },
  address: {
    backgroundColor: 'white',
    marginBottom: '10@vs',
    padding: '10@vs',
    borderRadius: 20,
  },
  infoAddress: {
    fontSize: '14@s',
    fontWeight: 'bold',
  },
});

export default styles;
