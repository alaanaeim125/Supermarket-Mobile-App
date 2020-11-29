const {getActualPrice} = require('../../../assets/helperFunction');

const CartSelectors = (props) => {
  const cartItems = props.cart.cartItems || [];

  console.log('cartItems : ', cartItems);

  const total = cartItems.reduce((acc, item) => {
    return acc + getActualPrice(item.product.price, item.product.discount);
  }, 0);

  return total;
};

export default CartSelectors;
