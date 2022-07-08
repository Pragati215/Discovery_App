import React from "react";
import "./soeliteAboutUs.css";
import { Card, Row, Col } from "react-bootstrap";
import Health from "../../soeliteAssects/healthy2.png";
import Quality from "../../soeliteAssects/quality.jpg";
import Homemade from "../../soeliteAssects/homemade.png";
import Organic from "../../soeliteAssects/organic-natural-2-512.png";

const productsFeatures = [
  {
    title: "Quality",
    icons: <img className="qualityImage" src={Quality} alt="Quality"></img>,
    text: `Our products are manufactured under excellent quality-controlled environment. 
    We believe in quality & customer satisfaction. For us “Quality comes First”.`,
  },
  {
    title: "Super Healthy",
    icons: <img className="healthImage" src={Health} alt="Health"></img>,
    text: `Our recipes consist of well-balanced portions of nutrients coming in from their natural sources and our foods contain iron, calcium, protein, 
    vitamins and other minerals in quantities just right for your body.`,
  },
  {
    title: "Purely Organic",
    icons: <img className="qualityImage" src={Organic} alt="Organic"></img>,
    text: `Soelite products are Zero preservatives and zero added sugar or any such harmful ingredient that shouldn’t be going into your body. 
    100% certified organic sourced, we believe in all things natural.`,
  },
  {
    title: "HomeMade",
    icons: <img className="homeImage" src={Homemade} alt="Homemade"></img>,
    text: `All our products are prepared in small batches to maintain the freshness of the ingredients, giving fresh 
    food is as important as giving healthy nutrient-dense food.`,
  },
];

export default function soEliteBenefits() {
  return (
    <>
      <div className="soeliteCards">
        <Row xs={1} md={4} className="g-4">
          {productsFeatures.map((features, idx) => (
            <Col>
              <Card>
                <div className="benefitIcons">{features.icons}</div>
                <Card.Body>
                  <Card.Text>
                    <h3> {features.title}</h3>
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
