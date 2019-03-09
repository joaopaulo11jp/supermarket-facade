import React, { Component } from 'react';

import {withStyles, IconButton, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import styles from './styles';

class QuantityInput extends Component {

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

  render() {
    const { classes, quantity } = this.props;
    return (
      <div className={classes.root}>
        <Grid container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center">
          <Grid item xs={3}>
            <div className={classes.subtractButton}>
              <IconButton
                className={classes.operatorButtonIcon} 
                disableRipple 
                disableTouchRipple 
                color={"primary"}
                onClick={this.handleSubtractQuantity}>
                <RemoveIcon/>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.quantity}>
              {quantity}
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.plusButton}>
              <IconButton
                className={classes.operatorButtonIcon} 
                disableRipple 
                disableTouchRipple 
                color={"primary"}
                onClick={this.handlePlusQuantity}>
                <AddIcon/>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.putOnBasketButton}>
              <IconButton
                className={classes.putOnBasketIcon}
                disableRipple 
                disableTouchRipple
                onClick={this.handleProductConfirmation}>
                <ShoppingCartIcon/>
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

QuantityInput.propTypes = {
  classes: PropTypes.object.isRequired,
  quantity: PropTypes.number.isRequired,
  plusQuantityFunction: PropTypes.func.isRequired,
  subtractQuantityFunction: PropTypes.func.isRequired,
  putOnBasketFunction: PropTypes.func.isRequired
}

export default withStyles(styles)(QuantityInput);