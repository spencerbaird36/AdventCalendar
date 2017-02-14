import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';


class Products extends Component {
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount(){
    this.props.getProducts();
  }
  onProductSelected(product){
    this.props.selectProduct(product);
    this.context.router.push('/checkout');
  }
  showProducts(){

  //  return this.props.products.map((product) => {
  //     return (
  //       <li className="media" key={product.id} onClick={() => this.onProductSelected(product)}>
  //         <div className="media-left">
  //           <a href="#">
  //             <img className="media-object" height="100" src={product.image} />
  //           </a>
  //           <div className="media-body">
  //             <h4 className="media-heading">{product.name}</h4>
  //             <span>{product.description}</span>
  //           </div>
  //         </div>
  //       </li>
  //     )
  //   })
  }
  render(){
    console.log(this.props.products)
    return(
      <ul className="media-list">
        {this.showProducts()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {products: state.products}
}

export default connect(mapStateToProps, actions)(Products)
