import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { linkToHome, linkToShopping, linkToProduct, linkToUi } from 'constants/routes';

import classes from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className={classes.root}>
        <Link to={linkToHome()}>Home</Link>&nbsp;
        <Link to={linkToShopping()}>Catalog</Link>&nbsp;
        <Link to={linkToProduct()}>Product#50</Link>&nbsp;
        <Link to={linkToUi()}>Components</Link>&nbsp;
      </nav>
    );
  }
}

export default Navigation;

// WOMEN
// New In
// Designers
// Clothing
// Shoes
// Bags
// Accessories
// Jewellery
// Vintage
// Editorial
// Sale

// MEN
// New In
// Designers
// Clothing
// Shoes
// Trainers
// Bags
// Accessories
// Watches
// Editorial
// Sale

// KIDS
// New in
// Designers
// Baby girls
// Baby boys
// Girls
// Boys
// Shoes
// Sale
