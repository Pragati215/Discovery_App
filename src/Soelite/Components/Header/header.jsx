import React from "react";
import "./header.css";
import Logo from "../../soeliteAssects/png.png";

export default function Header() {
  return (
    <header className="soeliteHeader">
      
      <div className="headerContainer">
        <img className="Logo" src={Logo} alt="Sample photo" />
     
      <nav className="soeliteNavbar">
        <ul className="soeliteMenu">
          <li className="soeliteAbout">
            <a href='/'> Home</a>
          </li>
          <li className="soeliteAbout">
            <a href='/aboutUs'> About Us </a>
          </li>
          <li className="soeliteAbout">
              <a href='/benefits'> Benefits </a>
            </li>
          <li className="soeliteAbout">
            <a href="/contactUs"> Contact Us </a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}
