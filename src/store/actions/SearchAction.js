import axios from 'axios';

export const getSearchProduct = (query) => {
  return (dispatch, getState) => {
    const productNext = getState().search.page;

    if (productNext) {
      axios
        .get('/product/search/', {params: {query: query, page: productNext}})
        .then((res) => {
          const {lastPage, nextPage} = res.data;
          page = nextPage > lastPage ? null : nextPage;

          dispatch({type: 'UPDATE_SEARCH_PAGE', payload: {page: page}});
          dispatch({
            type: 'SET_SEARCH_PRODUCTS',
            payload: {products: res.data.data},
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      dispatch({
        type: 'SET_SEARCH_PRODUCTS',
        payload: {products: []},
      });
    }
  };
};
