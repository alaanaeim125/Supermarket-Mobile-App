const initState = {
  categories: [],
  products: [],
  parentCategory: [],
  categoryProducts: {},
  categoryProductNextPage: {},
};

const HomeReducers = (state = initState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY':
      return {
        ...state,
        categories: action.payload.categories,
      };

    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload.products,
      };

    case 'GET_PARENT_CATEGORY':
      return {
        ...state,
        parentCategory: action.payload.parentCategory,
      };

    case 'APPEND_PRODUCTS_TO_CATEGORY':
      return {
        ...state,
        categoryProducts: {
          ...state.categoryProducts,
          [action.payload.categoryId]: (
            state.categoryProducts[action.payload.categoryId] || []
          ).concat(action.payload.products),
        },
      };

    case 'CATEGORY_PRODUCT_NEXT_PAGE':
      return {
        ...state,
        categoryProductNextPage: {
          ...state.categoryProductNextPage,
          [action.payload.categoryId]: action.payload.nextPage,
        },
      };
    default:
      return state;
  }
};

export default HomeReducers;
