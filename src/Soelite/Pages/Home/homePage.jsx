import React from "react";
import "./homePage.css";
import SoEliteProducts from '../../Components/SoeliteProducts/soEliteProducts';
import ProductsCards from "../../Components/ProductCards/productCards";

const HomePage = () => {
  return (
    <div className="soEliteContainer">
      <SoEliteProducts />
      <ProductsCards />
    </div>
  );
};
export default HomePage;
