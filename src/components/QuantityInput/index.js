import React, { Component } from 'react';

import {withStyles, IconButton, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import styles from './styles';

class QuantityInput extends Component {
  render() {
    const { classes } = this.props;
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
                color={"primary"}>
                <RemoveIcon/>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.quantity}>
              0
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.plusButton}>
              <IconButton
                className={classes.operatorButtonIcon} 
                disableRipple 
                disableTouchRipple 
                color={"primary"}>
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
                color={"white"}>
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
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(QuantityInput);