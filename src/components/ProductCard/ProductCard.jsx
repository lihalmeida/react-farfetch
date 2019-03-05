import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, ICON } from 'components/Icon/Icon';
import img1 from 'assets/images/img-test-1.jpg';
import img2 from 'assets/images/img-test-2.jpg';
import { translate as t } from 'i18n/translate';
import classes from './ProductCard.module.scss';

// --> ALTERAR O <a> PARA <link>
// --> ALTERAR O LOAD DAS IMG

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
      <li className={classes.root}>
        <a href="/components" className={classes.card}>
          <div className={classes.cardImg}>
            <img src={img1} alt={t('ProductX')} />
          </div>
          <div className={classes.cardInfo}>
            <span className={classes.newSeason}>{this.props.isNewSeason}</span>
            <h3 className={classes.productDesigner}>{this.props.productDesigner}</h3>
            <p className={classes.productName}>{this.props.productName}</p>
            <div className={classes.productPrice}>{this.props.productPrice} €</div>
          </div>
        </a>
        <div
          role="button"
          className={classes.wishListIcon}
          onClick={this.props.onClick}
        >
          <span>
            { (this.props.isAWishItem)
                ? <Icon width={22} height={22} icon={ICON.starBlack} />
                : <Icon width={22} height={22} icon={ICON.starGray} />
            }
          </span>
        </div>
      </li>
    );
  }
}

export default ProductCard;
