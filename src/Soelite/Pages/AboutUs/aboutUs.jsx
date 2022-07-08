import React from "react";
import './aboutUs.css';
import AboutUs from '../../Components/AboutUs/aboutUs';
import SoEliteAboutUs from "../../Components/SoeliteAboutUs/soeliteAboutUs";

const AboutUsPage = () => {
  return (
    <div className="soEliteContainer">
     <AboutUs />
     <SoEliteAboutUs />
    </div>
  );
};
export default AboutUsPage;
