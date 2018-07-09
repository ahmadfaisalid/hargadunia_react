import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// ---------------------------------------------------- Homepage
import Home from '../pages/home/Home';
// ---------------------------------------------------- Promo
import Promo from '../pages/promo/Promo';
import DetailPromo from '../pages/promo/DetailPromo';
// ---------------------------------------------------- Product Page
import Sale from '../pages/p/Sale';
// ---------------------------------------------------- Customer
import AccountInformation from '../pages/customer/AccountInformation';
import ListAddress from '../pages/customer/ListAddress';
import AddAddress from '../pages/customer/AddAddress';
import ListOrder from '../pages/customer/ListOrder';
import GiftCard from '../pages/customer/GiftCard';
import OrderDetail from '../pages/customer/OrderDetail';

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
    return (
      <div className="content-area" react-section="contents">
        <Switch>
          <Route history={this.props.history} exact path='/' component={Home}/>
          <Route path='/promo' component={Promo}/>
          <Route path='/detail-promo' component={DetailPromo}/>
          <Route path='/sale' component={Sale}/>
          <Route path='/customer' component={AccountInformation} />
          <Route path='/address' component={ListAddress} />
          <Route path='/add-address' component={AddAddress} />
          <Route path='/order' component={ListOrder} />
          <Route path='/gift-card' component={GiftCard} />
          <Route path='/order-detail' component={OrderDetail} />
        </Switch> 
      </div>
    );
  }
}
export default Contens;