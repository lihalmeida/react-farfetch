import React from 'react';
import PropTypes from 'prop-types';
import { Icon, ICON } from 'components/Icon/Icon';
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
          className={classes.input}
          type="search"
          value={this.props.value}
          placeholder={this.props.placehold}
          onChange={this.props.onChange}
          onKeyUp={this.handleKeyUp}
          onSubmit={this.handleSubmit}
        />
        <div
          role="button"
          className={classes.icon}
          onClick={this.props.onSubmit}
        >
          <Icon width={30} height={30} icon={ICON.search} />
        </div>
      </div>
    );
  }
}

export default Search;
