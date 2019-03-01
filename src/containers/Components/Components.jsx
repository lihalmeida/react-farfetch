import React, { Component } from 'react';
import { Button, THEME } from '../../components/Button/Button.jsx';
import Search from '../../components/Search/Search.jsx';
import SelectSize from '../../components/SelectSize/SelectSize.jsx';
import Input from '../../components/Input/Input.jsx'
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
        <Search />
        <SelectSize />
        <Input />
      </div>
    );
  }
}

export default Components;
