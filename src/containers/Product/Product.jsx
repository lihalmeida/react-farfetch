import React, { Component } from 'react';
import Select from 'components/Select/Select.jsx';
import { Button, THEME } from 'components/Button/Button.jsx';
import Footer from 'components/Footer/Footer.jsx';
import classes from './Product.module.scss';

class Product extends Component {
  state = {
    size: '0'
  };

  handleChoiceSelect = (e) => {
    console.log('* size change *');
    this.setState({ size: e.target.value });
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
            Detail
          </div>
          <div className={classes.contactUs}>
            <h2>Contact Us</h2>
            By Email
            Order By Phone +44 (0) 20 3962 2362
            Farfetch ID: 13599758
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Product;
