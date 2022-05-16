import React from "react";
import "./soEliteProducts.css";
import Logo from "../../soeliteAssects/TofuLabel.jpg";
import Fssai from "../../soeliteAssects/fssai.png";

export default function soEliteProducts() {
  return (
    <>
      <div className="soeliteProducts">
        <div className="singleProduct">
          <img className="productImage" src={Logo} alt="logo"></img>
          <h3>Tofu</h3>
        </div>
        <div className="singleProduct">
          <img className="productImage" src={Logo} alt="logo"></img>
          <h3>SoyaMilk</h3>
        </div>
        <div className="singleProduct">
          <img className="productImage" src={Logo} alt="logo"></img>
          <h3>Chaap</h3>
        </div>
        <div className="singleProduct">
          <img className="productImage" src={Logo} alt="logo"></img>
          <h3>Soya Curd </h3>
        </div>
        <div className="singleProduct">
          <img className="productImage" src={Logo} alt="logo"></img>
          <h3>Soya Shrikhand</h3>
        </div>
        <div className="singleProduct">
          <img className="productImage" src={Logo} alt="logo"></img>
          <h3>Soya Lassi</h3>
        </div>
        <div className="singleProduct">
          <img className="productImage" src={Logo} alt="logo"></img>
          <h3>Soya Butter Milk</h3>
        </div>
      </div>
      <div className="soEliteSlogan">
        <span className="multicolortext">
          Soelite. Health and taste Prioritized{" "}
        </span>
      </div>

      <div className="middleContainter">
        <div className="box"> Soelite</div>

        <div className="Fssai">
          <img className="fssaiImage" src={Fssai} alt="fssaiNo"></img>
          <h3>Reg No.11522036000473</h3>
        </div>
      </div>
    </>
  );
}
