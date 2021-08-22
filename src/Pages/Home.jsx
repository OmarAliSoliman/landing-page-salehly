import React, { Component } from "react";
import Characteristics from "../Component/Characteristics";
import Download from "../Component/Download";
import Form from "../Component/Form";
import Numbers from "../Component/Numbers";
import Services from "../Component/Services";
import ScreensSlider from "../Component/ScreensSlider";
import Store from "../Component/Store";
import Testomonialas from "../Component/Testomonialas";
import Footer from "../Component/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Services />
        <Characteristics />
        <Store />
        <ScreensSlider />
        <Numbers />
        <Testomonialas />
        <Form />
        <Download />
        
      </div>
    );
  }
}


export default Home;