import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { linkToShopping, linkToUi } from 'constants/routes';
import { GENDER } from 'constants/genders';
import { CATEGORIES } from 'constants/categories';
import { Link } from 'react-router-dom';
import { translate as t } from 'i18n/translate';
import classes from './Navigation.module.scss';


const LINKS_WOMEN = [
  {
    text: t('NavigationWomenNewIn'),
    url: linkToUi()
  }, {
    text: t('NavigationWomenDesigners'),
    url: '#'
  }, {
    text: t('NavigationWomenClothing'),
    url: linkToShopping(GENDER.women, CATEGORIES.WOMEN_CLOTHING.route)
  }, {
    text: t('NavigationWomenShoes'),
    url: linkToShopping(GENDER.women, CATEGORIES.WOMEN_SHOES.route)
  }, {
    text: t('NavigationWomenBags'),
    url: linkToShopping(GENDER.women, CATEGORIES.WOMEN_BAGS.route)
  }, {
    text: t('NavigationWomenAccessories'),
    url: linkToShopping(GENDER.women, CATEGORIES.WOMEN_ACCESSORIES.route)
  }, {
    text: t('NavigationWomenJewellery'),
    url: linkToShopping(GENDER.women, CATEGORIES.WOMEN_JEWELRY.route)
  }, {
    text: t('NavigationWomenVintage'),
    url: linkToShopping(GENDER.women, CATEGORIES.WOMEN_VINTAGE.route)
  }, {
    text: t('NavigationWomenEditorial'),
    url: '#'
  }, {
    text: t('NavigationWomenSale'),
    url: '#',
    isRed: true
  }
];
const LINKS_MEN = [
  {
    text: t('NavigationMenNewIn'),
    url: linkToUi()
  }, {
    text: t('NavigationMenDesigners'),
    url: '#'
  }, {
    text: t('NavigationMenClothing'),
    url: linkToShopping(GENDER.men, CATEGORIES.MEN_CLOTHING.route)
  }, {
    text: t('NavigationMenShoes'),
    url: linkToShopping(GENDER.men, CATEGORIES.MEN_SHOES.route)
  }, {
    text: t('NavigationMenTrainers'),
    url: linkToShopping(GENDER.men, CATEGORIES.MEN_SNEAKERS.route)
  }, {
    text: t('NavigationMenBags'),
    url: linkToShopping(GENDER.men, CATEGORIES.MEN_BAGS.route)
  }, {
    text: t('NavigationMenAccessories'),
    url: linkToShopping(GENDER.men, CATEGORIES.MEN_ACCESSORIES.route)
  }, {
    text: t('NavigationMenWatches'),
    url: linkToShopping(GENDER.men, CATEGORIES.MEN_WATCHES.route)
  }, {
    text: t('NavigationMenEditorial'),
    url: '#'
  }, {
    text: t('NavigationMenSale'),
    url: '#',
    isRed: true
  },
];
const LINKS_KIDS = [
  {
    text: t('NavigationKidsNewIn'),
    url: linkToUi()
  }, {
    text: t('NavigationKidsDesigners'),
    url: '#',
  }, {
    text: t('NavigationKidsBabyGirls'),
    url: linkToShopping(GENDER.kids, CATEGORIES.KIDS_BABY_GIRL_CLOTHING.route)
  }, {
    text: t('NavigationKidsBabyBoys'),
    url: linkToShopping(GENDER.kids, CATEGORIES.KIDS_BABY_BOY_CLOTHING.route)
  }, {
    text: t('NavigationKidsGirls'),
    url: linkToShopping(GENDER.kids, CATEGORIES.KIDS_GIRLS_CLOTHING.route)
  }, {
    text: t('NavigationKidsBoys'),
    url: linkToShopping(GENDER.kids, CATEGORIES.KIDS_BOYS_CLOTHING.route)
  }, {
    text: t('NavigationKidsShoes'),
    url: '#',
  }, {
    text: t('NavigationKidsSale'),
    url: '#',
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

  handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderLink = (link, idx) => {
    const cNames = classNames({
      [classes.category]: true,
      [classes.red]: link.isRed
    });

    return (
      <Link
        key={idx}
        className={cNames}
        to={link.url}
        onClick={this.handleLinkClick}
      >
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
          <div className={classes.genderRoot}>
            {t('NavigationWomen')}
          </div>
          <div className={classes.genderMenu}>
            <div className={classes.linksMain}>
              { LINKS_WOMEN.map(this.renderLink) }
            </div>
          </div>
        </div>
        <div className={menClassNames}>
          <div className={classes.genderRoot}>
            {t('NavigationMen')}
          </div>
          <div className={classes.genderMenu}>
            <div className={classes.linksMain}>
              { LINKS_MEN.map(this.renderLink) }
            </div>
          </div>
        </div>
        <div className={kidsClassNames}>
          <div className={classes.genderRoot}>
            {t('NavigationKids')}
          </div>
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
