import React, { Component } from 'react';
import SliderHome from '../layouts/SliderHome';
import ProductHomepage from '../layouts/ProductHomepage';
import Category from '../pages/home/Category';
class Contens extends Component {
  render() {
    return (
      <div>
        <SliderHome key="slider-home" />
        <Category/>
	      <div className="line-break"></div>
        <ProductHomepage key="product-homepage" className="mt-4"/>
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
