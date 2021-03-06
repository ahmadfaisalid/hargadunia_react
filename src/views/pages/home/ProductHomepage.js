import React, { Component } from 'react';
import ProductList from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';
import Product from '../global/Product';

class SliderHome extends Component {
  render() {
    const s_productSliderSettings = {
      slidesPerView: 5,
      simulateTouch:true,
      slidesPerGroup: 5,
      spaceBetween: 10,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1227: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 4
        },
        959: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 3
         
        },
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 2
        },
        375: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 2
        }
      },
      containerClass: 'swiper-container card-slider s2' // Replace swiper-container with customized-swiper-container
    }

    const product_BestSeller = [{
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

    const product_SellingPrice = [{
      name: "Breville BES870XL Barista Express Espresso Machine",
      price: "Rp. 10.678.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://images-na.ssl-images-amazon.com/images/I/5157M-INzlL.jpg_AA160_.jpg",
      id: 1
    }, {
      name: "Anker SoundCore Bluetooth Speaker with 24-Hour Playtime, 66-Foot Bluetooth Range & Built-in Mic, Dual-Driver Portable Wireless Speaker with Low Harmonic Distortion and Superior Sound - Black",
      price: "Rp. 589.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0Fua2VyX1NvdW5kMTY6MzE6NDg_160.jpg",
      id: 2
    }, {
      name: "Jelly Belly Bean Boozled with Spinner Wheel Game 4th Edition, 3.5 Ounce",
      price: "Rp. 152.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0plbGx5X0JlbGx5MDk6NDU6NTA_160.jpg",
      id: 3
    }, {
      name: "ColourPop - Pressed Powder Shadow Palette - Yes, Please!",
      price: "Rp. 304.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0NvbG91clBvcF8tMTQ6NTg6MTE_160.jpg",
      id: 4
    }, {
      name: "ColourPop - Pressed Powder Shadow Palette - You Had Me At Hello",
      price: "Rp. 332.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0NvbG91clBvcF8tMTQ6NDU6MDc_160.jpg",
      id: 5
    }, {
      name: "Anki Cozmo Collector's Edition Robot",
      price: "Rp. 3.531.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0Fua2lfQ296bW9fMTM6MjM6NDI_160.jpg",
      id: 6
    }, {
      name: "Irvins Salted Egg Fish Skin 230gr",
      price: "Rp. 149.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0lydmluc19TYWx0MTA6NTg6MzU_160.jpg",
      id: 7
    }];

    const product_FeaturedProduct = [{
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

    const product_ShippedWithin3Days = [{
      name: "Breville BES870XL Barista Express Espresso Machine",
      price: "Rp. 10.678.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://images-na.ssl-images-amazon.com/images/I/5157M-INzlL.jpg_AA160_.jpg",
      id: 1
    }, {
      name: "Anker SoundCore Bluetooth Speaker with 24-Hour Playtime, 66-Foot Bluetooth Range & Built-in Mic, Dual-Driver Portable Wireless Speaker with Low Harmonic Distortion and Superior Sound - Black",
      price: "Rp. 589.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0Fua2VyX1NvdW5kMTY6MzE6NDg_160.jpg",
      id: 2
    }, {
      name: "Jelly Belly Bean Boozled with Spinner Wheel Game 4th Edition, 3.5 Ounce",
      price: "Rp. 152.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0plbGx5X0JlbGx5MDk6NDU6NTA_160.jpg",
      id: 3
    }, {
      name: "ColourPop - Pressed Powder Shadow Palette - Yes, Please!",
      price: "Rp. 304.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0NvbG91clBvcF8tMTQ6NTg6MTE_160.jpg",
      id: 4
    }, {
      name: "ColourPop - Pressed Powder Shadow Palette - You Had Me At Hello",
      price: "Rp. 332.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0NvbG91clBvcF8tMTQ6NDU6MDc_160.jpg",
      id: 5
    }, {
      name: "Anki Cozmo Collector's Edition Robot",
      price: "Rp. 3.531.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0Fua2lfQ296bW9fMTM6MjM6NDI_160.jpg",
      id: 6
    }, {
      name: "Irvins Salted Egg Fish Skin 230gr",
      price: "Rp. 149.000",
      pdisc: "",
      disc: "",
      country: "SG",
      prdfrom: "Singapore",
      store: "Ishopchangi",
      image: "https://hargadunia.com/resources/products/img_uploads/tiny_thumb/aW1nX0lydmluc19TYWx0MTA6NTg6MzU_160.jpg",
      id: 7
    }];
    return(
      <div className="bg-2nd" react-section="productHomepage">
        <section className="container mt-4">

  {/* BEST SELLER -----------------------------------------------------------------------------------------------------------------------------------
  =============================================================================================================================================== */}
          <div className="header-block">
            <div className="page-header float-left">Product Best Seller</div>
            <a href="#" className="float-right see-more-text">
              <div>See More</div>
            </a>
          </div>
          <div className="row no-gutters mt-1 mb-5">
            <div className="col-md-12">
              <ProductList {...s_productSliderSettings}>
              {product_BestSeller.map((prd_data) => 
                <Product className="swiper-slide" prd_data={prd_data} key={prd_data.id} />
              )}
              <div className="promo-prd-box">
                <a>
                  <div className="image-promo-product">
                    <img src ="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/see-more/img-hargadunia-special-price-5b026bb1ac15d"/>
                  </div>
                </a>
              </div>
              </ProductList>
            </div>
          </div>

          <div className="block-banners">
            <a href="#" className="banner-box" style={{"backgroundImage":"url(assets/img/banner1.png)"}}></a>
          </div>
  {/* SPECIAL PRICE --------------------------------------------------------------------------------------------------------------------------------- 
  =============================================================================================================================================== */}
          <div className="header-block">
            <div className="page-header float-left">Special Price</div>
            <a href="#" className="float-right see-more-text">
              <div>See More</div>
            </a>
          </div>
          <div className="row no-gutters mt-1 mb-5">
            <div className="col-md-12">
              <ProductList {...s_productSliderSettings}>
              {product_SellingPrice.map((prd_data) => 
                <Product prd_data={prd_data} key={prd_data.id} />
              )}
              <div className="promo-prd-box">
                <a>
                  <div className="image-promo-product">
                    <img src ="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/see-more/img-hargadunia-special-price-5b026bb1ac15d"/>
                  </div>
                </a>
              </div>
              </ProductList>
            </div>
          </div>

          <div className="block-banners">
            <a href="#" className="banner-box" style={{"backgroundImage":"url(assets/img/banner2.png)"}}></a>
          </div>

  {/* FEATURED PRODUCT -----------------------------------------------------------------------------------------------------------------------------------
  =============================================================================================================================================== */}
          <div className="header-block">
            <div className="page-header float-left">Product Best Seller</div>
            <a href="#" className="float-right see-more-text">
              <div>See More</div>
            </a>
          </div>
          <div className="row no-gutters mt-1 mb-5">
            <div className="col-md-12">
              <ProductList {...s_productSliderSettings}>
              {product_FeaturedProduct.map((prd_data) =>  
                <Product prd_data={prd_data} key={prd_data.id} />
              )}
              <div className="promo-prd-box">
                <a>
                  <div className="image-promo-product">
                    <img src ="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/see-more/img-hargadunia-special-price-5b026bb1ac15d"/>
                  </div>
                </a>
              </div>
              </ProductList>
            </div>
          </div>

          <div className="block-banners">
            <a href="#" className="banner-box" style={{"backgroundImage":"url(assets/img/banner3.png)"}}></a>
          </div>

  {/* SPECIAL PRICE --------------------------------------------------------------------------------------------------------------------------------- 
  =============================================================================================================================================== */}
          <div className="header-block">
            <div className="page-header float-left">Shipped within 3 days</div>
            <a href="#" className="float-right see-more-text">
              <div>See More</div>
            </a>
          </div>
          <div className="row no-gutters mt-1 mb-5">
            <div className="col-md-12">
              <ProductList {...s_productSliderSettings}>
              {product_ShippedWithin3Days.map((prd_data) =>  
                <Product prd_data={prd_data} key={prd_data.id} />
              )}
              <div className="promo-prd-box">
                <a>
                  <div className="image-promo-product">
                    <img src ="https://d3ol8ih1xbmzso.cloudfront.net/asset/05-2018/see-more/img-hargadunia-special-price-5b026bb1ac15d"/>
                  </div>
                </a>
              </div>
              </ProductList>
            </div>
          </div>

          <div className="block-banners">
            <a href="#" className="banner-box" style={{"backgroundImage":"url(assets/img/banner4.png)"}}></a>
          </div>
          
        </section>
      </div>
    )
  }
}

export default SliderHome;