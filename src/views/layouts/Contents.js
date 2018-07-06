import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SliderHome from '../layouts/SliderHome';
import ProductHomepage from '../layouts/ProductHomepage';
import Category from '../pages/home/Category';
import ReviewOrder from '../pages/orders/ReviewOrder';
class Contens extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/review-order' component={ReviewOrder}/>
        </Switch>
        {/* <SliderHome key="slider-home" />
        <Category/>
        <ProductHomepage key="product-homepage" className="mt-4"/> */}
        <h3 className="page-header"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></h3>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    );
  }
}
export default Contens;
