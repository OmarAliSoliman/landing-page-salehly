import React, { Component } from "react";


import {Link} from 'react-router-dom';

class Navbar extends Component {
  state = {
    scrolling: false,
  };

  

  render() {
    return (
      <div
        className={this.state.scrooling ? "myNavbra fixed-navbar" : "myNavbra"}
      >
        <div className="container">
          <nav className="desktopMenue">
            <ul className="navList list-unstyled">
              <li className="active">
                <Link to="/">الرئيسية</Link>
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
          </nav>
          <i
            className="fas fa-bars openSideMenue"
            onClick={this.props.openNav}
          ></i>
        </div>
      </div>
    );
  }
}

export default Navbar;
