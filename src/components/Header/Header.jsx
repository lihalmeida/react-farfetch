import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Search from 'components/Search/Search';
import { GENDER, linkToShopping, linkToHome } from 'constants/routes';
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
              <nav className={classes.gender}>
                <Link to={ linkToShopping(GENDER.women) }>
                  {t('NavigationWomen')}
                </Link>
                <Link to={ linkToShopping(GENDER.men) }>
                  {t('NavigationMen')}
                </Link>
                <Link to={ linkToShopping(GENDER.kids) }>
                  {t('NavigationKids')}
                </Link>
              </nav>
              <Link className={classes.logo} to={ linkToHome() }>
                <img src={ logoImg } alt={ t('HeaderLogoAlt') } />
              </Link>
              <div className={classes.shortcuts}>
                links
              </div>
            </div>
            <div className={classes.row2}>
              <div className={classes.nav}>
                <Navigation />
              </div>
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
