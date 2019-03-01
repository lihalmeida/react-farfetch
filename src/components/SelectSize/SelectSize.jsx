import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './SelectSize.module.scss';

export class SelectSize extends React.Component {
  render() {
    return (
      <div>
        <select className={classes.root}>
          <option disabled="" value="default">Select size - France</option>
          <option value="34">34 FR</option>
          <option value="34">36 FR</option>
          <option value="34">38 FR</option>
        </select>
      </div>
    );
  }
}

export default SelectSize;
