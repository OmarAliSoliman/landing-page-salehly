import React, { Component } from "react";

import "./Css/style.css";

import Navbar from "./Component/Navbar";
import NavbarTop from "./Component/NavbarTop.jsx";
import Header from "./Component/Header.jsx";
import Services from "./Component/Services";
import Characteristics from "./Component/Characteristics";
import Store from "./Component/Store";
import Numbers from "./Component/Numbers";
import Testomonialas from "./Component/Testomonialas";
import Download from "./Component/Download";
import Footer from "./Component/Footer";
import SideNav from "./Component/SideNav";
import Form from "./Component/Form";

// Slick
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import ScreensSlider from "./Component/ScreensSlider";

// react router dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";

// pages
import NewCustomer from "./Pages/NewCustomer";
import Home from "./Pages/Home";


class App extends Component {
  render() {
    const openNav = () => {
      document.getElementById("mySidenav").style.right = "0";
      document.querySelector(".bg-sidenavOpen").style.display = "block";
      document.body.classList.add("openMenuActive");
    };

    const closeNav = () => {
      document.getElementById("mySidenav").style.right = "-300px";
      document.querySelector(".bg-sidenavOpen").style.display = "none";
      document.body.classList.remove("openMenuActive");
    };

    const closeSideNav = (e) => {
      document.getElementById("mySidenav").style.right = "-300px";
      e.target.style.display = "none";
      // console.log(e.target);
      document.body.classList.remove("openMenuActive");
    };

    return (
      <>
        <Router>
          <ToastContainer autoClose={1000} />
          <div className="App">
            <div class="bg-sidenavOpen" onClick={closeSideNav}></div>
            <Navbar {...this.props} openNav={openNav} />
            <SideNav {...this.props} closeNav={closeNav} />
            <NavbarTop />
            <Header />
            {/* <Home /> */}
            
            <Switch>
              <Route path="/new-customer" component={NewCustomer} />
              <Route path="/" component={Home} />
            </Switch>

            <Footer />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
