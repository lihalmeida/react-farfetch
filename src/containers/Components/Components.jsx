import React, { Component } from 'react';
import { Button, THEME } from '../../components/Button.jsx'
import classes from './Components.module.scss';

class Components extends Component {
  render() {
    return (
      <div className={classes.root}>
      <Button>
          defaults
        </Button>
        <Button
          isSizeFill
          theme={THEME.primary}
        >
          Add to bag
        </Button>
        <Button
          theme={THEME.secondary}
        >
          Wishlist
        </Button>
      </div>
    );
  }
}

export default Components;
