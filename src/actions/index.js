import { GET_PRODUCTS, SELECT_PRODUCT } from './types';
import axios from 'axios';


export function getProducts(){
  const request = axios.get('products.json');
  return {
    type: GET_PRODUCTS,
    payload: request
  };
}

export function selectProduct(product){
  return {
    type: SELECT_PRODUCT,
    payload: product
  }
}
