import React from "react";
import "./soEliteProducts.css";
import SoyaPaneer from "../../soeliteAssects/soyapaneer2.png";
import Fssai from "../../soeliteAssects/fssai.png";

export default function soEliteProducts() {
  return (
    <>
      <div className="soEliteSlogan">
      <span className="multicolortext">
          Soelite. Health and taste Prioritized
        </span>
        <img
          className="soyapaneerImage"
          src={SoyaPaneer}
          alt="Soya Paneer"
        ></img>

      </div>
        
    </>
  );
}
