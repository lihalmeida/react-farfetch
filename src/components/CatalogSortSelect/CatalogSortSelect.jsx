import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icon, ICON } from 'components/Icon/Icon.jsx';
import { translate as t } from 'i18n/translate'
import classes from './CatalogSortSelect.module.scss';

export class CatalogSortSelect extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })),
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    options: [],
    value: '',
    onChange: () => {},
  };

  handleOptionClick = (option) => {
    this.props.onChange(option.value);
  }

  renderOption = (option) => {
    const optionClassNames = classNames({
      [classes.sortOpt]: true,
      [classes.sortOptActive]: option.value === this.props.value
    });

    return (
      <li
        className={ optionClassNames }
        onClick={() => this.handleOptionClick(option)}
        key={ option.value }
      >
        <Link to={option.url}>{option.label}</Link>
      </li>
    );
  }

  render() {
    return (
      <div className={classes.root}>
        <ul className={classes.sortContent}>
          <li className={classes.sort}>
            <div className={classes.align}>
              <span>{ t('CatalogSortSelectTitle') }</span>
              <span className={classes.icon}><Icon icon={ICON.caretDownSmall} /></span>
            </div>
            <ul>
              { this.props.options.map(this.renderOption) }
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default CatalogSortSelect;
