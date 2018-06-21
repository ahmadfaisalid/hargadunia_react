import React, { Component } from 'react';
class Header extends Component {
  constructor(props) {
    super(props); 
    this.state = { 
                    overlay: "",
                    navSticky:""
                  };
    this.lastScrollPos = 0;
  }
  focusView(){
    this.setState({ overlay: "overlay" });
  }
  unFocusView(){
    this.setState({ overlay: "" });
  }

componentDidMount() {

  document.addEventListener('scroll', this.trackScrolling);
}

trackScrolling = (event) => {
  // if(window.pageYOffset > 0){

  // }
  this._navScroll = document.getElementById('nav-scroll');
  if(this.lastScrollPos > window.pageYOffset) {
      this.lastScrollPos = window.pageYOffset
      this.setState({ navSticky: "" });
  } else if(this.lastScrollPos < window.pageYOffset) {
      this.lastScrollPos = window.pageYOffset
      this.setState({ navSticky: "nav-sticky" });  
       
  }
};

  render() {
    return (
    <section id="hargadunia-nav-inner">
      <div className={this.state.overlay+" active"}></div>
      <div className={this.state.navSticky+" fixed-top"}>
        <nav className=" navbar navbar-expand-md navbar-light header">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/banner/img-logo-5af3b8b39c9d7" className="logo"/></a>
          <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse offcanvas-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-departement mr-md-2" onMouseOver={this.focusView.bind(this)} onMouseOut={this.unFocusView.bind(this)}>
                <button className="nav-link btn nav-categories" id="cat-menu" type="button">Kategori</button>
                <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                  <li className="dropdown-submenu">
                    <a  className="dropdown-item" tabIndex="-1" href="#">Electronics & Computers</a>
                      <ul className="dropdown-menu menu-secondary">
                        <li className="dropdown-item"><a href="#">Second level Second level</a></li>
                        <li className="dropdown-item"><a href="#">Second level</a></li>
                        <li className="dropdown-item"><a href="#">Second level</a></li>
                      </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a  className="dropdown-item" tabIndex="-1" href="#">Boxs</a>
                      <ul className="dropdown-menu menu-secondary">
                        <li className="dropdown-item"><a href="#">Second level</a></li>
                        <li className="dropdown-item"><a href="#">Second level</a></li>
                        <li className="dropdown-item"><a href="#">Second level</a></li>
                      </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a  className="dropdown-item" tabIndex="-1" href="#">Home, Garden & Tools</a>
                      <ul className="dropdown-menu menu-secondary">
                        <li className="dropdown-item"><a href="#">Second level</a></li>
                        <li className="dropdown-item"><a href="#">Second level</a></li>
                        <li className="dropdown-item"><a href="#">Second level</a></li>
                      </ul>
                  </li>
                </ul>
              </li>
              <div className="input-group">
                <div className="input-group-prepend">
                  <button className="btn btn-hg dropdown-toggle btn-cat-search" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Semua</button>
                  <div className="dropdown-menu">
                    <li className="dropdown-item" >Action</li>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
                <input onFocus={this.focusView.bind(this)} onBlur={this.unFocusView.bind(this)} className="form-control search-input" type="text" placeholder="Cari produk" aria-label="Search"/>
                <div className="input-group-append">
                  <button className="btn btn-hg" type="button">Go!</button>
                </div>
              </div>
              
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item auth-button">
                  <a className="nav-link" href="">Masuk</a>
                </li>
                <li className="delimiter-border">
                </li>
                <li className="nav-item auth-button">
                  <a className="nav-link" href="">Daftar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=""><img className="icon-header" height="16" src="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/banner/img-wishlist-5af3b60e1250d"/></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href=""><img className="icon-header" height="18" src="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/banner/img-cart-5af3b5e9d06cd"/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </nav>
        <div className="nav-scroller chin shadow-sm" id="nav-scroll">
          <nav className="container nav nav-underline">
            <div className="d-flex nav-block-left">
              <a className="nav-link nav-under" href="#">All Promo</a>
              <a className="nav-link nav-under" href="#">Sale</a>
              <a className="nav-link nav-under" href="#">Free International Shipping</a>
              <a className="nav-link nav-under" href="#">Ready Stock</a>
              <a className="nav-link nav-under" href="#">New Products</a>
              <a className="nav-link nav-under" href="#">Under 100K</a>
            </div>
            <div className="d-flex nav-block-right">
              <a className="nav-link nav-under" href="#">Orange Membership</a>
              <a className="nav-link nav-under" href="#">Jadi Bos</a>
            </div>
          </nav>
        </div>
      </div>
    </section>
    );
  }
}
export default Header;
