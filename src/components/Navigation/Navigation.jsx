import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GENDER, linkToShopping } from 'constants/routes';
import { Link } from 'react-router-dom';
import { translate as t } from 'i18n/translate';
import classes from './Navigation.module.scss';


const LINKS_WOMEN = [
  {
    text: t('NavigationWomenNewIn'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenDesigners'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenClothing'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenShoes'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenBags'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenAccessories'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenJewellery'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenVintage'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenEditorial'),
    url: linkToShopping(GENDER.women, '1111')
  }, {
    text: t('NavigationWomenSale'),
    url: linkToShopping(GENDER.women, '1111'),
    isRed: true
  }
];
const LINKS_MEN = [
  {
    text: t('NavigationMenNewIn'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenDesigners'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenClothing'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenShoes'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenTrainers'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenBags'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenAccessories'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenWatches'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenEditorial'),
    url: linkToShopping(GENDER.men, '2222')
  }, {
    text: t('NavigationMenSale'),
    url: linkToShopping(GENDER.men, '2222'),
    isRed: true
  },
];
const LINKS_KIDS = [
  {
    text: t('NavigationKidsNewIn'),
    url: linkToShopping(GENDER.kids, '333333')
  }, {
    text: t('NavigationKidsDesigners'),
    url: linkToShopping(GENDER.kids, '333333')
  }, {
    text: t('NavigationKidsBabyGirls'),
    url: linkToShopping(GENDER.kids, '333333')
  }, {
    text: t('NavigationKidsBabyBoys'),
    url: linkToShopping(GENDER.kids, '333333')
  }, {
    text: t('NavigationKidsGirls'),
    url: linkToShopping(GENDER.kids, '333333')
  }, {
    text: t('NavigationKidsBoys'),
    url: linkToShopping(GENDER.kids, '333333')
  }, {
    text: t('NavigationKidsShoes'),
    url: linkToShopping(GENDER.kids, '333333')
  }, {
    text: t('NavigationKidsSale'),
    url: linkToShopping(GENDER.kids, '333333'),
    isRed: true
  },
];

class Navigation extends Component {
  static propTypes = {
    activeGender: PropTypes.string
  };

  static defaultProps = {
    activeGender: ''
  };

  renderLink(link, idx) {
    const cNames = classNames({
      [classes.category]: true,
      [classes.red]: link.isRed
    });

    return (
      <Link className={cNames} to={link.url} key={idx}>
        <span>{link.text}</span>
      </Link>
    );
  }

  render() {
    const { activeGender } = this.props;
    const womenClassNames = classNames({
      [classes.gender]: true,
      [classes.genderActive]: activeGender === GENDER.women
    });
    const menClassNames = classNames({
      [classes.gender]: true,
      [classes.genderActive]: activeGender === GENDER.men
    });
    const kidsClassNames = classNames({
      [classes.gender]: true,
      [classes.genderActive]: activeGender === GENDER.kids
    });

    return (
      <nav className={classes.root}>
        <div className={womenClassNames}>
          <Link className={classes.genderRoot} to={ linkToShopping(GENDER.women) }>
            {t('NavigationWomen')}
          </Link>
          <div className={classes.genderMenu}>
            <div className={classes.linksMain}>
              { LINKS_WOMEN.map(this.renderLink) }
            </div>
          </div>
        </div>
        <div className={menClassNames}>
          <Link className={classes.genderRoot} to={ linkToShopping(GENDER.men) } >
            {t('NavigationMen')}
          </Link>
          <div className={classes.genderMenu}>
            <div className={classes.linksMain}>
              { LINKS_MEN.map(this.renderLink) }
            </div>
          </div>
        </div>
        <div className={kidsClassNames}>
          <Link className={classes.genderRoot} to={ linkToShopping(GENDER.kids) } >
            {t('NavigationKids')}
          </Link>
          <div className={classes.genderMenu}>
            <div className={classes.linksMain}>
              { LINKS_KIDS.map(this.renderLink) }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
