import React from 'react';
import PropTypes from 'prop-types';
import classes from './Footer.module.scss';


export class Footer extends React.Component {
  render() {
    return (
      <div className={classes.root}>

        <div className={classes.row1}>
          <div className={classes.growRow1}>
            <a href="/">
              <h4>How to Shop</h4>
            </a>
          </div>
          <div className={classes.growRow1}>
            <a href="/">
              <h4>FAQ's</h4>
            </a>
          </div>
          <div className={classes.growRow1}>
            <a href="/">
              <h4>Need Help?</h4>
            </a>
          </div>
        </div>

        <div className={classes.row2}>
          <div className={classes.growRow1}>
            <div>
              <h3>CONNECT</h3>
              <p>Read our privacy and cookie policy <a href="/">here</a></p>
            </div>
            <div>
              <h3>FARFETCH APP</h3>
              <a href="/">Farfetch App for iOS and Android</a>
            </div>
          </div>
          <div className={classes.growRow1}>
            <h3>COUNTRY/REGION, CURRENCY AND LANGUAGE</h3>
          </div>
          <div className={classes.growRow1}>
            <div>
              <h3>CUSTOMER SERVICE</h3>
            </div>
            <div>
              <h3>ABOUT FARFETCH</h3>
              <ul>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Investors</a></li>
                <li><a href="/">Farfetch Boutique Partners</a></li>
                <li><a href="/">Affiliate Programme</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Farfetch Customer Promise</a></li>
                <li><a href="/">Farfetch App</a></li>
                <li><a href="/">Farfetch Reviews</a></li>
                <li><a href="/">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.row3}>© Copyright 2019</div>
      </div>
    );
  }
}

export default Footer;
