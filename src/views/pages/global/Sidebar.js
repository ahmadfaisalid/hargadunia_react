import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class Sidebar extends Component {
  render() {
   
    const user ={
      name: "Faisal Ahmad",
      id: 1
    };
    return(
    <div className="col-md-3 sidebar">
        <div className="row">
        <div className="col-md-12">
          <div className="col-md-3 avatar float-left"></div>
            <span>
              <strong>{user.name}</strong><br />
              My Account
            </span>
          </div>
        </div>
        <hr/>

        <div className="row">
          <div className="col-md-12">
            <div className="widget">
              <ul>
                <li>
                  <a className="active" href="/customer">
                      <div className="icon float-left"></div>
                      <span>Account Information</span>
                  </a>
                </li>
                <li>
                  <a className="active" href="/address">
                      <div className="icon float-left"></div>
                      <span>Address Book</span>
                  </a>
                </li>
                <li>
                  <a className="active" href="/order">
                      <div className="icon float-left"></div>
                      <span>My Orders</span>
                  </a>
                </li>
                <li>
                  <a className="active" href="/gift-card">
                      <div className="icon float-left"></div>
                      <span>Gift Cards</span>
                  </a>
                </li>
                <li>
                  <a className="active" href="/confirmation">
                      <div className="icon float-left"></div>
                      <span>Payment Confirmation</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default Sidebar;