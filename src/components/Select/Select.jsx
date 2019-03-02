import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Select.module.scss';

export class Select extends React.Component {
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
        <select
          className={classes.root}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          {this.props.options.map((opt) => (
            <option
              key={ `op_${opt.value}` }
              disabled={Boolean(opt.disabled)}
              value={opt.value}
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
