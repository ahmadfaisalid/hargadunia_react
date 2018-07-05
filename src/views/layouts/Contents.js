import React, { Component } from 'react';
import SliderBanner from '../pages/home/SliderBanner';
import ProductHomepage from '../pages/home/ProductHomepage';
import Category from '../pages/home/Category';
import SliderBrand from '../pages/home/SliderBrand';
class Contens extends Component {
  render() {
    return (
      <div className="content-area" react-section="contents">
        <SliderBanner key="slider-banner" />
        <Category/>
        <ProductHomepage key="product-homepage" className="mt-4"/>
        <SliderBrand key="slider-brand"/>
      </div>
    );
  }
}
export default Contens;
