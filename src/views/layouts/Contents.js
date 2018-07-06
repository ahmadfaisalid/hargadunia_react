import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
class Contens extends Component {
  render() {
    return (
      <div className="content-area" react-section="contents">
        <Switch>
          <Route path='/' component={Home}/>
        </Switch> 
      </div>
    );
  }
}
export default Contens;


