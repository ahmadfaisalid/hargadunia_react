import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './style.css';
import Product from '../global/Product';
class ProductSale extends Component {
  render() {
    const product_Sale = [{
      name: "Anker SoundCore Bluetooth Speaker with 24-Hour Playtime, 66-Foot Bluetooth Range & Built-in Mic, Dual-Driver Portable Wireless Speaker with Low Harmonic Distortion and Superior Sound - Black",
      price: "Rp. 589.000",
      pdisc: "Rp. 328.000",
      disc: "40%",
      country: "AU",
      prdfrom: "Jakarta, Indonesia",
      store: "Ebay",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0Fua2VyX1NvdW5kMTY6MzE6NDg_160.jpg",
      id: 1
    }, {
      name: "Google - Google Home - White/Slate fabric",
      price: "Rp. 2.284.000",
      pdisc: "",
      disc: "",
      country: "US",
      prdfrom: "Los Angeles, USA",
      store: "Amazon Echo Chochodot Aus",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0dvb2dsZV8tX0dvMDQ6MTU6NTE_160.jpg",
      id: 2
    }, {
      name: "Amazon - Echo Dot - White",
      price: "Rp. 871.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0FtYXpvbl8tX0VjMTU6NDQ6MjQ_160.jpg",
      id: 3
    }, {
      name: "Elmer's Washable No-Run School Glue, 4 oz, 1 Count",
      price: "Rp. 60.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0VsbWVyJ3NfV2FzMTQ6MzM6MjI_160.jpg",
      id: 4
    }, {
      name: "Barbie TommyXGigi Doll",
      price: "Rp. 864.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0JhcmJpZV9Ub21tMDk6MzA6MzE_160.jpg",
      id: 5
    }, {
      name: "Certified Refurbished Kindle Paperwhite E-reader - Black, 6'' High-Resolution Display (300 ppi) with Built-in Light, Wi-Fi - Includes Special Offers",
      price: "Rp. 1.745.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://images-na.ssl-images-amazon.com/images/I/51nk%2BaSvOFL.jpg_AA160_.jpg",
      id: 6
    }, {
      name: "OGX Thick & Full Biotin & Collagen Shampoo, 13 Oz",
      price: "Rp. 277.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://i5.walmartimages.com/asr/8a52a1a0-9d73-40f8-92d7-3becf289a2c9_1.8f2a6667c6fb90f77d1076003c9d2362.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
      id: 7
    }];

    return (
    <section react-section="product-sale" className="product-list-page">
    <div className="container">
      <div className="row no-gutters prd-main-page">
        <div className="col-md-2 d-none d-sm-none d-md-none d-lg-block block-filter">
          <div className="block-title-list ttl-filter">
            <div className="product-list-title"><img className="ico-filter" src="../assets/img/filter.svg" /> Filter</div>
          </div>
          <div className="filter-list">
            <div className="title-filter">Fitur Kami</div>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td><input type="radio" id="freeintship" value="freeintship" name="featured-option" /></td>
                    <td><label htmlFor="freeintship">Free Internasional Shipping</label></td>
                  </tr>
                  <tr>
                    <td><input type="radio" id="readystock" value="readystock" name="featured-option" /></td>
                    <td><label htmlFor="readystock">Ready Stock</label></td>
                  </tr>
                  <tr>
                    <td><input type="radio" id="sale" value="sale" name="featured-option" /></td>
                    <td><label htmlFor="sale">Sale</label></td>
                  </tr>
                  <tr>
                    <td><input type="radio" id="bestseller" value="bestseller" name="featured-option" /></td>
                    <td><label htmlFor="bestseller">Best Seller</label></td>
                  </tr>
                  <tr>
                    <td><input type="radio" id="featuredproduct" value="featuredproduct" name="featured-option" /></td>
                    <td><label htmlFor="featuredproduct">Featured Product</label></td>
                  </tr>
                  <tr>
                    <td><input type="radio" id="newproduct" value="newproduct" name="featured-option" /></td>
                    <td><label htmlFor="newproduct">New Product</label></td>
                  </tr>
                  <tr>
                    <td><input type="radio" id="under100k" value="under100k" name="featured-option" /></td>
                    <td><label htmlFor="under100k">Under 100K</label></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className="filter-list">
            <div className="title-filter">Lokasi</div>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td><input type="radio" id="usa" value="usa" name="location-option" /></td>
                    <td><label htmlFor="usa">USA</label></td>
                  </tr>
                  <tr>
                    <td><input type="radio" id="singapore" value="singapore" name="location-option" /></td>
                    <td><label htmlFor="singapore">Singapore</label></td>
                  </tr>
                  <tr>
                    <td><input type="radio" id="australia" value="australia" name="location-option" /></td>
                    <td><label htmlFor="australia">Australia</label></td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className="filter-list">
            <div className="title-filter">Rentang Harga</div>
            <form>
              <div className="form-group position-relative">
                <span className="tx-rp">Rp</span>
                <input type="text" className="form-control text-right tx-price" placeholder="Minimum"/>
              </div>
              <div className="form-group position-relative">
                <span className="tx-rp">Rp</span>
                <input type="text" className="form-control text-right tx-price" placeholder="Maksimum"/>
              </div>
              <button className="btn btn-gray btn-block">Tampilkan</button>
            </form>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-10 block-prd-list">
          <div className="row block-title-list ttl-prd">
            <div className="product-list-title"> 
              <img className={this.props.templateParameter.pageTitleIco_Class} src={this.props.templateParameter.pageTitleIco_Img} />
              <span className="ico-text">{this.props.templateParameter.pageTitle}</span> 
              <div className="sort-block">
                  <div htmlFor="sort-prd" className="sort-txt d-inline-block">Urutkan : </div>
                  <div className="d-inline-block">
                    <select name="sort" id="sort-prd" className="form-control">
                      <option value="populer">Terpopuler</option>
                      <option value="terbaru">Terbaru</option>
                      <option value="termurah">Termurah</option>
                      <option value="termahal">Termahal</option>
                    </select>
                  </div>
              </div>
            </div>
          </div>
          <div className="row">
          
          {product_Sale.map((prd_data) => 
            <div className="product-card" key={prd_data.id}>
              <Product className="product-list" prd_data={prd_data} />
            </div> 
          )}
          </div>
        </div>
      </div>
    </div>
    </section>
    );
  }
}
export default ProductSale;
