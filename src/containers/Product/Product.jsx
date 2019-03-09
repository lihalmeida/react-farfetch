import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Footer/Footer.jsx';
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
        <div className={classes.globalContainer}>
          <div className={classes.product}>
            <div className={classes.img}></div>
            <div className={classes.productInfo}></div>
          </div>
          <div className={classes.history}>
            Home > Women > Clothing > Beachwear
          </div>
          <div className={classes.detailsContent}>

          </div>
          <div className={classes.contactUs}>
            <h2>Contact Us</h2>
            By Email
            Order By Phone +44 (0) 20 3962 2362
            Farfetch ID: 13599758
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product;
