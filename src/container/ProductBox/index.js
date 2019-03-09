import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles, Grid } from '@material-ui/core';

import styles from './styles';
import defaultProductImage from '../../assets/shopping.svg'
import QuantityInput from '../../components/QuantityInput';

const PRODUCT_IMAGE_HEIGHT = 100;
const PRODUCT_IMAGE_WIDTH = 100;

class ProductBox extends Component {
  state = {
    quantity: 0
  }

  plusQuantity = (e) => {
    console.log('PLUS')
    this.setState({quantity: this.state.quantity + 1})
  }

  subtractQuantity = (e) => {
    if(this.state.quantity > 0)
      this.setState({quantity: this.state.quantity - 1});
  }

  putOnBasket = (e) => {
    if(this.props.putOnBasketFunction){
      this.props.putOnBasketFunction({productId: this.props.productId, 
                                      quantity: this.state.quantity});
      
      this.clearProductQuantity();
    }
  }

  clearProductQuantity = () => {
    this.setState({quantity: 0});
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
          spacing={16}
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
        <p className={classes.price}>{price}</p>
        <div className={classes.quantityInputSpacing}/>
          <QuantityInput
            quantity={this.state.quantity}
            plusQuantityFunction={this.plusQuantity}
            subtractQuantityFunction={this.subtractQuantity}
            putOnBasketFunction={this.putOnBasket}
          />
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
  putOnBasketFunction: PropTypes.func.isRequired
};

export default withStyles(styles)(ProductBox);