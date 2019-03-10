import React, {Component} from 'react';
import {Grid, withStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';

import HomeCarousel from '../../components/HomeCarousel';
import ProductBox from '../../container/ProductBox';
import styles from './styles';

class Home extends Component {

  putOnBasket = ({productId, quantity}) => {
    console.log('putOnBasketFunction - ProductId:'+productId+' Quantity:'+quantity);
    //the redux dispatch here is comming soon...
  }

  render(){
    const {classes} = this.props;

    return(
      <div className={classes.root}>
        <HomeCarousel/>
        <h1>Hello World!</h1>
        <Grid container
          spacing={8}
          justify={"flex-start"}
          direction={"row"}
          className={classes.root}>
          <Grid item xs={2} key={1}>
            <ProductBox
              description={'Produto 1'}
              productId={1}
              price={'R$ 99,00'}
              putOnBasketFunction={this.putOnBasket}
            />
          </Grid>
          <Grid item xs={2} key={2}>
            <ProductBox
              description={'Produto 1'}
              productId={1}
              price={'R$ 99,00'}
              putOnBasketFunction={this.putOnBasket}
            />
          </Grid>
          <Grid item xs={2} key={3}>
            <ProductBox
              description={'Produto 2'}
              productId={2}
              price={'R$ 99,00'}
              putOnBasketFunction={this.putOnBasket}
            />
          </Grid>
          <Grid item xs={2} key={4}>
            <ProductBox
              description={'Produto 3'}
              productId={3}
              price={'R$ 99,00'}
              putOnBasketFunction={this.putOnBasket}
            />
          </Grid>
          <Grid item xs={2} key={4}>
            <ProductBox
              description={'Produto 3'}
              productId={3}
              price={'R$ 99,00'}
              putOnBasketFunction={this.putOnBasket}
            />
          </Grid>
          <Grid item xs={2} key={4}>
            <ProductBox
              description={'Produto 3'}
              productId={3}
              price={'R$ 99,00'}
              putOnBasketFunction={this.putOnBasket}
            />
          </Grid>
          <Grid item xs={2} key={4}>
            <ProductBox
              description={'Produto 3'}
              productId={3}
              price={'R$ 99,00'}
              putOnBasketFunction={this.putOnBasket}
            />
          </Grid>
          <Grid item xs={2} key={4}>
            <ProductBox
              description={'Produto 3'}
              productId={3}
              price={'R$ 99,00'}
              putOnBasketFunction={this.putOnBasket}
            />
          </Grid>
        </Grid>
        <Link to='/second'>Second page</Link>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
