import React from "react";
import "./productsCards.css";
import { Card, Row, Col } from "react-bootstrap";
import Tofu from "../../soeliteAssects/TofuLabel.jpg";
import Milk from "../../soeliteAssects/soyamilk.jpg";

const productsFeatures = [
  {
    title: "Soelite Tofu",
    icons: (
      <div className="tofuCard">
        {" "}
        <img className="tofuImage" src={Tofu} alt="Quality" />{" "}
        <ul className="tofuTypes">
          Available in 3 Types
          <li> Plain tofu</li>
          <li>Masala Tofu</li>
          <li>Organic Tofu</li>{" "}
        </ul>
      </div>
    ),
    text: `    
    Tofu, or bean curd, originated in China around 2000 years ago and is derived from the soya beans. 
    It is made by curdling fresh soya milk, pressing it into a solid block, and then cooling it, 
    in much the same way that traditional dairy Paneer is made from milk.
    `,
  },
  {
    title: "Soelite Flavored Soya Milk",
    icons: (
      <div className="tofuCard">
        {" "}
        <img className="milkImage" src={Milk} alt="Health" />
        <ul className="milkTypes">
          Available in 7 Types
          <li>Chocolate</li> <li>Pista</li>
          <li>Butterscotch</li> <li>Mango</li>
        </ul>
      </div>
    ),
    text: `Soelite flavored is an exciting new product that is unlike any other soya milk 
    you've ever tasted.Soelite is a refreshing and delicious alternative to dairy milk, but with no cholesterol and fewer calories. Soelite is equally as creamy and smooth as regular milk, 
    but with more nutrition. Soelite flavored milk comes in 3 delicious flavors.
    Soelite Soya milk is now available in exciting new flavors. 
    The range of fresh flavors brings joy for everyone and looks great on your breakfast table.
    `,
  },
];

export default function ProductsCards() {
  return (
    <>
      <div className="soeliteCards">
        <Row xs={1} md={2} className="g-4">
          {productsFeatures.map((features, idx) => (
            <Col>
              <Card>
                <div className="benefitIcons">{features.icons}</div>
                <Card.Body>
                  <Card.Text>
                    <h3 className="cardTitle"> {features.title}</h3>
                    <br></br>
                    <span>{features.text}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
