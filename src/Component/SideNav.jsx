import React, { Component } from "react";

class SideNav extends Component {
  render() {


    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <img className="logo" src="./assets/images/logo.png" alt="" />
          <a href="javascript:void(0)" className="closebtn" onClick={this.props.closeNav}>
            <i className="fas fa-times"></i>
          </a>
          <ul className="side-nav-links list-unstyled">
            <li className="active">
              <a href="#">الرئيسية</a>
            </li>
            <li>
              <a href="#ourServices">خدمات</a>{" "}
            </li>
            <li>
              <a href="#ourClients">العملاء</a>
            </li>
            <li>
              <a href="#whoUs">من نحن</a>
            </li>
            <li>
              <a href="#downloadApp">تحميل التطبيق</a>
            </li>
            <li>
              <a href="#contactUs">اتصل بنا</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideNav;
