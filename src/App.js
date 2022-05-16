import React, { Component } from "react";
import HomePage from "./Soelite/Pages/Home/homePage";
import AboutUsPage from './Soelite/Pages/AboutUs/aboutUs'
import Header from "./Soelite/Components/Header/header";
import Footer from "./Soelite/Components/Footer/footer";
class App extends Component {
  render() {
    return (
      <div className="App">
     
        <Header />
        {/* <AboutUsPage /> */}
        <HomePage /> 
        <Footer />
      </div>
    );
  }
}

export default App;
