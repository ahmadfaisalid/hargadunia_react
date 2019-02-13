import React, { Component } from 'react';
import SliderHomeHardun from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';

class SliderHome extends Component {
  render() {
    const s_banner = {
      slidesPerView: 1,
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
	      <div className="container mt-4">
          <div className="container-slide float-left">
  	        <SliderHomeHardun {...s_banner}>
              <a href=""><img className="img-fluid img-slide" src="assets/img/slide-banner/slide-1.jpg"/></a>
              <a href=""><img className="img-fluid img-slide" src="assets/img/slide-banner/slide-2.jpg"/></a>
            </SliderHomeHardun>
          </div>
          <div className="container-side float-left">
            <div className="col-12 float-left">
              <a href=""><img className="img-fluid img-slide" src="assets/img/banner/sd-banner-1.jpg"/></a>
            </div>
            <div className="col-6 float-left">
              <a href=""><img className="img-fluid img-slide" src="assets/img/banner/sd-banner-2.jpg"/></a>
            </div>
            <div className="col-6 float-left">
              <a href=""><img className="img-fluid img-slide" src="assets/img/banner/sd-banner-3.jpg"/></a>
            </div>
          </div>
          <div className="float-left mt-2">
            <div className="col-3 float-left">
              <a href=""><img className="img-fluid img-slide" src="assets/img/banner/btm-banner-3.jpg"/></a>
            </div>
            <div className="col-3 float-left">
              <a href=""><img className="img-fluid img-slide" src="assets/img/banner/btm-banner-4.jpg"/></a>
            </div>
            <div className="col-3 float-left">
              <a href=""><img className="img-fluid img-slide" src="assets/img/banner/btm-banner-3.jpg"/></a>
            </div>
            <div className="col-3 float-left">
              <a href=""><img className="img-fluid img-slide" src="assets/img/banner/btm-banner-4.jpg"/></a>
            </div>
          </div>
	      </div>
      </section>
    )
  }
}

export default SliderHome;