import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className={classes.root}>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/products">Catalog</Link>&nbsp;
        <Link to="/products/50">Product#50</Link>&nbsp;
        <Link to="/404">Not Found</Link>&nbsp;
        <Link to="/components">Components</Link>&nbsp;
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
