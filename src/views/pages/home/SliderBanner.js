import React, { Component } from 'react';
import SliderHomeHardun from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';

class SliderHome extends Component {
  render() {
    const s_banner = {
      slidesPerView: 2,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      spaceBetween: 5,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 0
        }
      },
      containerClass: 'swiper-container home-banner-slider' // Replace swiper-container with customized-swiper-container
    }

    return(
      <section react-section="sliderHome">
	      <div className="container mt-4 container-slide">
	        <SliderHomeHardun {...s_banner}>
	          <a href=""><img className="img-fluid img-slide" src="https://s3.bukalapak.com/uploads/flash_banner/35423/homepage_banner/s-834-352/Banner_A-B_Test_-_ALL_VP_MANTEP.jpg"/></a>
	          <a href=""><img className="img-fluid img-slide" src="https://s0.bukalapak.com/uploads/flash_banner/50423/homepage_banner/s-834-352/BL_banner_1668x704.jpg"/></a>
	          <a href=""><img className="img-fluid img-slide" src="https://s1.bukalapak.com/uploads/flash_banner/17423/homepage_banner/s-834-352/Banner_A-B_Test_-_3.jpg"/></a>
	          <a href=""><img className="img-fluid img-slide" src="https://s2.bukalapak.com/uploads/flash_banner/74423/homepage_banner/s-834-352/Banner_A-B-ShakeLogistic.jpg"/></a>
	          <a href=""><img className="img-fluid img-slide" src="https://s3.bukalapak.com/uploads/flash_banner/38423/homepage_banner/s-834-352/Banner_A-B_Test_rev2.jpg"/></a>
	        </SliderHomeHardun>
	      </div>
      </section>
    )
  }
}

export default SliderHome;