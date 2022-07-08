import React from "react";
import { Card } from "react-bootstrap";
import "./contactUs.css";

export default function ContactUs() {
  return (
    <>
    <div className="contactUsContainer">
      <Card className="contactUsCard">
        <Card.Body >
          <Card.Text className=""> 
          {" "}
          <h1>Contact us</h1>
          <h3>
            Contact No.8999780616 <br></br>Whatsapp no.8999780616<br></br>
            Email-soelitefoods@gmail.com <br></br>Address -Plot no. 144,
            <br></br>Near Prajwal Hotel,<b></b>Moshi-Alandi Road,<br></br>
            Dudulgaon,Alandi-412105.
          </h3>
        </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}
