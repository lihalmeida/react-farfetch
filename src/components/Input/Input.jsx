import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Input.module.scss';

export class Input extends React.Component {
  render() {
    return (
      <input
        type="text"
        name="input"
        placeholder=""
        maxLength="250"
        className={classes.root}
      />
    );
  }
}

export default Input;
