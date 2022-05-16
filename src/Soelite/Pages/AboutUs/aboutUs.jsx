import React from "react";
import './aboutUs.css';
import AboutUs from '../../Components/AboutUs/aboutUs';
import SoEliteBenefits from "../../Components/SoeliteBenefits/soeliteBenefits";

const AboutUsPage = () => {
  return (
    <div className="soEliteContainer">
     <AboutUs />
     <SoEliteBenefits />
    </div>
  );
};
export default AboutUsPage;
