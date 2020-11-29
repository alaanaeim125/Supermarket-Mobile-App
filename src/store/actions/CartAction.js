import axios from 'axios';

export const getCartItems = () => {
  return (dispatch, getState) => {
    axios
      .get('/cart')
      .then((res) => {
        dispatch({
          type: 'GET_ITEMS_CART',
          payload: {cartItems: res.data.items},
        });
      })
      .catch((err) => {
        console.log('errrr ', err);
      });
  };
};
