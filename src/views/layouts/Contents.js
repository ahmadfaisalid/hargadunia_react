import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// ---------------------------------------------------- Homepage
import Home from '../pages/home/Home';
// ---------------------------------------------------- Promo
import Promo from '../pages/promo/Promo';
import DetailPromo from '../pages/promo/DetailPromo';
import Sale from '../pages/p/Sale';

class Contens extends Component {
  render() {
    return (
      <div className="content-area" react-section="contents">
        <Switch>
          <Route history={this.props.history} exact path='/' component={Home}/>
          <Route path='/promo' component={Promo}/>
          <Route path='/detail-promo' component={DetailPromo}/>

          {/* Other Page Products */}
          <Route path='/sale' component={Sale}/>
        </Switch> 
      </div>
    );
  }
}
export default Contens;


