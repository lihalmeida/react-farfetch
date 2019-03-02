import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Search from 'components/Search/Search';
import { linkToHome } from 'constants/routes';
import { translate as t } from 'i18n/translate';
import logoImg from 'assets/images/farfetch-logo.svg';

import classes from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.language}>
            PT
          </div>
          <div className={classes.rows}>
            <div className={classes.row1}>
              <div className={classes.navigation}>
                <Navigation />
              </div>
              <Link className={classes.logo} to={ linkToHome() }>
                <img src={ logoImg } alt={ t('HeaderLogoAlt') } />
              </Link>
              <div className={classes.shortcuts}>
                links
              </div>
            </div>
            <div className={classes.row2}>
              <div className={classes.search}>
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
