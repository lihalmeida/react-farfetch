import React, { Component } from 'react';
import imgHome from 'assets/images/fake/home.png';
import classes from './Home.module.scss';

class Home extends Component {
  render() {
    return (
      <div className={classes.root}>
        <img src={ imgHome } alt="fake home" className={ classes.fakeContent } />
      </div>
    );
  }
}

export default Home;
