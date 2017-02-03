import { combineReducers } from 'redux';
import productsReducer from './products';
import selectedProductReducer from './selected-product';

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer
});

export default rootReducer;
