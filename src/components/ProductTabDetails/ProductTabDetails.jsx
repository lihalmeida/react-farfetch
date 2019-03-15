import React from 'react';
import classes from './ProductTabDetails.module.scss';

export class ProductDetails extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <div className={classes.detailContainer}>
          <div className={classes.column1}>
            <h1 className={classes.h1Title}>MONTANA</h1>
            <p className={classes.productName}>black show robe</p>
            <p>Make a bold statement with Rubin Singer's eye-catching red gown. Ideal for weddings,
              galas and other seasonal events, this immaculate piece has been expertly fashioned
              from lustrous silk. It features a figure-flattering shape with a strapless neckline,
              a tight-fitting pleated body with an easy rear zip fastening and a voluminous long
              skirt with ruffled tiers for added drama. The Rubin Singer gown is finished off with
              rows of stunning 3D red rose appliques, perfectly placed to further enhance the
              hourglass silhouette.</p>
            <p>Designer Style ID: POIS29803 <br/>
              Colour: RED <br/>
              Made in United States</p>
            <p>
              Composition <br/>
              Lining: silk 100% </p>
            <p> Washing instructions: dry clean only</p>
          </div>
          <div className={classes.column2}>
            <h5 className={classes.h5title}>Wearing</h5>
            <p>Model is 1.79 m wearing size 4</p>
            <h5 className={classes.h5title}>Designer Backstory</h5>
            <p>As a third generation couturier, New York-based Rubin Singer has fashion running
              through his veins. Fusing classic haute couture craftsmanship with a distinctly
              contemporary vision, his exquisite designs are architectural and empowering.
              Theatrical silhouettes are heightened by complex draping and high-shine fabrics
              for a structured yet feminine feel.</p>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img
            src="https://cdn-images.farfetch-contents.com/13/59/50/93/13595093_16707385_480.jpg"
            alt="product"
          />
        </div>
      </div>
    );
  }
}

export default ProductDetails;
