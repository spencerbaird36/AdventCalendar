import { GET_PRODUCTS,
  SELECT_PRODUCT,
  CREATE_STRIPE
} from './types';
import axios from 'axios';
import Scriptly from 'scriptly';


export function signinUser({email, password}){
  //submit email, password to server
  //if request is good, update state to indicate user is authed
  //save jwt token
  //redirect to route /feature

  //if request is bad, show an error
}

export function getProducts(){
  const request = axios.get('/api/images');
  // const request = axios.get('https://pixabay.com/api/?key=4459240-5a6fd6b798be97215b06bed72&editors_choice=true&q=sports&image_type=photo');
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

function createStripeToken(card){
  return new Promise((res, rej) => {
    Stripe.setPublishableKey('pk_test_Ns5wyC7XDSRUt3zG8ZsuarTg');
    Stripe.card.createToken(card, (status, response) => {
      if(response.error) rej(response.error);
      else res(response.id);

    });
  })
}

function performCheckout(product, address, token){
  //make call to webserver to make payment on server
  console.log(`Using ${token} to purchase ${product.name} for ${product.price}`)
}

export function completeCheckout(product, address, payment){
  const payload = Scriptly.loadJavascript("https://js.stripe.com/v2/")
    .then(() => (createStripeToken(payment)))
    .then((token) => (performCheckout(product, address, token)));
    console.log('in actions', payload)
  return {
    type: CREATE_STRIPE,
    payload
  }
}
