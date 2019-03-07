import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, ICON } from 'components/Icon/Icon.jsx';
import img1 from 'assets/images/prod-id1.jpg';
import img2 from 'assets/images/prod-id1-hover.jpg';
import { translate as t } from 'i18n/translate';
import classes from './ProductCard.module.scss';

// --> ALTERAR O <a> PARA <link>

class ProductCard extends React.Component {
  static propTypes = {
    isNewSeason: PropTypes.bool,
    productDesigner: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    onClick: PropTypes.func,
    isAWishItem: PropTypes.bool
  };

  static defaultProps = {
    isNewSeason: false,
    onClick: () => {},
    isAWishItem: false
  };

  render() {
    return (
      <div className={classes.root}>
        <div className={classes.card} key={this.props.key}>
          <div
            role="button"
            className={classes.wishlistBtn}
            onClick={this.props.onClick}
          >
              { (this.props.isAWishItem)
                  ? <Icon width={22} height={22} icon={ICON.starBlack} />
                  : <Icon width={22} height={22} icon={ICON.starGray} />
              }
          </div>
          <div className={classes.cardImg}>
            <img className={classes.imgMain} src={img1} alt={t('ProductX')} />
            <img className={classes.imgHover} src={img2} alt={t('ProductX')} />
          </div>
          <div className={classes.cardInfo}>
            {
              this.props.isNewSeason
                ? (<span className={classes.newSeason}>{t('ProductCardNewSeason')}</span>)
                : null
            }
            <h3 className={classes.productDesigner}>{this.props.productDesigner}</h3>
            <p className={classes.productName}>{this.props.productName}</p>
            <div className={classes.productPrice}>{this.props.productPrice} €</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
