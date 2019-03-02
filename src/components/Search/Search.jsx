import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon/Icon';
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
    const ENTER = 13
    if (e.keyCode === ENTER) {
      this.props.onSubmit();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
  }

  render() {
    return (
      <div className={classes.root}>
        <input
          className={classes.searchField}
          type="search"
          value={this.props.value}
          placeholder={this.props.placehold}
          onChange={this.props.onChange}
          onKeyUp={this.handleKeyUp}
          onSubmit={this.handleSubmit}
        />
        <div
          role="button"
          className={classes.searchInput}
          onClick={this.props.onSubmit}
        >
          <Icon width={30} height={30} icon="search" />
        </div>
      </div>
    );
  }
}

export default Search;
