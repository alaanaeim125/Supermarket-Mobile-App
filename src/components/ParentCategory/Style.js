const {ScaledSheet} = require('react-native-size-matters');

const styles = ScaledSheet.create({
  category: {margin: '6@vs', alignItems: 'center'},
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  imageActive: {borderWidth: 1, borderColor: 'blue'},
  titleActive: {
    color: 'blue',
  },
});

export default styles;
