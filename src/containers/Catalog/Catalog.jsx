import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES_BY_ROUTE } from 'utils/categories';
import classes from './Catalog.module.scss';

class Catalog extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  componentDidMount() {
    const routeParams = this.props.match.params || {};
    const categoryFromUrl = routeParams.category || '';
    const category = CATEGORIES_BY_ROUTE[categoryFromUrl];
  }

  render() {
    return (
      <div className={classes.root}>
        Catalog
      </div>
    );
  }
}

export default Catalog;
