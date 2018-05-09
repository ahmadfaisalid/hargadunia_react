import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
    <section>
      <nav className=" navbar navbar-expand-md fixed-top navbar-light" style={{'backgroundColor': '#fafafa'}}>
      <div className="container">
        <a className="navbar-brand" href="#">Offcanvas navbar</a>
        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse offcanvas-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Notifications</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Switch account</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
      </nav>
      <div className="nav-scroller clr-chin box-shadow">
        <nav className="container nav nav-underline">
          <div className="d-flex nav-block-left">
            <a className="nav-link" href="#">All Promo</a>
            <a className="nav-link" href="#">Sale</a>
            <a className="nav-link" href="#">Free International Shipping</a>
            <a className="nav-link" href="#">Ready Stock</a>
            <a className="nav-link" href="#">New Products</a>
            <a className="nav-link" href="#">Under 100K</a>
          </div>
          <div className="d-flex nav-block-right">
            <a className="nav-link" href="#">Orange Membership</a>
            <a className="nav-link" href="#">Jadi Bos</a>
          </div>
        </nav>
      </div>
    </section>
    );
  }
}
export default Header;
