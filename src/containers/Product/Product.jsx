import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Product.module.scss';

class Product extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  render() {
    return (
      <div className={classes.root}>
        Product
      </div>
    );
  }
}

export default Product;
