import React, { Component } from "react";

import Swiper from 'swiper/bundle';

class ScreensSlider extends Component {

  componentDidMount(){
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 150,
        modifier: 1.5,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  render() {

  

    return (
      <div>
        <div className="screen-app text-center">
          <div className="container">
            <div className="section-header">
              <h5>شاشات التطبيق</h5>
              <p>
                تعرف على <span>شاشات التطبيق</span> المختلفة بالخصائص والمميزات
                والعروض الحصرية
              </p>
            </div>
            <div
              className="swiper-container"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="./images/slider-1.jpeg" alt="slide 1" />
                </div>
                <div className="swiper-slide">
                  <img src="./images/slider-2.jpeg" alt="slide 1" />
                </div>
                <div className="swiper-slide">
                  <img src="./images/slider-3.jpeg" alt="slide 1" />
                </div>
                <div className="swiper-slide">
                  <img src="./images/slider-4.jpeg" alt="slide 1" />
                </div>
                <div className="swiper-slide">
                  <img src="./images/slider-5.jpeg" alt="slide 1" />
                </div>
                <div className="swiper-slide">
                  <img src="./images/slider-6.jpeg" alt="slide 1" />
                </div>
                <div className="swiper-slide">
                  <img src="./images/slider-7.jpeg" alt="slide 1" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreensSlider;
