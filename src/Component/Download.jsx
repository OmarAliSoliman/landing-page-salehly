import React, { Component } from "react";

class Download extends Component {
  render() {
    return (
      <div>
        <div className="download" id="downloadApp" style={{backgroundImage: "url('./images/download.jpg')"}}>
          <div className="container">
            <img className="footer-logo" src="./images/logo.png" alt="" />
            <h5>صلحلى أول شركه صيانه في صعيد مصر</h5>
            <p>
              صيانة منصة الكترونية رائده لتسهيل الحصول على خدمات الصيانة
              المنزلية بكل سهوله وثقه . حمل تطبيق صيانة وشاهد أعمالنا وتمتع
              بخدمة الصيانة الآن
            </p>
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 play-parent">
                <a href="" target="_blank">
                  <img src="./images/google.png" alt="" />
                </a>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6 apple-parent">
                <a href="" target="_blank">
                  <img src="./images/apple.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;
