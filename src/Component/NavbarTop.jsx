import React, { Component } from "react";

class NavbarTop extends Component {
  render() {
    return (
      <div className="navbar-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <a href="" className="logo">
                <img src="./images/logo.png" alt="" />
              </a>
            </div>
            <div className="col-sm-7 col-md-6">
              <div className="down">
                <a href="" target="_blank">
                  <img src="./images/google.png" alt="" />
                </a>
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

export default NavbarTop;
