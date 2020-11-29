const initState = {
  token: 'NOT_TOKEN',
  user: {},
  showError: false,
  errMessage: '',
  shippingAddress: {},
  orders: [],
};

const AuthReducers = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload.token,
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
      };

    case 'SHOW_ERROR':
      return {
        ...state,
        showError: action.payload.showError,
        errMessage: action.payload.errMessage,
      };

    case 'SHIPPING_ADDRESS':
      return {
        ...state,
        shippingAddress: action.payload.shippingAddress,
      };

    case 'GET_ORDERS':
      return {
        ...state,
        orders: action.payload.orders,
      };

    case 'LOG_OUT':
      return {
        ...state,
        token: 'NOT_TOKEN',
        user: {},
        showError: false,
        errMessage: '',
      };

    default:
      return state;
  }
};

export default AuthReducers;
