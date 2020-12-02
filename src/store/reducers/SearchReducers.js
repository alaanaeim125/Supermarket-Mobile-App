const initState = {
  products: [],
  page: 1,
};

const SearchReducers = (state = initState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
      };

    case 'UPDATE_SEARCH_PAGE':
      return {
        ...state,
        page: action.payload.page,
      };

    default:
      return state;
  }
};

export default SearchReducers;
