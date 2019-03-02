import React, { Component } from 'react';
import { GENDER, linkToShopping } from 'constants/routes';
import { translate as t } from 'i18n/translate';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.scss';

class Navigation extends Component {

  // 'NavigationWomen'
  // 'NavigationWomenNewIn'
  // 'NavigationWomenDesigners'
  // 'NavigationWomenClothing'
  // 'NavigationWomenShoes'
  // 'NavigationWomenBags'
  // 'NavigationWomenAccessories'
  // 'NavigationWomenJewellery'
  // 'NavigationWomenVintage'
  // 'NavigationWomenEditorial'
  // 'NavigationWomenSale'


  renderWomenMenu() {
    return (
      <div>women</div>
    );
  }

  renderMenMenu() {
    // 'NavigationMen'
    // 'NavigationMenNewIn'
    // 'NavigationMenDesigners'
    // 'NavigationMenClothing'
    // 'NavigationMenShoes'
    // 'NavigationMenTrainers'
    // 'NavigationMenBags'
    // 'NavigationMenAccessories'
    // 'NavigationMenWatches'
    // 'NavigationMenEditorial'
    // 'NavigationMenSale'

    return (
      <div>men</div>
    );
  }

  renderKidsMenu() {
    // 'NavigationKids'
    // 'NavigationKidsNewIn'
    // 'NavigationKidsDesigners'
    // 'NavigationKidsBaby girls'
    // 'NavigationKidsBaby boys'
    // 'NavigationKidsGirls'
    // 'NavigationKidsBoys'
    // 'NavigationKidsShoes'
    // 'NavigationKidsSale'

    return (
      <div>kids</div>
    );
  }

  render() {
    return (
      <nav className={classes.root}>
        <div className={classes.gender}>
          <Link className={classes.genderRoot} to={ linkToShopping(GENDER.women) }>
            {t('NavigationWomen')}
          </Link>
          <div className={classes.genderMenu}>
            { this.renderWomenMenu() }
          </div>
        </div>
        <div className={classes.gender}>
          <Link className={classes.genderRoot} to={ linkToShopping(GENDER.men) } >
            {t('NavigationMen')}
          </Link>
          <div className={classes.genderMenu}>
            { this.renderMenMenu() }
          </div>
        </div>
        <div className={classes.gender}>
          <Link className={classes.genderRoot} to={ linkToShopping(GENDER.kids) } >
            {t('NavigationKids')}
          </Link>
          <div className={classes.genderMenu}>
            { this.renderKidsMenu() }
          </div>
        </div>

        {/*
        <Link to="/">Home</Link>&nbsp;
        <Link to="/products">Catalog</Link>&nbsp;
        <Link to="/products/50">Product#50</Link>&nbsp;
        <Link to="/404">Not Found</Link>&nbsp;
        <Link to="/components">Components</Link>&nbsp;
        */}
      </nav>
    );
  }
}

export default Navigation;
