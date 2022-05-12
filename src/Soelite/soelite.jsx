import React, { useEffect } from "react";
// import experiences_hero from "../assets/experiences_hero.mp4";
import "./soelite.css";
import Logo from "../soeliteAssects/png.png";
import SoEliteProducts from '../Soelite/SoeliteProducts/soEliteProducts';
import SoEliteBenefits from '../Soelite/SoeliteBenefits/soeliteBenefits';
import Footer from '../Soelite/Footer/footer';

export default function SoElite() {
  return (
    <div className="soEliteContainer">
      <div>
        <header className="soeliteHeader">
          <div>
            <img className="Logo" src={Logo} alt="Sample photo" />
          </div>
          <nav className="soeliteNavbar">
            <ul className="soeliteMenu">
              <li className="soeliteAbout">
                <a> Home</a>
              </li>
              <li className="soeliteAbout">
                <a> About Us </a>
              </li>
              <li className="soeliteAbout">
                <a> Contact Us </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="soEliteSlogan">Soelite. Health and taste Prioritized</div>
    <SoEliteProducts />
    <SoEliteBenefits />
    <Footer />
    </div>
  );
}
