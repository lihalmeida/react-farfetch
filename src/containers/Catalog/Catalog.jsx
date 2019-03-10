import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SingleDropDownMenu from 'components/SingleDropDownMenu/SingleDropDownMenu.jsx';
import ProductCard from 'components/ProductCard/ProductCard.jsx';
import Footer from 'components/Footer/Footer.jsx';
import { getShoppingProducts } from 'services/shopping';
import { CATEGORIES_BY_ROUTE } from 'constants/categories';
import { toApiParameter } from 'constants/genders';

import classes from './Catalog.module.scss';


class Catalog extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  state = {
    isLoading: false,
    isLoadedSuccess: false,
    isLoadedFailed: false,
    products: [],
    wishItem: false
  };

  componentDidMount() {
    this.fetchProducts();
  }

  componentWillReceiveProps() {
    // @TODO this method is going to be deprecated...
    this.fetchProducts();
  }

  getSearchParamsFromUrl() {
    const path = window.location.pathname.split('/');
    const query = new URLSearchParams(window.location.search);
    
    return {
      lang: path[1],
      gender: path[3],
      category: path[4],
      page: query.get('page'),
      view: query.get('view'),
      sort: query.get('sort')
    }
  }

  fetchProducts() {
    console.log('* fetch products *');

    const params = this.getSearchParamsFromUrl();
    const categoryInfo = CATEGORIES_BY_ROUTE[params.category];

    if (!params.gender || !categoryInfo) {
      console.error('Invalid URL:', params.gender, params.category, categoryInfo);
      this.setState({ isLoadedFailed: true });
      return;
    }

    const query = {
      page: params.page || undefined,
      view: params.view || '180',
      sort: params.sort || undefined,
      pagetype: 'Shopping',
      gender: toApiParameter(params.gender),
      pricetype: 'FullPrice',
      category: categoryInfo.id
    };

    this.setState({ isLoading: true });

    return getShoppingProducts(query)
      .then(response => {
        this.setState({
          isLoading: false,
          isLoaded: true,
          isLoadedFailed: false,
          products: response.products
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isLoaded: true,
          isLoadedFailed: true
        });
      });
  }

  handleProductWish = () => {
    this.setState({ wishItem: !(this.state.wishItem) });
  }

  renderProductCard = (product) => {
    return (
       <div className={classes.card} key={product.id}>
        <ProductCard
          merchandiseLabel={product.merchandiseLabel}
          cardImg={product.images.cutOut}
          cardImgHover={product.images.model}
          productDesigner={product.brand.name}
          productName={product.shortDescription}
          productPrice={product.priceInfo.formattedFinalPrice}
          onClick={this.handleProductWish}
          isAWishItem={this.state.wishItem}
        />
      </div>
    );
  }

  renderLoader() {
    return(
      <div className={classes.loading}>
        LOADING...
      </div>
    );
  }

  renderError() {
    return(
      <div className={classes.loading}>
        FAILED TO LOAD PRODUCTS...
      </div>
    );
  }

  renderProducts() {
    return (
      <div className={classes.catalog}>
        <div className={classes.filter}>Filter</div>
        <div className={classes.cardsContainer}>
          { this.state.products.map(this.renderProductCard) }
        </div>
      </div>
    );
  }

  render() {
    const { isLoading, isLoadedFailed, isInvalidCategory } = this.state;
    let content;

    if (isLoading) {
      content = this.renderLoader();
    } else if (isLoadedFailed || isInvalidCategory) {
      content = this.renderError();
    } else {
      content = this.renderProducts();
    }

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
          { content }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Catalog;
