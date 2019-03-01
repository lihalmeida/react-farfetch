import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Search.module.scss';

export class Search extends React.Component {
  render() {
    return (
      <form className={classes.root}>
        <input
          type="search"
          name="search"
          placeholder="Search"
          maxLength="200"
          className={classes.searchField}
        />
        <button
          type="submit"
          value="Submit"
          className={classes.searchInput}
        >
          <span>a</span>
        </button>
      </form>
    );
  }
}

export default Search;
