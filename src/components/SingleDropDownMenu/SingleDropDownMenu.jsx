import React from 'react';
import PropTypes from 'prop-types';
import { Icon, ICON } from 'components/Icon/Icon.jsx';
import classes from './SingleDropDownMenu.module.scss';

export class SingleDropDownMenu extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      disabled: PropTypes.bool,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })),
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    options: [],
    value: '',
    onChange: () => {},
  };

  render() {
    return (
      <div>
        <div className={classes.dropdown}>
          <div className={classes.sortBy}>
            <span>Sort By</span>
            <span className={classes.icon}><Icon icon={ICON.caretDownSmall} /></span>
          </div>
          <ul className={classes.dropdownContent}>
            <li>Our Picks</li>
            <li>Newest First</li>
            <li>Price: high to low</li>
            <li>Price: low to high</li>
          </ul>
        </div>

      </div>
    );
  }
}

export default SingleDropDownMenu;
