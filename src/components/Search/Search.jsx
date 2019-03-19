import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, ICON } from 'components/Icon/Icon';
import { linkToSearch } from 'constants/routes';
import classes from './Search.module.scss';

export class Search extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    gender: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    gender: '',
    onChange: () => {},
    onSubmit: () => {},

  };

  handleKeyUp = (e) => {
    const ENTER = 13
    if (e.keyCode === ENTER) {
      this.props.onSubmit();
    }
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
          onSubmit={this.props.onSubmit}
        />
        <div
          role="button"
          className={classes.icon}
          onClick={this.props.onSubmit}
        >
          <Link to={linkToSearch(this.props.value, this.props.gender)}>
            <Icon width={30} height={30} icon={ICON.search} />
          </Link>

        </div>
      </div>
    );
  }
}

export default Search;
