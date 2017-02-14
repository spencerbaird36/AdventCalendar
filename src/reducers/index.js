import { combineReducers } from 'redux';
import productsReducer from './products';
import selectedProductReducer from './selected-product';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  products: productsReducer,
  selectedProduct: selectedProductReducer,
  form: formReducer
});

export default rootReducer;
