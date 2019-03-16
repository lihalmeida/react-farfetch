import React, { Component } from 'react';
import loaderGif from 'assets/images/farfetch-loader.gif';
import classes from './Loader.module.scss';

export class Loader extends Component {
  render() {
    return (
      <img className={classes.root} src={loaderGif} alt="" />
    );
  }
};

export default Loader;
