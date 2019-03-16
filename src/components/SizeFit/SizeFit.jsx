import React from 'react';
import PropTypes from 'prop-types';

import classes from './SizeFit.module.scss';

export class SizeFit extends React.Component {
  static propTypes = {
    modelMeasurements: PropTypes.object.isRequired,
    modelIsWearing: PropTypes.object,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }

  static defaultProps = {
    modelIsWearing: {}
  }

  render() {
    const detailsSize = this.props;

    const renderModelIsWearing = () => {
      if (detailsSize.modelIsWearing.modelHeight !== null && detailsSize.modelIsWearing.modelIsWearing) {
        return (
          <span>
            Model is { detailsSize.modelIsWearing.modelHeight[0] } wearing size { detailsSize.modelIsWearing.modelIsWearing }
          </span>
        )
      }
    }

    return (
      <div className={ classes.root }>
        <div className={ classes.detailContainer }>
          <p>Centimeters - Inches</p>
          <h5 className={ classes.h5Title }>Model Measurements</h5>
          <tbody>
            <tr>
              <td>Height:</td>
              <td>1.78 m</td>
            </tr>
            <tr>
              <td>Bust/Chest:</td>
              <td>86 cm</td>
            </tr>
            <tr>
              <td>Hips:</td>
              <td>87 cm</td>
            </tr>
            <tr>
              <td>Waist:</td>
              <td>61 cm</td>
            </tr>
          </tbody>
          <p>{ renderModelIsWearing() }</p>
          <p>All measurements are made by the Farfetch team</p>
          <p>Still need help? Try our <a href="/" >Size Guide</a></p>
        </div>
        <div className={ classes.imgContainer }>
          <img src={ detailsSize.img } alt={ detailsSize.alt } />
        </div>
      </div>
    );
  }
}

export default SizeFit;
