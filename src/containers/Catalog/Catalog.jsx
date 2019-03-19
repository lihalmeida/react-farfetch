import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CatalogSortSelect from 'components/CatalogSortSelect/CatalogSortSelect';
import ProductCard from 'components/ProductCard/ProductCard';
import Loader from 'components/Loader/Loader';
import { getShoppingProducts } from 'services/shopping';
import { CATEGORIES_BY_ROUTE } from 'constants/categories';
import { GENDER } from 'constants/genders';
import { linkToShopping, linkToProduct } from 'constants/routes';
import { translate as t } from 'i18n/translate';

import classes from './Catalog.module.scss';


class Catalog extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  lastRouteParams = null;
  state = {
    isLoading: false,
    isLoadedSuccess: false,
    isLoadedFailed: false,
    products: [],
    totalProducts: '',
    wishItem: false
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  getSearchParamsFromRoute() {
    const pathParams = this.props.match.params || {};
    const query = new URLSearchParams(this.props.location.search || '');

    return {
      lang: pathParams.lang,
      gender: pathParams.gender,
      category: pathParams.category,
      page: query.get('page'),
      view: query.get('view'),
      sort: query.get('sort')
    };
  }

  saveLastRouteParams(query) {
    this.lastRouteParams = query;
  }

  shouldFetchData(queryParams) {
    // there's no query to execute
    if (!queryParams) {
      return false;
    }

    // no object to compare, so it should be the first request
    if (!this.lastRouteParams) {
      return true;
    }

    // compare with saved object
    return (
      this.lastRouteParams.lang !== queryParams.lang
      || this.lastRouteParams.gender !== queryParams.gender
      || this.lastRouteParams.category !== queryParams.category
      || this.lastRouteParams.page !== queryParams.page
      || this.lastRouteParams.view !== queryParams.view
      || this.lastRouteParams.sort !== queryParams.sort
    );
  }

  fetchData() {
    const routeParams = this.getSearchParamsFromRoute();

    // no useful parameter was changed since last request?
    if (!this.shouldFetchData(routeParams)) {
      return Promise.resolve(null);
    }

    // if any parameter was changed, then save and updated copy of the query params (so we can
    // compare later) and execute new request
    this.saveLastRouteParams(routeParams);

    const categoryInfo = CATEGORIES_BY_ROUTE[routeParams.category];

    // validation errors
    if (!routeParams.gender || !categoryInfo) {
      this.setState({ isLoadedFailed: true });
      return Promise.reject('Missing valid gender or category.');
    }


    const data = {
      page: routeParams.page || undefined,
      view: routeParams.view || '180',
      sort: routeParams.sort || undefined,
      gender: routeParams.gender,
      category: categoryInfo.id
    };

    this.setState({ isLoading: true });

    // execute request
    return getShoppingProducts(data)
      .then(response => {
        this.setState({
          isLoading: false,
          isLoaded: true,
          isLoadedFailed: false,
          products: response.products,
          totalProducts: response.formattedTotalItems
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

  renderProductCard = (product, gender) => {
    gender = gender || GENDER.women;

    const productName = `${product.brand.name}-${product.shortDescription}`;
    const url = linkToProduct(gender, productName, product.id);

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
          url={url}
        />
      </div>
    );
  }

  renderLoading() {
    return(
      <div className={classes.loading}>
        <Loader />
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
    const params = this.getSearchParamsFromRoute();

    return (
      <div className={classes.catalog}>
        <div className={classes.cardsContainer}>
          { this.state.products.map(
            (product) => this.renderProductCard(product, params.gender)
          ) }
        </div>
      </div>
    );
  }

  renderSort() {
    const params = this.getSearchParamsFromRoute();
    const value = params.sort || '3'; // default sort is picks (id=3)
    const query = {
      view: params.view,
      sort: ''
    };

    const options = [
      {
        value: '3',
        label: t('CatalogSortOptionPicks'),
        url: linkToShopping(params.gender, params.category, null, { ...query, sort: '3' })
      }, {
        value: '2',
        label: t('CatalogSortOptionNewest'),
        url: linkToShopping(params.gender, params.category, null, { ...query, sort: '2' })
      }, {
        value: '1',
        label: t('CatalogSortOptionPriceDesc'),
        url: linkToShopping(params.gender, params.category, null, { ...query, sort: '1' })
      }, {
        value: '4',
        label: t('CatalogSortOptionPriceAsc'),
        url: linkToShopping(params.gender, params.category, null, { ...query, sort: '4' })
      }
    ];

    return (
      <CatalogSortSelect
        value={value}
        options={options}
      />
    );
  }

  render() {
    const { isLoading, isLoadedFailed, isInvalidCategory } = this.state;
    let content;

    if (isLoading) {
      content = this.renderLoading();
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
              { this.state.totalProducts } pieces
            </div>
            <div className={classes.sort}>
              { this.renderSort() }
            </div>
          </div>
          { content }
        </div>
      </div>
    );
  }
}

export default Catalog;
