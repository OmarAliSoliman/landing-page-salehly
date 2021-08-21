import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer" id="contactUs">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="site">
                  <img src="./images/logo.png" />
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="https://wa.me/01094410342 " target="_blank">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://www.facebook.com/sal7lyy/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="contact">
                  <h3>تواصل معنا</h3>
                  <a href="tel:01201111431" target="_blank">
                    {" "}
                    كلمنا على 01201111431
                  </a>
                  <p>
                    {" "}
                    <i className="fas fa-location-arrow"></i>ش جامعه اسيوط- مبني
                    شبكه المعلومات، مركز الابداع التكنولوجي وياردة الاعمال، شركة
                    رقم 10
                  </p>
                  <p>
                    {" "}
                    <i className="fas fa-phone"></i>{" "}
                    <a href="tel:0120111143" target="_blank">
                      0120111143
                    </a>{" "}
                  </p>
                  <p>
                    {" "}
                    <i className="fas fa-envelope"></i>{" "}
                    <a href="mailto:mail@mail.com" target="_blank">
                      mail@mail.com
                    </a>{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <div className="pages">
                  <h3 className="links">روابط مهمة</h3>
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="#home"> الرئيسية </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#aboutus"> من نحن </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#contactus"> توصل معانا </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#apps">تحميل التطبيق</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#info"> العملاء </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="copyright">جميع الحقوق محفوظة &copy; 2021</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
