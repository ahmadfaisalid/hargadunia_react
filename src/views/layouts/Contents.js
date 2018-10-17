import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// ---------------------------------------------------- Homepage
import Home from '../pages/home/Home';
// ---------------------------------------------------- Promo
import Promo from '../pages/promo/Promo';
import DetailPromo from '../pages/promo/DetailPromo';
// ---------------------------------------------------- Product Page
import ProductPage from '../pages/product/ProductPage';
// ---------------------------------------------------- Customer
import AccountInformation from '../pages/customer/AccountInformation';
import ListAddress from '../pages/customer/ListAddress';
import AddAddress from '../pages/customer/AddAddress';
import ListOrder from '../pages/customer/ListOrder';
import GiftCard from '../pages/customer/GiftCard';
import OrderDetail from '../pages/customer/OrderDetail';
import ProductDetail from '../pages/DetailProduct/DetailProduct';

class Contens extends Component {
  constructor(props){
    super(props);
    this.url = window.location.href;
  }
  componentDidUpdate() {
    this.newUrl = window.location.href;
    if(this.newUrl !== this.url){
      this.url = window.location.href;
      window.scrollTo(0,0);
    }
  }
  render() {
    const sale_page = {
      pageTitle: "Hargadunia Sale",
      pageTitleIco_Class: "ico-title-box",
      pageTitleIco_Img: "../assets/img/box.svg"
    };
    const freeInternasionalShipping_page = {
      pageTitle: "Free International Shipping",
      pageTitleIco_Class: "ico-title-box",
      pageTitleIco_Img: "../assets/img/box.svg"
    };
    const readyStock_page = {
      pageTitle: "Shipped within 3 days",
      pageTitleIco_Class: "ico-title-box",
      pageTitleIco_Img: "../assets/img/box.svg"
    };
    const newProduct_page = {
      pageTitle: "Hargadunia New Products",
      pageTitleIco_Class: "ico-title-box",
      pageTitleIco_Img: "../assets/img/box.svg"
    };
    const under100K_page = {
      pageTitle: "All Under 100k",
      pageTitleIco_Class: "ico-title-box",
      pageTitleIco_Img: "../assets/img/box.svg"
    };
    return (
      <div className="content-area" react-section="contents">
        <Switch>
          <Route history={this.props.history} exact path='/' component={Home}/>
          <Route path='/promo' component={Promo}/>
          <Route path='/detail-promo' component={DetailPromo}/>

          <Route path='/sale' render={(props) => <ProductPage {...props} templateParameter = {sale_page}  />} />
          <Route path='/free-international-shipping' render={(props) => <ProductPage {...props} templateParameter = {freeInternasionalShipping_page}  />} />
          <Route path='/ready-stock' render={(props) => <ProductPage {...props} templateParameter = {readyStock_page}  />} />
          <Route path='/new-products' render={(props) => <ProductPage {...props} templateParameter = {newProduct_page}  />} />
          <Route path='/under-100k' render={(props) => <ProductPage {...props} templateParameter = {under100K_page}  />} />

          <Route path='/customer' component={AccountInformation} />
          <Route path='/address' component={ListAddress} />
          <Route path='/add-address' component={AddAddress} />
          <Route path='/order' component={ListOrder} />
          <Route path='/gift-card' component={GiftCard} />
          <Route path='/order-detail' component={OrderDetail} />

          <Route path='/product-detail' component={ProductDetail} />
        </Switch> 
      </div>
    );
  }
}
export default Contens;