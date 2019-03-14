import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getProductDetails } from 'services/shopping';
import Select from 'components/Select/Select.jsx';
import { Button, THEME } from 'components/Button/Button.jsx';
import { Icon, ICON } from 'components/Icon/Icon';
import Loader from 'components/Loader/Loader';
import TheDetails from 'components/TheDetails/TheDetails.jsx';
import SizeFit from 'components/SizeFit/SizeFit.jsx';
import ShipingsReturns from 'components/ShipingsReturns/ShipingsReturns.jsx';
import classes from './Product.module.scss';

class Product extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  lastRouteParams = null;
  state = {
    size: '0',
    isLoading: false,
    isLoadedSuccess: false,
    isLoadedFailed: false,
    product: null,
    activeTab: 'details'
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
      productFullId: pathParams.productid.replace('.aspx', ''),
      gender: pathParams.gender,
      storeid: query.get('storeid')
    };
  }

  saveLastRouteParams(query) {
    this.lastRouteParams = query;
  }

  shouldFetchData(routeParams) {
    // there's no query to execute
    if (!routeParams) {
      return false;
    }

    // no object to compare, so it should be the first request
    if (!this.lastRouteParams) {
      return true;
    }

    // compare with saved object
    return (
      this.lastRouteParams.productFullId !== routeParams.productFullId
      || this.lastRouteParams.gender !== routeParams.gender
      || this.lastRouteParams.storeid !== routeParams.storeid
    );
  }

  fetchData() {
    console.log('* fetch product *');

    const routeParams = this.getSearchParamsFromRoute();

    // no useful parameter was changed since last request?
    if (!this.shouldFetchData(routeParams)) {
      return Promise.resolve(null);
    }

    // if any parameter was changed, then save and updated copy of the query params (so we can
    // compare later) and execute new request
    this.saveLastRouteParams(routeParams);

    this.setState({ isLoading: true });

    // execute request
    return getProductDetails({
        productFullId: routeParams.productFullId,
        gender: routeParams.gender
      })
      .then(response => {
        console.log('SUCCESS!!!!', response);

        this.setState({
          isLoading: false,
          isLoaded: true,
          isLoadedFailed: false,
          product: response
        });
      })
      .catch(error => {
        console.log('FAILED!!!!', error);

        this.setState({
          isLoading: false,
          isLoaded: true,
          isLoadedFailed: true
        });
      });
  }

  changeActiveTab = (tab) => {
    return () => {
      this.setState({ activeTab: tab });
    };
  }

  handleChoiceSelect = (e) => {
    console.log('* size change *');
    this.setState({ size: e.target.value });
  }

  renderLoading() {
    return(
      <div className={classes.loading}>
        <Loader />
      </div>
    );
  }

  renderError() {
    return (
      <div>ERROR!</div>
    );
  }

  renderProduct() {
    console.log('render product:', { ...this.state.product });

    const sizes = [
      { value: '0',  label: 'Select size - France', disabled: true },
      { value: '34', label: '34 FR' },
      { value: '36', label: '36 FR' },
      { value: '38', label: '38 FR' }
    ];
    const data = this.state.product.productViewModel;

    return (
      <div>
        <div className={classes.product}>
          <div className={classes.galery}>
            <img src={ data.images.main[0]['600'] } alt={ data.images.main[0].alt } />
            <img src={ data.images.main[1]['600'] } alt={ data.images.main[1].alt } />
          </div>
          <div className={classes.productInfo}>
              <span className={classes.newSeason}>Exclusive</span>
              <h3 className={classes.productDesigner}>MONTANA</h3>
              <p className={classes.productName}>
                {data.details.shortDescription}
              </p>
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
    );
  }

  render() {
    const { isLoading, isLoaded, isLoadedFailed } = this.state;
    let content;

    if (isLoading || !isLoaded) {
      content = this.renderLoading();
    } else if (isLoadedFailed) {
      content = this.renderError();
    } else {
      content = this.renderProduct();
    }

    return (
      <div className={classes.root}>
        <div className={classes.globalContainer}>
          { content }
        </div>
      </div>
    );
  }
}

export default Product;
