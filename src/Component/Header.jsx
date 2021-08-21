import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        className="header"
        style={{ backgroundImage: "url('./images/header.jpg')" }}
      >
        <div className="container">
          <img className="header-img" src="./images/header-img.png" alt="" />
          <div className="header-content">
            <h5>
              صلحلي
              <br />
              أول شركه صيانه في صعيد مصر
            </h5>
            <p>
              و اول تطبيق موبايل بيقدم خدمة الصيانة المنزلية في صعيد مصر. يعنى
              لو محتاج صنايعى شاطر ومضمون فى مجالات : ( الكهرباء- السباكه -
              النجاره - التكييفات - الدش و الريسيفر - والوميتال )
            </p>
            <a href="#ourServices" className="btn">
              شاهد المزيد
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
