import React from 'react';
import PropTypes from 'prop-types';
import classes from './Footer.module.scss';


export class Footer extends React.Component {
  render() {
    return (
      <footer className={classes.root}>
        <div className={classes.section1}>
          <div className={classes.globalContainer}>
            <div className={`${classes.baseline} ${classes.containerSection1}`}>
              <a href="/" className={classes.linkSection1}>How to Shop</a>
            </div>
            <div className={`${classes.baseline} ${classes.containerSection1}`}>
              <a href="/" className={classes.linkSection1}>FAQ's</a>
            </div>
            <div className={`${classes.baseline} ${classes.containerSection1}`}>
              <a href="/" className={classes.linkSection1}>Need Help?</a>
            </div>
          </div>
        </div>
        <div className={classes.section2}>
          <div className={classes.globalContainer}>
            <div className={`${classes.baseline} ${classes.container1}`}>
              <div>
                <h5 className={classes.footerTitle}>CONNECT</h5>
                <span>Read our privacy and cookie policy <a href="/">here</a></span>
              </div>
              <div>
                <h5 className={classes.footerTitle}>FARFETCH APP</h5>
                <div className={classes.mediaIcons}>
                  <i class="fas fa-mobile-alt"></i>
                  <a href="/">Farfetch App for iOS and Android</a>
                </div>
              </div>
            </div>
            <div className={`${classes.baseline} ${classes.container2}`}>
              <div className={classes.container2Cont}>
                <h5 className={classes.footerTitle}>COUNTRY/REGION, CURRENCY AND LANGUAGE</h5>
                <span>Portugal, EUR €</span>
              </div>
              <div className={classes.container2Cont}>
                <h5 className={classes.footerTitle}>FOLLOW US</h5>
                <div className={classes.mediaIcons}>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-snapchat-ghost"></i>
                  <i class="fab fa-pinterest-p"></i>
                  <i class="fab fa-youtube"></i>
                  <i class="fab fa-google-plus-g"></i>
                </div>
              </div>
            </div>
            <div className={`${classes.baseline} ${classes.container3}`}>
              <div className={classes.aboutAndService}>
                <h5 className={classes.footerTitle}>CUSTOMER SERVICE</h5>
                <a href="/">Help & Contact Us</a>
                <a href="/">Orders & Shipping</a>
                <a href="/">Payment & Pricing</a>
                <a href="/">Returns & Refunds</a>
                <a href="/">Click & Collect</a>
                <a href="/">FAQs</a>
                <a href="/">Terms & Conditions</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Cookie Preferences</a>
              </div>
              <div className={classes.aboutAndService}>
                <h5 className={classes.footerTitle}>ABOUT FARFETCH</h5>
                <a href="/">About Us</a>
                <a href="/">Investors</a>
                <a href="/">Farfetch Boutique Partners</a>
                <a href="/">Affiliate Programme</a>
                <a href="/">Careers</a>
                <a href="/">Farfetch Customer Promise</a>
                <a href="/">Farfetch App</a>
                <a href="/">Farfetch Reviews</a>
                <a href="/">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.section3}>
          <div className={classes.globalContainer}>
            <span>
              'farfetch' and the 'farfetch' logo are trade marks of Farfetch UK Limited and
              are registered in numerous jurisdictions around the world.
              <br/>
              © Copyright 2019 Farfetch UK Limited. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
