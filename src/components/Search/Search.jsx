import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Search.module.scss';

export class Search extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    onChange: () => {},
    onSubmit: () => {},

  };

  handleKeyUp = (e) => {
    console.log('key up', e);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
  }

  render() {
    return (
      <form className={classes.root}>
        <input
          className={classes.searchField}
          type="search"
          value={this.props.value}
          placeholder={this.props.placehold}
          onChange={this.props.onChange}
          onKeyUp={this.props.handleKeyUp}
          onSubmit={this.props.handleSubmit}
        />
        <button
          type="button"
          className={classes.searchInput}
          onClick={this.props.onSubmit}
        >
          <span>a</span>
        </button>
      </form>
    );
  }
}

export default Search;
