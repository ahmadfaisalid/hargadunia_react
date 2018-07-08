import React, { Component } from 'react';
import SliderBrandList from 'react-id-swiper';

class SliderBrand extends Component {
  render() {
    const s_brand = {
      slidesPerView: 5,
      slidesPerColumn: 2,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        959: {
          slidesPerView: 4,
          spaceBetween: 5
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 5
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        400: {
          slidesPerView: 1,
          spaceBetween: 5
        }
      },
      containerClass: 'swiper-container brand-slider' // Replace swiper-container with customized-swiper-container
    }
  
    const brand_List = [{
      name: "Watsons",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/06-2018/web-store/img-watsons-5b1600483328d",
      link:"#",
      id: 1
    }, {
      name: "Amazon",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-amazon-5ae6e65c6f427",
      link:"#",
      id: 2
    }, {
      name: "Walmart",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-walmart-5ae6e651c51bf",
      link:"#",
      id: 3
    }, {
      name: "Ebay",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-ebay-5ae6e649456c7",
      link:"#",
      id: 4
    }, {
      name: "Nordstrom",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-nordstrom-5ae6e63fe9868",
      link:"#",
      id: 5
    }, {
      name: "Lego",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-lego-5ae6e62a84bb3",
      link:"#",
      id: 6
    }, {
      name: "Costco",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-costco-5ae6e620f0e60",
      link:"#",
      id: 7
    }, {
      name: "Jomashop",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-jomashop-5ae6e618d5a93",
      link:"#",
      id: 8
    }, {
      name: "Guardian",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/06-2018/web-store/img-guardian-5b1773dd65d68",
      link:"#",
      id: 9
    }, {
      name: "Redmart",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/06-2018/web-store/img-redmart-5b1771567671e",
      link:"#",
      id: 10
    }, {
      name: "Best buy",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-best-buy-5ae6e5db5bda4",
      link:"#",
      id: 11
    }, {
      name: "Target",
      image: "https://d3ol8ih1xbmzso.cloudfront.net/asset/04-2018/web-store/img-target-5ae6e5ce41ddd",
      link:"#",
      id: 12
    }];
    
    return (
      <div className="container section-brand" react-section="slider-brand">
        <div className="header-block">
          <div className="page-header float-left">Partner Store</div>
        </div>

        <SliderBrandList {...s_brand}>
        {brand_List.map((brand_list) =>
          <a href={brand_list.link} key={brand_list.id}>
            <div className="box-brand">
              <img className="img-fluid img-slide" src={brand_list.image} alt={brand_list.name}/>
            </div>
          </a>
        )}
        </SliderBrandList>
      </div>
    );
  }
}
export default SliderBrand;