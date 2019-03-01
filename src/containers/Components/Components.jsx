import React, { Component } from 'react';
import { Button, THEME } from 'components/Button.jsx'
import { Icon, ICON } from 'components/Icon/Icon.jsx'
import classes from './Components.module.scss';

class Components extends Component {
  render() {
    return (
      <div className={classes.root}>
        <h1>UI components</h1>

        <h2>Buttons</h2>
        <Button>defaults</Button>
        <Button isSizeFill theme={THEME.primary}>Add to bag</Button>
        <Button theme={THEME.secondary}>Wishlist</Button>

        <h2>Text</h2>
        <div style={{ fontFamily: 'Polaris-Book' }}>Kids</div>
        <div style={{ fontFamily: 'Polaris-Condensed-Bold' }}>NIKE</div>
        <div style={{ fontFamily: 'Polaris-Bold' }}>Size guide</div>

        <h2>Icons</h2>
        <div className={classes.iconsContainer}>
          <div>iconCaretDownSmall:<Icon icon={ICON.iconCaretDownSmall} /></div>
          <div>iconHamburguer:<Icon icon={ICON.iconHamburguer} /></div>
          <div>iconSearch:<Icon icon={ICON.iconSearch} /></div>
          <div>iconUser:<Icon icon={ICON.iconUser} /></div>
          <div>iconStar:<Icon icon={ICON.iconStar} /></div>
          <div>iconCheckout:<Icon icon={ICON.iconCheckout} /></div>
          <div>iconSearchBigGray:<Icon icon={ICON.iconSearchBigGray} /></div>
          <div>iconZoomPlus:<Icon icon={ICON.iconZoomPlus} /></div>
          <div>iconCaretDownBig:<Icon icon={ICON.iconCaretDownBig} /></div>
          <div>iconCaretDownFilled:<Icon icon={ICON.iconCaretDownFilled} /></div>
          <div>iconClose:<Icon icon={ICON.iconClose} /></div>
          <div>iconBagWhite:<Icon icon={ICON.iconBagWhite} /></div>
          <div>iconStarGray:<Icon icon={ICON.iconStarGray} /></div>
          <div>iconCaretDownFilledGray:<Icon icon={ICON.iconCaretDownFilledGray} /></div>
          <div>iconFacebook:<Icon icon={ICON.iconFacebook} /></div>
          <div>iconTwitter:<Icon icon={ICON.iconTwitter} /></div>
          <div>iconPinterest:<Icon icon={ICON.iconPinterest} /></div>
          <div>iconGooglePlus:<Icon icon={ICON.iconGooglePlus} /></div>
          <div>iconEmail:<Icon icon={ICON.iconEmail} /></div>
          <div>iconPhone:<Icon icon={ICON.iconPhone} /></div>
          <div>iconTags:<Icon icon={ICON.iconTags} /></div>
          <div>iconStarRounded:<Icon icon={ICON.iconStarRounded} /></div>
          <div>iconReturns:<Icon icon={ICON.iconReturns} /></div>
        </div>
      </div>
    );
  }
}

export default Components;
