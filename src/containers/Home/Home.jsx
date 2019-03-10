import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgHome from 'assets/images/fake/home.png';
import classes from './Home.module.scss';

class Home extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  render() {
    return (
      <div className={classes.root}>
        <img src={ imgHome } alt="fake home" className={ classes.fakeContent } />
      </div>
    );
  }
}

export default Home;
