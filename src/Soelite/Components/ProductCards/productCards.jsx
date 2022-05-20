import React from "react";
import "./productsCards.css";
import Tofu from "../../soeliteAssects/TofuLabel.jpg";
import Milk from "../../soeliteAssects/soyamilk.jpg";
import Fssai from "../../soeliteAssects/fssai.png";

export default function ProductsCards() {
  return (
    <>
      <div className="soeliteProductInfo">
        <h1 className="title">Soelite Products</h1>
        <div className="soyaMilkProduct">
          <h1>Soelite Tofu</h1>
          <div className="tofuCard">
            <img className="tofuImage" src={Tofu} alt="Quality" />
            <div className="tofuProductDetails">
              <ul className="tofuTypes">
                Available in 3 Types
                <li>Plain tofu</li>
                <li>Masala Tofu</li>
                <li>Organic Tofu</li>
              </ul>
              <span>
                Tofu, or bean curd, originated in China around 2000 years ago
                and is derived from the soya beans. It is made by curdling fresh
                soya milk, pressing it into a solid block, and then cooling it,
                in much the same way that traditional dairy Paneer is made from
                milk.
              </span>
            </div>
          </div>
        </div>
        <div className="soyaMilkProduct">
          <h1>Soelite Flavored Soya Milk</h1>
          <div className="tofuCard">
            <div className="milkProductDetails">
              <ul className="milkTypes">
                Available in 7 Types
                <li>Chocolate</li>
                <li>Pista</li>
                <li>Butterscotch</li>
                <li>Mango</li>
                <li>Ilaychi</li>
                <li>Almond</li>
                <li>Rose</li>
              </ul>
              <div>
                Soelite flavored is an exciting new product that is unlike any
                other soya milk you've ever tasted.Soelite is a refreshing and
                delicious alternative to dairy milk, but with no cholesterol and
                fewer calories. Soelite is equally as creamy and smooth as
                regular milk, but with more nutrition. Soelite flavored milk
                comes in 3 delicious flavors. Soelite Soya milk is now available
                in exciting new flavors. The range of fresh flavors brings joy
                for everyone and looks great on your breakfast table.
              </div>
            </div>
            <img className="milkImage" src={Milk} alt="Health" />
          </div>
        </div>
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