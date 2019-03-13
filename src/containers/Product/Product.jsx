import React, { Component } from 'react';
import Select from 'components/Select/Select.jsx';
import { Button, THEME } from 'components/Button/Button.jsx';
import { Icon, ICON } from 'components/Icon/Icon';
import PropTypes from 'prop-types';
import TheDetails from 'components/TheDetails/TheDetails.jsx';
import SizeFit from 'components/SizeFit/SizeFit.jsx';
import ShipingsReturns from 'components/ShipingsReturns/ShipingsReturns.jsx';
import classes from './Product.module.scss';

class Product extends Component {
  state = {
    size: '0',
    activeTab: 'details'
  };

  componentDidMount() {
    const product = window.location.pathname.split('/').pop();
    const productId = product.split('-').pop().replace('.aspx', '');

    console.log('Product id:', productId);
  }

  handleChoiceSelect = (e) => {
    console.log('* size change *');
    this.setState({ size: e.target.value });
  }

  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  changeActiveTab = (tab) => {
    return () => {
      this.setState({ activeTab: tab });
    };
  }

  render() {
    const sizes = [
      { value: '0',  label: 'Select size - France', disabled: true },
      { value: '34', label: '34 FR' },
      { value: '36', label: '36 FR' },
      { value: '38', label: '38 FR' }
    ];

    return (
      <div className={classes.root}>
        <div className={classes.globalContainer}>
          <div className={classes.product}>
            <div className={classes.galery}>
              <img
                src="https://cdn-images.farfetch-contents.com/13/59/50/93/13595093_16707383_480.jpg"
                alt="product"
              />
              <img
                src="https://cdn-images.farfetch-contents.com/13/59/50/93/13595093_16707385_480.jpg"
                alt="product"
              />
            </div>
            <div className={classes.productInfo}>
                <span className={classes.newSeason}>Exclusive</span>
                <h3 className={classes.productDesigner}>MONTANA</h3>
                <p className={classes.productName}>black show robe</p>
                <div className={classes.productPrice}>1,031 €</div>
                <div>
                  <Select
                  options={sizes}
                  value={this.state.size}
                  onChange={this.handleChoiceSelect}
                  />
                </div>
                <div className={classes.buttons}>
                  <Button isSizeFill theme={THEME.primary}>Add to bag</Button>
                  <Button theme={THEME.secondary}>Wishlist</Button>
                </div>
            </div>
          </div>
          <div className={classes.history}>
            Home > Women > Clothing > Beachwear
          </div>
          <div className={classes.detailsContent}>
              <div className={classes.detailsContentMenu}>
                <div className={classes.menu}>
                  <button className={classes.h2Title} onClick={this.changeActiveTab('details')}>The Details</button>
                  <button className={classes.h2Title} onClick={this.changeActiveTab('size')}>Size & Fit</button>
                  <button className={classes.h2Title} onClick={this.changeActiveTab('shipping')}>Shipping & Returns</button>
                </div>
                <div >
                  Order by phone <a href="/">+44 (0) 20 3962 2362</a>
                </div>
              </div>

              <div className={classes.details}>
                { (this.state.activeTab === 'details') ?  <TheDetails /> : null }
                { (this.state.activeTab === 'size') && <SizeFit /> }
                { (this.state.activeTab === 'shipping') && <ShipingsReturns /> }
              </div>
          </div>
          <div className={classes.contactUs}>
            <h2 className={classes.h2Title}>Contact Us</h2>
            <div className={classes.contactUsContainer}>
              <Icon width={20} height={20} icon={ICON.email} className={classes.icon} />
              <span>By<a href="/">Email</a></span>
              <Icon width={17} height={17} icon={ICON.phone} className={classes.icon} />
              <span>Order By Phone <a href="/">+44 (0) 20 3962 2362</a></span>
            </div>
            <p>Farfetch ID: 13599758</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
