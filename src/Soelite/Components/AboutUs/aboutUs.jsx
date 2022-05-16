import React from "react";
import "./aboutUs.css";
import ProductLabel from "../../soeliteAssects/TofuLabel.jpg";

export default function AboutUs() {
  return (
    <>
      <div className="aboutUsContainer" >
      <img className="tofulabel" src={ProductLabel} alt="logo"></img>
      <p className="aboutusInfo">
        Soelite has brought a range of products<br></br>
        that have good taste and also come with numerous health benefits. So,<br></br>
        you can now indulge in delicious food without any worries about the side<br></br>
        effects it may cause to your body. Soelite Tofu and Soy milk are<br></br>
        excellent sources of proteins, calcium, and isoflavones and are low in<br></br>
        fat and cholesterol-free which provide good nutrition and health.<br></br>
        Soelite Tofu readily absorbs the flavor of herbs and spices added when<br></br>
        you prepare a meal and can be used in many Indian and continental<br></br>
        cuisines!!
      </p>
      </div>
      <div className="soEliteSlogan">
        <span className="multicolortext">
          Soelite. Health and taste Prioritized{" "}
        </span>
      </div>
    </>
  );
}
