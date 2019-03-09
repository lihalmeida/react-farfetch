import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Filter.module.scss';

export class Filter extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  render() {
    return (
      <ul className={classes.root}>
        <li>
          <div>Category</div>
          <div>
            <input type="checkbox" />Beach Acessories
            <input type="checkbox" />Beach Cover-Ups
            <input type="checkbox" />Beach Dresses
          </div>
        </li>
        <li>
          <div>Colour</div>
          <div>
            <ul>
              <li className={classes.colors}>
                <span className={classes.color}>
                </span>
                <span className={classes.colorName}>
                  Yellow
                </span>
              </li>
              <li className={classes.colors}>
                <span className={classes.color}>
                </span>
                <span className={classes.colorName}>
                  Yellow
                </span>
              </li>
              <li className={classes.colors}>
                <span className={classes.color}>
                </span>
                <span className={classes.colorName}>
                  Yellow
                </span>
              </li>
              <li className={classes.colors}>
                <span className={classes.color}>
                </span>
                <span className={classes.colorName}>
                  Yellow
                </span>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>Price</div>
          <div>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
            />
          </div>
        </li>
      </ul>
    );
  }
}

export default Filter;
