const {getActualPrice} = require('../../../assets/helperFunction');

const CartSelectors = (props) => {
  const cartItems = props.cart.cartItems || [];
  const total = cartItems.reduce((acc, item) => {
    return (
      acc +
      item.count * getActualPrice(item.product.price, item.product.discount)
    );
  }, 0);

  return total.toFixed(2);
};

export default CartSelectors;
