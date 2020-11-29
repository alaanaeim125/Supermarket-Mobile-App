import {createStore, combineReducers, applyMiddleware} from 'redux';
import AuthReducers from './reducers/AuthReducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import HomeReducers from './reducers/HomeReducers';
import CartReducers from './reducers/CartReducers/CartReducers';
const reducers = combineReducers({
  auth: AuthReducers,
  home: HomeReducers,
  cart: CartReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

//(composeWithDevTools(applyMiddleware(thunk, logger)
