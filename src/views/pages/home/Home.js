import React, { Component } from 'react';
import SliderBanner from './SliderBanner';
import ProductHomepage from './ProductHomepage';
import Category from './Category';
import SliderBrand from './SliderBrand';
class Home extends Component {
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
export default Home;
