import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';


import App from './components/app';
import CheckoutForm from './components/checkout';
import Create from './components/create';
import Products from './components/products';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/create" component={Create}/>
        <Route path="/checkout" component={CheckoutForm} />
        <Route path="/products" component={Products} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
