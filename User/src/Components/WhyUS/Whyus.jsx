import React from "react";
import { useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "./Whyus.css";
import whySection from "../../assets/img/whySection.png";
import Accordian from "../Accordian/Accordian";
import { Col, Container, Row } from "reactstrap";

const data = [
  {
    title: "1 Superior Construction",
    content:
      "With over three decades of experience, GK Builders and Developers is amongst the most trusted real estate developers in Hyderabad. Our brand is synonymous with superior quality of construction materials, best-in-industry practices, and compliance with safety protocol.",
  },
  {
    title: "2 Value For Money",
    content:
      "We offer our customers the best value for their money and investment. While no compromises are made in the quality of construction, every effort is made to optimise costs and pass on the benefit to the customer.",
  },
  {
    title: "3 Transparency",
    content:
      "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices We are committed to following all RERA guidelines and complying with all local municipal laws while developing our projects.",
  },
  {
    title: "4 Track Record",
    content:
      "Our 4000+ customers are truly our brand ambassadors and endorse our brand’s commitment and professionalism We have created an impeccable track and reputation and we are committed to taking this legacy forward.",
  },
];

const Whyus = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected((prevSelected) => (prevSelected === i ? null : i));
  };

  return (
    <div className="main-why">
      <div className="main-why">
        <h1 className="why-heading">WHY CHOOSE US?</h1>
        <h4 className="choose-us">WHY CHOOSE US</h4>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={"7"}>
            <div className="accodianCss">
              <Accordian />
            </div>
          </Col>
          <Col md={"5"}>
            <div className="img-fit">
              <img src={whySection} alt="" className="img-about" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="Experiance">
        <Row className="align-items-center flex p-16 bgClr">
          <Col md={4} className="align-items-center d-grid">
            <h1 className="heads">
              35+ <br /> Years
            </h1>
          </Col>
          <Col md={4} className="align-items-center d-grid">
            <h1 className="heads">
              4000+ <br /> Happy Families
            </h1>
          </Col>
          <Col md={4} className="align-items-center d-grid">
            <h1 className="heads">
              3 MILLION+ <br />
              Sq.Ft. Delivered
            </h1>
          </Col>
        </Row>
      </Container>

      {/* <div className="ex-collection">
        <h1>
          35+ <br /> Years
        </h1>
        <h1>
          4000+ <br /> Happy Families
        </h1>
        <h1>
          3 MILLION+ <br />
          Sq.Ft. Delivered
        </h1>
      </div> */}

      <div className="main-ongoing">
        <h1 className="ongoing-heading">ONGOING PROJECTS</h1>
        <h4 className="choose-us">ONGOING PROJECTS</h4>
        <div className="video-section">
          <video autoPlay loop>
            <source
              src="https://www.youtube.com/watch?v=AwdejvMs8BQ"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
