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
            <a> Home</a>
          </li>
          <li className="soeliteAbout">
            <a > About Us </a>
          </li>
          <li className="soeliteAbout">
            <a> Contact Us </a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}
