import React, { Component } from 'react';
import { Button, THEME } from 'components/Button.jsx'
import { Icon, ICON } from 'components/Icon/Icon.jsx'
import classes from './Components.module.scss';

class Components extends Component {
  render() {
    return (
      <div className={classes.root}>
        <h1>UI components</h1>

        <section>
          <h2>Buttons</h2>
          <Button>defaults</Button>
          <Button isSizeFill theme={THEME.primary}>Add to bag</Button>
          <Button theme={THEME.secondary}>Wishlist</Button>
        </section>

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
            <div><Icon icon={ICON.starRounded} /><span>starRounded</span></div>
            <div><Icon icon={ICON.tags} /><span>tags</span></div>
            <div><Icon icon={ICON.twitter} /><span>twitter</span></div>
            <div><Icon icon={ICON.user} /><span>user</span></div>
            <div><Icon icon={ICON.zoomPlus} /><span>zoomPlus</span></div>
          </div>
        </section>
      </div>
    );
  }
}

export default Components;
