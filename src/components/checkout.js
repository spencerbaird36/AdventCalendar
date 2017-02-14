import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CheckoutForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  renderField({input, label, type, meta: {touched, error}}){
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} className="form-control" type={type} placeholder={label}/>
        {touched && error && <span className="text-danger">{error}</span>}
      </div>
    )
  }

  onSubmit(props){
    console.log(props)
    let exp_split = props.exp.split("-");

    const payment = {
      number: props.card,
      exp_month: exp_split[1],
      exp_year: exp_split[0],
      cvc: props.cvc
    }
    const address = {
      street: props.street,
      city: props.city,
      state: props.state,
      postal: props.zip
    }
    this.props.completeCheckout(this.props.selectedProduct, address, payment);
  }
  render(){
    const {fields: {street, city, state, zip, card, exp, cvc}, input, handleSubmit} = this.props
    return (
       <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
         <h1>Purchase form</h1>
         <div className="panel panel-default">
           <div className="panel-heading">Address</div>
           <div className="panel-body">
             <Field name="street" type="text" component={this.renderField} label="Street" placeholder="555 Green Street"/>
             <Field name="city" type="text" component={this.renderField} label="City" placeholder="San Francisco"/>
             <Field name="state" type="text" component={this.renderField} label="State" placeholder="CA"/>
             <Field name="zip" type="text" component={this.renderField} label="ZIP" placeholder="94133"/>
          </div>
         </div>
         <div className="panel panel-default">
           <div className="panel-heading">Payment</div>
           <div className="panel-body">
             <Field name="card" type="text" component={this.renderField} label="CC Number" placeholder="Enter your CC#"/>
             <Field name="exp" type="date" component={this.renderField} label="Expiration Date" placeholder="Enter expiration"/>
             <Field name="cvc" type="text" component={this.renderField} label="CVC" placeholder="Enter CVC"/>
          </div>
         </div>
         <button type="submit" className="btn btn-primary">Checkout</button>
       </form>
     );
   }
}

// const renderField = ({input, label, type, meta: {touched, error}}) => {
//     console.log(input.value)
//     return (
//       <div className="form-group">
//         <label>{label}</label>
//         <input {...input} className="form-control" type={type} placeholder={label}/>
//         {touched && error && <span className="text-danger">{error}</span>}
//       </div>
//     )
// }

function validate(values){
  const errors = {};
  if(!values.street){
    errors.street = "Enter a street address"
  }
  if(!values.city){
    errors.city = "Enter a city"
  }
  if(!values.state){
    errors.state = "Enter a state"
  }
  if(!values.zip){
    errors.zip = "Enter a ZIP code"
  } else if (values.zip.length !== 5){
    errors.zip = "Enter a valid zip code"
  }
  if(!values.card){
    errors.card = "Enter a CC#"
  }
  if(!values.exp){
    errors.exp = "Enter the expiration date"
  }
  if(!values.cvc){
    errors.cvc = "Enter the CVC#"
  }
  return errors;
}

function mapStateToProps(state){
  return {selectedProduct: state.selectedProduct};
}


export default reduxForm({
  form: 'CheckoutForm',
  fields: ['street', 'city', 'state', 'zip', 'card', 'exp', 'cvc'],
  validate
})(connect(mapStateToProps, actions)(CheckoutForm));
