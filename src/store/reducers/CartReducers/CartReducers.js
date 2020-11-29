const initState = {
  cartItems: [],
};

const CartReducers = (state = initState, action) => {
  switch (action.type) {
    case 'GET_ITEMS_CART':
      return {
        ...state,
        cartItems: action.payload.cartItems,
      };

    default:
      return state;
  }
};

export default CartReducers;
