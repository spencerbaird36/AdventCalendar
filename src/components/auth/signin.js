import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

  renderField({input, label, type, meta: {touched, error}}){
    return (
      <div className="form-group">
        <label>{label}</label>
        <input {...input} className="form-control" type={type} placeholder={label}/>
        {touched && error && <span className="text-danger">{error}</span>}
      </div>
    )
  }

  onSubmit({email, password}){

    console.log(email, password)


  }

  render(){
    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="panel panel-default">
          <div className="panel panel-heading">Sign in</div>
          <div className="panel panel-body">
            <Field name="email" type="text" component={this.renderField} label="Email"/>
            <Field name="password" type="text" component={this.renderField} label= "Password"/>
              <button className="btn btn-primary" action="submit">Sign in</button>
          </div>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signinForm'
})(connect(null, actions)(Signin));
