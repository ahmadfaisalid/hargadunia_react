import React, { Component } from 'react';
import ReactStars from 'react-stars';

class Product extends Component {
  flagCountry(country,store,prdfrom) {
    if (country === "SG") {
      return (
        <div className="prd-from">
          <div className="box-information-1">
            <div className="from-country"><div className="flag-sg"></div></div>
            <div className="from-store"><div className="store-name" title={store}>{store}</div></div>
          </div>
          <div className="box-information-2" title={"Produk ini dikirim dari "+prdfrom}><span className="info-ico-truck"></span>{prdfrom}
          </div>
        </div>
      );
    }else if(country === "AU"){
      return (
        <div className="prd-from">
          <div className="box-information-1">
            <div className="from-country"><div className="flag-au"></div></div>
            <div className="from-store"><div className="store-name" title={store}>{store}</div></div>
          </div>
          <div className="box-information-2" title={"Produk ini dikirim dari "+prdfrom}><span className="info-ico-truck"></span>{prdfrom}
          </div>
        </div>
      );
    }else if(country === "US") {
      return (
        <div className="prd-from">
          <div className="box-information-1">
            <div className="from-country"><div className="flag-us"></div></div>
            <div className="from-store"><div className="store-name" title={store}>{store}</div></div>
          </div>
          <div className="box-information-2" title={"Produk ini dikirim dari "+prdfrom}><span className="info-ico-truck"></span>{prdfrom}
          </div>
        </div>
      );
    }else if(country === "ID") {
      return (
        <div className="prd-from">
          <div className="box-information-1">
            <div className="from-country"><div className="flag-id"></div></div>
            <div className="from-store"><div className="store-name" title={store}>{store}</div></div>
          </div>
          <div className="box-information-2" title={"Produk ini dikirim dari "+prdfrom}><span className="info-ico-truck"></span>{prdfrom}
          </div>
        </div>
      );
    }else{
      return (
        <div className="prd-from"></div>
      );
    }
  }

  render() {
    return (
      <a href="#"  className={this.props.className + " prd-box"} react-section="products">
        <div className="image-box-product">
          <div className="box-img">
            <img src ={this.props.prd_data.image}/>
          </div>
        </div>
        <div className="prd-meta">
          <div className="prd-meta__name" title={this.props.prd_data.name}>{this.props.prd_data.name}</div>
          { this.props.prd_data.disc != "" && (
            <span className="prd-disc">{this.props.prd_data.disc}</span>                      
          )}
          { this.props.prd_data.disc != "" ? 
          <div className="prd-meta__dataPrice">
            <div className="prd-meta__price-second">
              <span className="prd-curency-disc" title={this.props.prd_data.price}>{this.props.prd_data.price}</span>
            </div>
            <div className="prd-meta__price" title={this.props.prd_data.pdisc}>{this.props.prd_data.pdisc}</div>
            
          </div>
          :
          <div className="prd-meta__dataPrice">
            <div className="prd-meta__price" title={this.props.prd_data.pdisc}>{this.props.prd_data.price}</div>
            <div className="prd-meta__price-second">
              <span className="prd-curency-disc"></span>
            </div>
          </div>
          }
            {this.flagCountry(this.props.prd_data.country,this.props.prd_data.store,this.props.prd_data.prdfrom)}
          <div className="prd-data-rat">
          <ReactStars className="prd-starRat" count={5} size={18} color2={'#f9a623'} color1={'#e1e1e1'} value={3} edit={false} /> <span className="count-rat">3.4</span>
          </div>
        </div>
      </a>
    );
  }
}
export default Product;