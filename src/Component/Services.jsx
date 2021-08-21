import React, { Component } from "react";

// Slick
import Slider from "react-slick";

class Services extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      // rtl: currentDir == "rtl" ? true : false,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div className="our-services" id="ourServices">
          <div className="container">
            <div className="section-header">
              <h5>خدماتنا</h5>
            </div>

            <div className="services-slider">
              <Slider {...settings}>
                
                <div class="slider-item">
                  <div href="" class="serv-card">
                    <div
                      class="card-img"
                      style={{ backgroundImage: "url('./images/serv-1.jpg')" }}
                    ></div>
                    <div class="card-title">
                      <h5 class="card-title-main">النجارة</h5>
                    </div>
                  </div>
                </div>

                <div class="slider-item">
                  <div href="" class="serv-card">
                    <div
                      class="card-img"
                      style={{ backgroundImage: "url('./images/serv-2.jpg')" }}
                    ></div>
                    <div class="card-title">
                      <h5 class="card-title-main">السباكة</h5>
                    </div>
                  </div>
                </div>

                <div class="slider-item">
                  <div href="" class="serv-card">
                    <div
                      class="card-img"
                      style={{ backgroundImage: "url('./images/serv-3.jpg')" }}
                    ></div>
                    <div class="card-title">
                      <h5 class="card-title-main">الالوميتال</h5>
                    </div>
                  </div>
                </div>

                <div class="slider-item">
                  <div href="" class="serv-card">
                    <div
                      class="card-img"
                      style={{ backgroundImage: "url('./images/serv-4.jpg')" }}
                    ></div>
                    <div class="card-title">
                      <h5 class="card-title-main">الكهرباء</h5>
                    </div>
                  </div>
                </div>

                <div class="slider-item">
                  <div href="" class="serv-card">
                    <div
                      class="card-img"
                      style={{ backgroundImage: "url('./images/serv-4.jpg')" }}
                    ></div>
                    <div class="card-title">
                      <h5 class="card-title-main">الكهرباء</h5>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
