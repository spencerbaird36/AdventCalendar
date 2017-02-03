import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

class CheckoutForm extends Component {
  render(){
    let name = this.props.selectedProduct ? this.props.selectedProduct.name : "";
    return (
      <div>
        <h2>Checkout Form</h2>
        {name}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {selectedProduct: state.selectedProduct};
}

export default connect(mapStateToProps)(CheckoutForm);
