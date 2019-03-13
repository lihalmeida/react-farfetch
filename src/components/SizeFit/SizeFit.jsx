import React from 'react';
import classes from './SizeFit.module.scss';

export class SizeFit extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <div className={classes.detailContainer}>
          <p>Centimeters - Inches</p>
          <h5 className={classes.h5Title}>Model Measurements</h5>
          <p> Height:1.78 m - 5 ft 10 in<br/>
              Bust/Chest:86 cm - 33.9 in<br/>
              Hips: 87 cm - 34.3 in<br/>
              Waist: 61 cm - 24 in<br/>
              Model is 1.78 m wearing size 42 - Model is 5 ft 10 in wearing size 42</p>
          <p>All measurements are made by the Farfetch team</p>
          <p>Still need help? Try our <a>Size Guide</a></p>
        </div>
        <div className={classes.imgContainer}>
          <img
            src="https://cdn-images.farfetch-contents.com/13/59/50/93/13595093_16707383_480.jpg"
            alt="product"
          />
        </div>
      </div>
    );
  }
}

export default SizeFit;
