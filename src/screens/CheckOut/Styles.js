import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '40@vs',
    paddingHorizontal: '8@vs',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: '22@s',
    marginLeft: '10@vs',
    marginRight: '75@vs',
  },
  title: {
    fontSize: '22@s',
    fontWeight: 'bold',
  },
  calculation: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: '14@vs',
    marginBottom: '20@vs',
  },
  calc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10@vs',
  },
  infoPrice: {
    fontSize: '13@s',
    color: 'gray',
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: '12@vs',
  },
  buy: {
    marginTop: '80@vs',
  },
  buyDone: {
    flex: 1,
    position: 'absolute',
    top: '200@vs',
    left: 0,
    right: 0,
    bottom: 0,
    marginHorizontal: '50@vs',
    height: 200,
    zIndex: 99999,
  },
  opacityBackground: {
    opacity: 0.9,
    backgroundColor: 'gray',
  },
});

export default styles;
