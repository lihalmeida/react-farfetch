import React, { Component } from 'react';
import { ReactComponent as prodId1 } from 'assets/images/prod-id1.jpg';
import { ReactComponent as prodId1Hover } from 'assets/images/prod-id1-hover.jpg';
import { ReactComponent as prodId2 } from 'assets/images/prod-id2.jpg';
import { ReactComponent as prodId2Hover } from 'assets/images/prod-id2-hover.jpg';
import { ReactComponent as prodId3 } from 'assets/images/prod-id3.jpg';
import { ReactComponent as prodId3Hover } from 'assets/images/prod-id3-hover.jpg';
import { ReactComponent as prodId4 } from 'assets/images/prod-id4.jpg';
import { ReactComponent as prodId4Hover } from 'assets/images/prod-id4-hover.jpg';
import { ReactComponent as prodId5 } from 'assets/images/prod-id5.jpg';
import { ReactComponent as prodId5Hover } from 'assets/images/prod-id5-hover.jpg';
import { ReactComponent as prodId6 } from 'assets/images/prod-id6.jpg';
import { ReactComponent as prodId6Hover } from 'assets/images/prod-id6-hover.jpg';
import { ReactComponent as prodId7 } from 'assets/images/prod-id7.jpg';
import { ReactComponent as prodId7Hover } from 'assets/images/prod-id7-hover.jpg';
import { ReactComponent as prodId8 } from 'assets/images/prod-id8.jpg';
import { ReactComponent as prodId8Hover } from 'assets/images/prod-id8-hover.jpg';
import SingleDropDownMenu from 'components/SingleDropDownMenu/SingleDropDownMenu.jsx';
import ProductCard from 'components/ProductCard/ProductCard.jsx';
import Footer from 'components/Footer/Footer.jsx';
import classes from './Catalog.module.scss';

class Catalog extends Component {
  state = {
    wishItem: false
  };

  handleProductWish = () => {
    this.setState({ wishItem: !(this.state.wishItem) });
  }

  render() {
    const products = [
      {
        cardImg: prodId1,
        cardImgHover: prodId1Hover,
        isNewSeason: true,
        productDesigner: 'Alessandra Rich',
        productName: 'Crystal embellished swimsuit',
        productPrice: 831
      },
      {
        cardImg: prodId2,
        cardImgHover: prodId2Hover,
        isNewSeason: false,
        productDesigner: 'Marysia',
        productName: 'Santa Barbara one-shoulder scalloped bikini',
        productPrice: 325
      },
      {
        cardImg: prodId3,
        cardImgHover: prodId3Hover,
        isNewSeason: true,
        productDesigner: 'Gucci',
        productName: 'Logo printed swimsuit',
        productPrice: 320
      },
      {
        cardImg: prodId4,
        cardImgHover: prodId4Hover,
        isNewSeason: true,
        productDesigner: 'Oseree',
        productName: 'Sequinned halterneck swimsui',
        productPrice: 232
      },
      {
        cardImg: prodId5,
        cardImgHover: prodId5Hover,
        isNewSeason: true,
        productDesigner: 'Ganni',
        productName: 'Leopard print halterneck swimsuit',
        productPrice: 137
      },
      {
        cardImg: prodId6,
        cardImgHover: prodId6Hover,
        isNewSeason: true,
        productDesigner: 'Isabel Marant',
        productName: 'Sicilya swimsuit',
        productPrice: 190
      },
      {
        cardImg: prodId7,
        cardImgHover: prodId7Hover,
        isNewSeason: true,
        productDesigner: 'Adriana Degreas',
        productName: 'Cutout triangle top high waist bikini',
        productPrice: 500
      },
      {
        cardImg: prodId8,
        cardImgHover: prodId8Hover,
        isNewSeason: true,
        productDesigner: 'Marysia',
        productName: 'Broadway tied scalloped swimsuit',
        productPrice: 383}
    ];

    return (
      <div className={classes.root}>
        <div className={classes.globalContainer}>
          <div className={classes.history}>
            Home > Women > Clothing > Beachwear
          </div>
          <div className={classes.category}>
            <h1>DESIGNER BEACHWEAR</h1>
          </div>
          <div className={classes.unitsAndSort}>
            <div className={classes.units}>
              2,900+ pieces
            </div>
            <div className={classes.sort}>
              <SingleDropDownMenu />
            </div>
          </div>
          <div className={classes.catalog}>
            <div className={classes.filter}>Filter</div>
            <div className={classes.cardsContainer}>
              {
                products.map( (product, idx) => {
                  return (
                    <div className={classes.card}>
                      <ProductCard
                        key={idx}
                        isNewSeason={product.isNewSeason}
                        cardImg={product.cardImg}
                        cardImgHover={product.cardImgHover}
                        productDesigner={product.productDesigner}
                        productName={product.productName}
                        productPrice={product.productPrice}
                        onClick={this.handleProductWish}
                        isAWishItem={this.state.wishItem}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Catalog;
