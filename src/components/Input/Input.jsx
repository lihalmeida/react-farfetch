import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.scss';

export class Input extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  };

  static defaultProps = {
    type: 'text',
    value: '',
    placeholder: '',
    onChange: () => {}
  };

  render() {
    return (
      <input
        className={classes.root}
        type={this.props.type}
        value={this.props.value}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
