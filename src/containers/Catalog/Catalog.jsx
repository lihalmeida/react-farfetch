import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Catalog.module.scss';

class Catalog extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  render() {
    return (
      <div className={classes.root}>
        Catalog
      </div>
    );
  }
}

export default Catalog;
