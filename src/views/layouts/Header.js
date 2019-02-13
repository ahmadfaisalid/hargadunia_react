import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// import cartIcon from './../public/assets/img/flat-icon/online-shopping-cart.png';

class Header extends Component {
  constructor(props) {
    super(props); 
    this.state = { 
                    overlay: "",
                    navSticky:"",
                    onSearch:"",
                    xSearch: "",
                    inputSearchValue: "",
                    validate: false
                  };
    this.lastScrollPos = 100000;
  }
  focusViewDropDown(){
    if(document.getElementById('category' || 'store-origin').className != 'dropdown-menu show'){
      this.setState({ overlay: "overlay" });
    }else{
      this.setState({ overlay: "" });
    }
  }
  focusSearch(){
    this.setState({ 
                    overlay: "overlay",
                    onSearch: "search-active"
                  });
  }
  unFocusSearch(){
    if(this.state.validate == false){
      this.setState({ 
                      overlay: "",
                      onSearch: ""
                    });
    }else{
      this.searchTextInput.focus();
    }
  }
  focusView(){
    this.setState({ overlay: "overlay" });
  }
  unFocusView(){
    if(this.state.onSearch == ""){
      this.setState({ overlay: "" });
    }
  }
  xTextSearch(e){
    if(e.target.value.length > 0){
      this.setState({ xSearch: "d-block" });
    }else{
      this.setState({ xSearch: "" });
    }
    this.setState({ inputSearchValue: e.target.value });
  }
  emptyTextSearch(){
    this.setState({ 
      inputSearchValue: "", 
      xSearch: ""
    });
    this.searchTextInput.focus();
  }
  dontWhite(){
    this.setState({validate:true});
  }
  white(){
    this.setState({validate:false});
  }
componentDidMount() {
  document.addEventListener('scroll', this.trackScrolling);
}

trackScrolling = (event) => {
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
    <section react-section="header" id="hargadunia-nav-inner">
      <div className={this.state.overlay+" active"}></div>
      <div className={this.state.navSticky+" fixed-top"}>
        <nav className=" navbar navbar-expand-md navbar-light header" id="nv-nav">
        <div className="container">
        <NavLink className="navbar-brand" to='/'>
          <img src="https://d3ol8ih1xbmzso.cloudfront.net/asset/09-2018/banner/img-logo-5b8f953ec72a8" className="logo"/>
        </NavLink>
          <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse offcanvas-collapse">
            <ul className="navbar-nav">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button onMouseUp={this.focusViewDropDown.bind(this)} onBlur={this.unFocusView.bind(this)} className={"btn dropdown-toggle btn-cat-search " + this.state.onSearch} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All</button>
                  <div id="category" className="dropdown-menu">
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
                  <input  ref={(input) => { this.searchTextInput = input; }}
                          value={this.state.inputSearchValue} 
                          onFocus={this.focusSearch.bind(this)} 
                          onBlur={this.unFocusSearch.bind(this)} 
                          onChange={this.xTextSearch.bind(this)} 
                          className="form-control search-input" 
                          type="text" 
                          placeholder="What are you looking for..." 
                          aria-label="Search"/>
                  
                  <div className="input-group-prepend">
                    <button onMouseUp={this.focusViewDropDown.bind(this)} onBlur={this.unFocusView.bind(this)} className={"btn dropdown-toggle btn-store-origin " + this.state.onSearch} type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Store Origin</button>
                    <div id="store-origin" className="dropdown-menu">
                      <a className="dropdown-item" href="#">All Origin</a>
                      <a className="dropdown-item" href="#">USA</a>
                      <a className="dropdown-item" href="#">Singapore</a>
                      <a className="dropdown-item" href="#">Australia</a>
                    </div>
                  </div>

                  <span className={"x-search " + this.state.xSearch} onClick={this.emptyTextSearch.bind(this)}  onMouseOut={this.white.bind(this)} onMouseOver={this.dontWhite.bind(this)}>&times;</span>

                <div className="input-group-append">
                  <button className="btn btn-yellow btn-search" type="button"><i className="fa fa-search"></i></button>
                </div>
              </div>
              
              <div className="nav-item btn-cart ">
                <a className="nav-link" href="">
                 <span className="cart-number">5</span>
                  <img src="assets/img/flat-icon/online-shopping-cart.png"/>
                </a>
              </div>

            </ul>
            <div className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav">
                 
                <li className="nav-item btn-cart ">
                  <a className="nav-link" href="">
                   <span className="cart-number">5</span>
                    <img src="assets/img/flat-icon/online-shopping-cart.png"/>
                  </a>
                </li>

                <li className="nav-item auth-button">
                  <div className="row justify-content-center">
                    <div className="col-7"><a className="btn-sign" href="">Sign in</a> | <a className="btn btn-sm btn-register" href="">Create Account</a></div>
                    <div className="col-7 join">Join Now To Get Voucher !</div>
                  </div>  
                </li>
              </ul>
            </div>
          </div>
        </div>
        </nav>
        <div className="nav-scroller chin shadow-sm" id="nav-scroll">
          <nav className="container nav nav-underline">
            <div className="d-flex nav-block-left">

              <li className="nav-item nav-dropdown mr-md-2" onMouseOver={this.focusView.bind(this)} onMouseOut={this.unFocusView.bind(this)}>
                <a className="nav-link nav-under cat-menu"><i className="fa fa-list"></i> Shop Department</a>
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

              <NavLink className="nav-link nav-under" to='/promo'>All Promo</NavLink>
              <NavLink className="nav-link nav-under" to='/sale'>Sale</NavLink>
              <NavLink className="nav-link nav-under" to="/free-international-shipping">Free International Shipping</NavLink>
              <NavLink className="nav-link nav-under" to="/ready-stock">Ready Stock</NavLink>
              <NavLink className="nav-link nav-under" to="/new-products">New Products</NavLink>
              <NavLink className="nav-link nav-under" to="/under-100k">Under 100K</NavLink>
            </div>
            <div className="d-flex nav-block-right">
              <a className="nav-link nav-under text-warning" href="#">Orange Membership</a>
              <a className="nav-link nav-under text-warning" href="#">Jadi Bos</a>
              <a className="nav-link nav-under" href="#">Products Request</a>
              <a className="nav-link nav-under" href="#"><i className="fa fa-question-circle-o"></i> Help</a>
            </div>
          </nav>
        </div>
      </div>
    </section>
    );
  }
}
export default Header;
