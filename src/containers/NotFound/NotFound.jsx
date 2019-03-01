import React, { Component } from 'react';
import classes from './NotFound.module.scss';

class NotFound extends Component {
  render() {
    return (
      <div className={classes.root}>
        404
      </div>
    );
  }
}

export default NotFound;
