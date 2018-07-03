import React, { Component } from 'react';
import CategoryList from 'react-id-swiper';

class Category extends Component {
  render() {
    const s_bestSeller = {
      slidesPerView: 10,
      spaceBetween: 0,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1227: {
          slidesPerView: 7,
          spaceBetween: 5
        },
        959: {
          slidesPerView: 5,
          spaceBetween: 5
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 5
        }
      },
      containerClass: 'swiper-container cat-slide mb-4' // Replace swiper-container with customized-swiper-container
    }
  
    const product_BestSeller = [{
      name: "Electronic & Computers",
      image: "https://cf.shopee.co.id/file/a1b486db003ca47fcba9446b668073ac_tn",
      id: 1
    }, {
      name: "Books",
      image: "https://cf.shopee.co.id/file/e011f528b7c7d014d60c75c4656f9854_tn",
      id: 2
    }, {
      name: "Home, Garden & Tools",
      price: "Rp. 871.000",
      image: "https://cf.shopee.co.id/file/81546b4148b86db3166e5adf17663fdb_tn",
      id: 3
    }, {
      name: "Beauty, Healty & Grocery",
      price: "Rp. 60.000",
      image: "https://cf.shopee.co.id/file/3d30324d77c15f986f60ae2f91583331_tn",
      id: 4
    }, {
      name: "Toys, Kids & Baby",
      price: "Rp. 864.000",
      image: "https://cf.shopee.co.id/file/3a626c8fe632a28d0db4b8a54b133340_tn",
      id: 5
    }, {
      name: "Clothing, Shoes & Jewelry",
      price: "Rp. 1.745.000",
      image: "https://cf.shopee.co.id/file/92e7393b2a390b281ddfbd29e2fabae4_tn",
      id: 6
    }, {
      name: "Sports & Outdoors",
      price: "Rp. 277.000",
      image: "https://cf.shopee.co.id/file/f2a1e60b52c6b5d3a51d64039829977c_tn",
      id: 7
    }, {
      name: "Automotive & Industrial",
      price: "Rp. 864.000",
      image: "https://cf.shopee.co.id/file/eef3b6d13a11daa9845dc1aaa2a7a6b5_tn",
      id: 8
    }, {
      name: "Sexual Wellnes",
      price: "Rp. 1.745.000",
      image: "https://cf.shopee.co.id/file/985c2188391806b21224b83bb6693976_tn",
      id: 9
    }, {
      name: "Luggage & Travel Gear",
      price: "Rp. 277.000",
      image: "https://cf.shopee.co.id/file/3037dd4781e1b1d75022b08578ed98bd_tn",
      id: 10
    }];
    return (
      <div className="container">
        <br/>
        <div className="header-block">
          <div className="page-cat-header float-left">Kategori</div>
        </div>
        <CategoryList {...s_bestSeller}>
        {product_BestSeller.map((prd_data) => // Foreach Product Best Seller
          <div className="cat-box" key={prd_data.id}>
            <a>
              <div className="image-box-cat">
                <div className="box-img">
                  <img src ={prd_data.image} className="w-100"/>
                </div>
              </div>
              <div className="cat-meta">
                <div className="cat-meta__name" title={prd_data.name}>{prd_data.name}</div>
              </div>
            </a>
          </div>
        )}
        </CategoryList>
      </div>
    );
  }
}
export default Category;