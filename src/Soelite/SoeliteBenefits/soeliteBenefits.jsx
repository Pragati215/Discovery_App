import React from "react";
import "./soeliteBenefits.css";
import { Card, Row, Col } from "react-bootstrap";
import Health from "../../soeliteAssects/healthy2.png";
import Quality from "../../soeliteAssects/quality.jpg";
import Homemade from "../../soeliteAssects/homemade.png";
import Organic from "../../soeliteAssects/organic-natural-2-512.png";

const productsFeatures = [
  {
    icons: <img className="qualityImage" src={Quality} alt="Quality"></img>,
    text: `Our products are manufactured under excellent quality-controlled environment. 
    We believe in quality & customer satisfaction. For us “Quality comes First”.`,
  },
  {
    icons: <img className="healthImage" src={Health} alt="Health"></img>,
    text: `Our recipes consist of well-balanced portions of nutrients coming in from their natural sources and our foods contain iron, calcium, protein, 
    vitamins and other minerals in quantities just right for your body.`,
  },
  {
    icons: <img className="qualityImage" src={Organic} alt="Organic"></img>,
    text: `Soelite products are Zero preservatives and zero added sugar or any such harmful ingredient that shouldn’t be going into your body. We use simple but wholesome ingredients, 
    100% certified organic sourced, we believe in all things natural.`,
  },
  {
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
                  <Card.Text>{features.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
