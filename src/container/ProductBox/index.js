import React, { Component } from 'react';

import Product from '../../components/Product';
import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';

import styles from './styles';
import defaultProductImage from '../../assets/shopping.svg'

const PRODUCT_IMAGE_HEIGHT = 100;
const PRODUCT_IMAGE_WIDTH = 100;

class ProductBox extends Component {
  state = {
    productId: undefined,
    description: '',
    image: undefined
  }

  handlePlusQuantity = (e) => {
    if(this.props.plusQuantityFunction) {
      this.props.plusQuantityFunction();
    }
  }

  handleSubtractQuantity = (e) => {
    if(this.props.subtractQuantityFunction) {
      this.props.subtractQuantityFunction();
    }
  }

  handleProductConfirmation = (e) => {
    if(this.props.putOnBasketFunction) {
      this.props.putOnBasketFunction();
    }
  }

  componentDidMount(){
    const {description, productId, image} = this.props.description;
    this.setState({description, productId, image});
  }

  render() {
    const {description, productId, image, price, classes} = this.props;
    const dealedImage = image || defaultProductImage;
    console.log('ProductBox rendering product ' + productId)
    return (
      <div className={classes.root}>
        <Grid container
          pacing={0}
          direction="column"
          alignItems="center"
          justify="center">
          <Grid item xs={12}>
            <img src={dealedImage} 
                height={PRODUCT_IMAGE_HEIGHT} 
                width={PRODUCT_IMAGE_WIDTH} 
                alt={description}/>
          </Grid>
        </Grid>
        <div className={classes.productLabelSpacing}/>
        <p>{description}</p>
        <div className={classes.priceSpacing}/>
        <p>{price}</p>
        {/*<Product 
          description={description}
          image={image}
          price={price}
          plusQuantityFunction={() => {console.log('Not implemented yet! :)')}}
          subtractQuantityFunction={() => {console.log('Not implemented yet! :)')}}
          putOnBasketFunction={() => {console.log('Not implemented yet! :)')}}
        />*/}
      </div>
    );
  }
}

ProductBox.propTypes = {
  classes: PropTypes.object.isRequired,
  price: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
  plusQuantityFunction: PropTypes.func.isRequired,
  subtractQuantityFunction: PropTypes.func.isRequired,
  putOnBasketFunction: PropTypes.func.isRequired
};

export default withStyles(styles)(ProductBox);