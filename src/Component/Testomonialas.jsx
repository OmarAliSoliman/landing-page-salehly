import React, { Component } from "react";
import Slider from "react-slick";

class Testomonialas extends Component {
  render() {

    var settings = {
      dots: true,
      arrows: false,
    }

    return (
      <div>
        <div className="testeminail" id="ourClients">
          <div className="container">
            <img className="title-img" src="./images/title.svg" alt="" />
            <div className="section-header">
              <h5>اراء العملاء</h5>
            </div>
            <div className="teste-slider">

              <Slider {...settings}>
              <div className="slider-item">
                <div className="teste-card">
                  <img src="./images/tes.jpg" alt="" />
                </div>
              </div>

              <div className="slider-item">
              <div className="teste-card">
                  <img src="./images/tes.jpg" alt="" />
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

export default Testomonialas;
