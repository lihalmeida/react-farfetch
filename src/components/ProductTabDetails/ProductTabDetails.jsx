import React from 'react';
import PropTypes from 'prop-types';
import classes from './ProductTabDetails.module.scss';

export class ProductTabDetails extends React.Component {
  static propTypes = {
    productDesigner: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDescription: PropTypes.string.isRequired,
    designerId: PropTypes.string.isRequired,
    designerColour: PropTypes.string.isRequired,
    madeInLabel: PropTypes.string,
    productComposition: PropTypes.array.isRequired,
    care: PropTypes.array,
    modelIsWearing: PropTypes.object,
    designerDescription: PropTypes.string,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }

  static defaultProps = {
    madeInLabel: '',
    care: [],
    modelIsWearing: {},
    designerDescription: ''
  }

  render() {
    const details = this.props;
    const productCompositionArray = details.productComposition;
    const careArray = details.care;

    const renderCareIntructions = () => {
      if (careArray.length !== 0){
        careArray.map((care,idx) => {
          return (
            <span key={ "care"+idx }>
              { careArray[idx].instruction } { careArray[idx].value }
            </span>
          )
        })
      }
    }

    const renderModelIsWearing = () => {
      if (details.modelIsWearing.modelHeight !== null && details.modelIsWearing.modelIsWearing) {
        return (
          <span>
            <h5 className={ classes.h5title }>Wearing</h5>
            <p>Model is { details.modelIsWearing.modelHeight[0] } wearing size { details.modelIsWearing.modelIsWearing }</p>
          </span>
        )
      }
    }

    return (
      <div className={ classes.root }>
        <div className={ classes.detailContainer }>
          <div className={ classes.column1 }>
            <h1 className={ classes.h1Title }>{ details.productDesigner }</h1>
            <p className={ classes.productName  }>{ details.productName }</p>
            <p>{ details.productDescription }</p>
            <p>Designer Style ID: { details.designerId } <br/>
              Colour: { details.designerColour } <br/>
              { details.madeInLabel ? <span>{ details.madeInLabel }</span> : null}</p>
            <p>Composition
              { productCompositionArray.map((comp, idx) => {
                return (
                  <span key={ "composition"+idx }>
                  <br/> { productCompositionArray[idx].material }: { productCompositionArray[idx].value }
                  </span>
                )
              })}
            </p>
            <p>
              { renderCareIntructions() }
            </p>
          </div>
          <div className={ classes.column2 }>
            <span>{ renderModelIsWearing() }</span>
            <span>
              { details.designerDescription
                ? (<span>
                    <h5 className={ classes.h5title }>Designer Backstory</h5>
                    <p>{ details.designerDescription }</p>
                  </span>)
                : null
              }
            </span>

          </div>
        </div>
        <div className={ classes.imgContainer }>
          <img src={ details.img } alt={ details.alt }
          />
        </div>
      </div>
    );
  }
}

export default ProductTabDetails;
