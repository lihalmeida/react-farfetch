import React from 'react';
import classes from './ShipingsReturns.module.scss';

export class ShipingsReturns extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <div className={classes.column1}>
          <h5 className={classes.h5Title}>We've got your back</h5>
          <ul>
            <li>One shipping fee</li>
            <li>Free returns within 14 days</li>
            <li>Click & Collect</li>
          </ul>
          <h5 className={classes.h5Title}>Import duties information</h5>
          <p>Let us handle the legwork.</p>
          <p>Delivery duties are included in the item price when shipping to all EU countries plus
            USA, Canada, China, Australia, New Zealand, Israel, Puerto Rico, Switzerland, Singapore,
            Republic Of Korea, Kuwait, Mexico, Qatar, India, Norway, Saudi Arabia, Taiwan, Thailand,
            U.A.E., Japan, Brazil, Guernsey, Isle of Man, Jersey and San Marino. All import duties
            are included in your order – the price you see is the price you pay.</p>
        </div>
        <div className={classes.column2}>
          <h5 className={classes.h5Title}>In a hurry?</h5>
          <p>We offer Express Delivery for most locations, and our even speedier Same Day Delivery in selected cities.</p>
          <p>If available, we’ll present the option at checkout.</p>
          <p>Express Delivery</p>
          <ul>
            <li>Europe & USA within 2-4 days</li>
            <li>Rest of the world within 3-7 days</li>
            <li>Selected locations</li>
          </ul>
        </div>
        <div className={classes.column3}>
          <h5 className={classes.h5Title}>Need more information</h5>
          <ul>
            <li><a>Orders & Shipping</a></li>
            <li><a>Returns & Refunds</a></li>
            <li><a>Duties & Taxes</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShipingsReturns;
