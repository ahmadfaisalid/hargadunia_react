import React, { Component } from 'react';
import SliderHomeHardun from 'react-id-swiper';
import 'react-id-swiper/src/styles/css/swiper.css';

class SliderHome extends Component {
  render() {
    const params = {
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
      <section>
	      <div className="container mt-4 container-slide">
	        <SliderHomeHardun {...params}>
	          <a href=""><img className="img-fluid img-slide" src="https://s3.bukalapak.com/uploads/flash_banner/30203/homepage_banner/s-834-352/Banner_A-B_Test_Copy_tbg.jpg.webp"/></a>
	          <a href=""><img className="img-fluid img-slide" src="https://s3.bukalapak.com/uploads/flash_banner/33203/homepage_banner/s-834-352/Banner_A-B_Test_Copy_update2_GAS.jpg.webp"/></a>
	          <a href=""><img className="img-fluid img-slide" src="https://s0.bukalapak.com/uploads/flash_banner/57203/homepage_banner/s-834-352/Banner_A-B_Test_Copy_sapa.jpg.webp"/></a>
	          <a href=""><img className="img-fluid img-slide" src="https://s2.bukalapak.com/uploads/flash_banner/22052/homepage_banner/s-834-352/Banner_A-B_Test.jpg.webp"/></a>
	          <a href=""><img className="img-fluid img-slide" src="https://s4.bukalapak.com/uploads/flash_banner/96203/homepage_banner/s-834-352/Banner_A-B_Test_Copy_%281%29.jpg.webp"/></a>
	        </SliderHomeHardun>
	      </div>
	      <div className="line-break"></div>
      </section>
    )
  }
}

export default SliderHome;