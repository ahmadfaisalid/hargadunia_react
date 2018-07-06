import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import SliderBanner from '../pages/home/SliderBanner';
import ProductHomepage from '../pages/home/ProductHomepage';
import Category from '../pages/home/Category';
import SliderBrand from '../pages/home/SliderBrand';
class Contens extends Component {
  render() {
    return (
      <div className="content-area" react-section="contents">
        <Switch></Switch>
      </div>
    );
  }
}
export default Contens;

