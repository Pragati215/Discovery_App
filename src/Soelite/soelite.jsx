import React from "react";
import "./soelite.css";
import SoEliteProducts from "../Soelite/SoeliteProducts/soEliteProducts";
import SoEliteBenefits from "../Soelite/SoeliteBenefits/soeliteBenefits";

const SoElite = () => {
  return (
    <div className="soEliteContainer">
      <SoEliteProducts />
      <SoEliteBenefits />
    </div>
  );
};
export default SoElite;
