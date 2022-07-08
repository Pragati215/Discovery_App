import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Soelite/Pages/Home/homePage";
import AboutUsPage from "./Soelite/Pages/AboutUs/aboutUs";
import Header from "./Soelite/Components/Header/header";
import Footer from "./Soelite/Components/Footer/footer";
import Benefits from './Soelite/Pages/Benefits/benefits';
import ContactUs from './Soelite/Pages/ContactUs/contactUs';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/contactUs" element={<ContactUs />} />

          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
