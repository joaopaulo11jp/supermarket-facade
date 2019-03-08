import React, {Component} from 'react';
import HomeCarousel from '../../components/HomeCarousel';
import ProductBox from '../../container/ProductBox';

class Home extends Component {
  render(){
    return(
      <div>
        <HomeCarousel/>
        <h1>Hello World!</h1>
        <ProductBox
          description={'huehue'}
          productId={1}
          price={'R$ 99,00'}
          plusQuantityFunction={() => {console.log('Not implemented yet! :)')}}
          subtractQuantityFunction={() => {console.log('Not implemented yet! :)')}}
          putOnBasketFunction={() => {console.log('Not implemented yet! :)')}}
        />
      </div>
    );
  }
}

export default Home;
