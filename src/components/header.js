import React, { Component } from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
// import * as actions from '../actions';

class Header extends Component {


  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/create">Create</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/checkout">Checkout</Link>
          </li>

        </ul>
      </nav>

    )
  }

}


export default Header;
