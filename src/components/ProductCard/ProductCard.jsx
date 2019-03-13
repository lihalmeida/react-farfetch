import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, ICON } from 'components/Icon/Icon.jsx';
import { translate as t } from 'i18n/translate';
import classes from './ProductCard.module.scss';

// --> ALTERAR O <a> PARA <link>

class ProductCard extends React.Component {
  static propTypes = {
    merchandiseLabel: PropTypes.string,
    cardImg: PropTypes.string.isRequired,
    cardImgHover: PropTypes.string.isRequired,
    productDesigner: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isAWishItem: PropTypes.bool,
    url: PropTypes.string.isRequired
  };

  static defaultProps = {
    merchandiseLabel: '',
    onClick: () => {},
    isAWishItem: false
  };

  render() {
    return (
      <div className={classes.root}>
        <Link to={this.props.url} className={classes.card}>
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
            <img className={classes.imgMain} src={this.props.cardImg} alt={this.props.productName} />
            <img className={classes.imgHover} src={this.props.cardImgHover} alt={this.props.productName} />
          </div>
          <div className={classes.cardInfo}>
            {
              this.props.merchandiseLabel
                ? (<span className={classes.newSeason}>{this.props.merchandiseLabel}</span>)
                : null
            }
            <h3 className={classes.productDesigner}>{this.props.productDesigner}</h3>
            <p className={classes.productName}>{this.props.productName}</p>
            <div className={classes.productPrice}>{this.props.productPrice}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
