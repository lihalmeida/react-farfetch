import React, { Component } from 'react';
import SingleDropDownMenu from 'components/SingleDropDownMenu/SingleDropDownMenu.jsx';
import ProductCard from 'components/ProductCard/ProductCard.jsx';
import Footer from 'components/Footer/Footer.jsx';
import { getShoppingProducts } from 'services/shopping';
import classes from './Catalog.module.scss';

class Catalog extends Component {
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

  fetchProducts() {
    // 0) ainda não começou o pedido -> branco
    // 1) fetch dos dados -> loading...
    // 2) se for successo -> renderizar os products
    // 3) se for erro -> renderiza mensagem de erro

    const { category, gender } = this.props.match.params;
    const search = new URLSearchParams(this.props.location.search);
    const query = {
      page: search.get('page') || undefined,
      view: search.get('view') || '180',
      sort: search.get('sort') || undefined,
      pagetype: 'Shopping',
      gender: gender,         // 'Women',
      pricetype: 'FullPrice',
      category: category      // '136293'
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
    let {
      isLoading,
      isLoadedFailed
    } = this.state;
    let content;

    if (isLoading) {
      content = this.renderLoader();
    } else if (isLoadedFailed) {
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
