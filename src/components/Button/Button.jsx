import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Button.module.scss';

export const THEME = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
};

export class Button extends React.Component {
  static propTypes = {
    isSizeFill: PropTypes.bool,
    theme: PropTypes.oneOf(Object.values(THEME)),
    children: PropTypes.node
  }

  static defaultProps = {
    isSizeFill: false,
    theme: THEME.secondary,
    children: null
  };

  render() {
    const { isSizeFill, children, theme } = this.props
    const themeValue = THEME[theme] || THEME.primary;
    const rootClasses = classNames({
      [classes.root]: true,
      [classes.sizeFill]: isSizeFill,
      [classes.themePrimary]: themeValue === THEME.primary,
      [classes.themeSecondary]: themeValue === THEME.secondary,
      [classes.themeTertiary]: themeValue === THEME.tertiary
    });

    return (
      <button className={rootClasses}>
        {children}
      </button>
    );
  }
}

export default Button;
