import React, {Component} from 'react';
import HomeCarousel from '../../components/HomeCarousel';
import ProductBox from '../../container/ProductBox';

class Home extends Component {

  putOnBasket = ({productId, quantity}) => {
    console.log('putOnBasketFunction - ProductId:'+productId+' Quantity:'+quantity);
    //the redux dispatch here is comming soon...
  }

  render(){
    return(
      <div>
        <HomeCarousel/>
        <h1>Hello World!</h1>
        <ProductBox
          description={'huehue'}
          productId={1}
          price={'R$ 99,00'}
          putOnBasketFunction={this.putOnBasket}
        />
      </div>
    );
  }
}

export default Home;
