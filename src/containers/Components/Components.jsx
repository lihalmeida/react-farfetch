import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, THEME } from 'components/Button/Button.jsx';
import { Icon, ICON } from 'components/Icon/Icon.jsx';
import Input from 'components/Input/Input.jsx';
import Search from 'components/Search/Search.jsx';
import Select from 'components/Select/Select.jsx';
import ProductCard from 'components/ProductCard/ProductCard.jsx';
import Filter from 'components/Filter/Filter.jsx';
import SingleDropDownMenu from 'components/SingleDropDownMenu/SingleDropDownMenu.jsx';
import Footer from 'components/Footer/Footer.jsx';
import classes from './Components.module.scss';

class Components extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,    // from react-router
    location: PropTypes.object.isRequired, // from react-router
    history: PropTypes.object.isRequired   // from react-router
  };

  state = {
    email: '',
    password: '',
    search: '',
    size: '0',
    wishItem: false
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value })
  }

  handleSearchChange = (e) => {
    console.log('* search change *');
    this.setState({ search: e.target.value });
  }

  handleSearchSubmit = (e) => {
    console.log('Submit');
  }

  handleChoiceSelect = (e) => {
    console.log('* size change *');
    this.setState({ size: e.target.value });
  }

  handleProductWish = () => {
    this.setState({ wishItem: !(this.state.wishItem) });

    console.log(this.state.wishItem);
    return this.state.wishItem;
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
        <h1>UI components</h1>

        <section>
          <h2>Text</h2>
          <div className={classes.fontsContainer}>
            <span className={classes.fontName}>Polaris-Book: </span>
            <span style={{ fontFamily: 'Polaris-Book' }}>Kids</span>
          </div>
          <div>
            <span className={classes.fontName}>Polaris-Condensed-Bold: </span>
            <span style={{ fontFamily: 'Polaris-Condensed-Bold' }}>NIKE</span>
          </div>
          <div>
            <span className={classes.fontName}>Polaris-Bold: </span>
            <span style={{ fontFamily: 'Polaris-Bold' }}>Size guide</span>
          </div>
        </section>

        <section>
          <h2>Buttons</h2>
          <Button>defaults</Button>
          <Button isSizeFill theme={THEME.primary}>Add to bag</Button>
          <Button theme={THEME.secondary}>Wishlist</Button>
        </section>

        <section>
          <h2>Inputs</h2>
          <div>
            <Search
              value={this.state.search}
              placeholder="search"
              onChange={this.handleSearchChange}
              onSubmit={this.handleSearchSubmit}
            />
            <Select
              options={sizes}
              value={this.state.size}
              onChange={this.handleChoiceSelect}
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={ this.state.email }
              onChange={ this.handleEmailChange }
            />
            <Input
              type="password"
              placeholder="Password"
              value={ this.state.password }
              onChange={ this.handlePasswordChange }
            />
          </div>
        </section>

        <section>
          <h2>Icons</h2>
          <div className={classes.iconsContainer}>
            <div className={classes.inverted}><Icon icon={ICON.bagWhite} /><span>bagWhite</span></div>
            <div><Icon icon={ICON.caretDownBig} /><span>caretDownBig</span></div>
            <div><Icon icon={ICON.caretDownFilled} /><span>caretDownFilled</span></div>
            <div><Icon icon={ICON.caretDownFilledGray} /><span>caretDownFilledGray</span></div>
            <div><Icon icon={ICON.caretDownSmall} /><span>caretDownSmall</span></div>
            <div><Icon icon={ICON.caretUp} /><span>caretUp</span></div>
            <div><Icon icon={ICON.check} /><span>check</span></div>
            <div><Icon icon={ICON.checkout} /><span>checkout</span></div>
            <div><Icon icon={ICON.checkWhite} /><span>checkWhite</span></div>
            <div><Icon icon={ICON.close} /><span>close</span></div>
            <div><Icon icon={ICON.closeWhite} /><span>closeWhite</span></div>
            <div><Icon icon={ICON.email} /><span>email</span></div>
            <div><Icon icon={ICON.facebook} /><span>facebook</span></div>
            <div><Icon icon={ICON.googlePlus} /><span>googlePlus</span></div>
            <div><Icon icon={ICON.hamburguer} /><span>hamburguer</span></div>
            <div><Icon icon={ICON.phone} /><span>phone</span></div>
            <div><Icon icon={ICON.pinterest} /><span>pinterest</span></div>
            <div><Icon icon={ICON.returns} /><span>returns</span></div>
            <div><Icon icon={ICON.search} /><span>search</span></div>
            <div><Icon icon={ICON.searchBigGray} /><span>searchBigGray</span></div>
            <div><Icon icon={ICON.sort} /><span>sort</span></div>
            <div><Icon icon={ICON.star} /><span>star</span></div>
            <div><Icon icon={ICON.starGray} /><span>starGray</span></div>
            <div><Icon icon={ICON.starBlack} /><span>starBlack</span></div>
            <div><Icon icon={ICON.starRounded} /><span>starRounded</span></div>
            <div><Icon icon={ICON.tags} /><span>tags</span></div>
            <div><Icon icon={ICON.thinArrowUp} /><span>thinArrowUp</span></div>
            <div><Icon icon={ICON.twitter} /><span>twitter</span></div>
            <div><Icon icon={ICON.user} /><span>user</span></div>
            <div><Icon icon={ICON.zoomPlus} /><span>zoomPlus</span></div>
          </div>
        </section>
        <section>
          <ProductCard
            merchandiseLabel="New Season"
            cardImg="https://cdn-images.farfetch-contents.com/11/93/24/67/11932467_9126356_300.jpg"
            cardImgHover="https://cdn-images.farfetch-contents.com/11/93/24/67/11932467_9126375_300.jpg"
            productDesigner="Robin Singer"
            productName="Dress"
            productPrice="$ 35,000"
            onClick={this.handleProductWish}
            isAWishItem={this.state.wishItem}
          />
        </section>
        <section>
          <Filter />
        </section>
        <section>
          <SingleDropDownMenu />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Components;
