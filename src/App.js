import React, { Component } from "react";
import SoElite from "./Soelite/soelite";
import AboutUs from "./Soelite/AboutUs/aboutUs";
import Header from "./Soelite/Header/header";
import Footer from "./Soelite/Footer/footer";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SoElite /> */}
        <Header />
        {/* <AboutUs /> */}
        <SoElite /> 
        <Footer />
      </div>
    );
  }
}

export default App;
