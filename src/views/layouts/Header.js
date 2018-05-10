import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
    <section>
      <nav className=" navbar navbar-expand-md fixed-top navbar-light header">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/banner/img-logo-5af3b8b39c9d7" className="logo"/></a>
        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse offcanvas-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="">Kategori</a>
            </li>
            <input className="form-control mr-sm-2 search-input" type="text" placeholder="Cari produk" aria-label="Search"/>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="">Daftar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><img className="icon-header" height="15" src="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/banner/img-wishlist-5af3b60e1250d"/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=""><img className="icon-header" height="18" src="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/banner/img-cart-5af3b5e9d06cd"/></a>
              </li>
            </ul>
          </form>
        </div>
      </div>
      </nav>
      <div className="nav-scroller chin shadow-sm">
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
