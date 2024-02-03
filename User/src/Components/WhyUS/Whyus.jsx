import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { DefaultPlayer as Video } from "react-html5video";
import "./Whyus.css";
import whySection from "../../assets/img/whySection.png";
import Accordian from "../Accordian/Accordian";
import logo1 from "../../assets/img/SliderImg/logo1.png";
import logo2 from "../../assets/img/SliderImg/logo2.png";
import logo3 from "../../assets/img/SliderImg/logo3.png";
import logo4 from "../../assets/img/SliderImg/logo4.png";
import logo5 from "../../assets/img/SliderImg/logo5.png";
import logo6 from "../../assets/img/SliderImg/logo6.png";
import logo7 from "../../assets/img/SliderImg/logo7.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Whyus = () => {
  const [selected, setSelected] = useState(null);
  const [logoElements, setLogoElements] = useState([]);

  useEffect(() => {
    // Clone logos and update state
    const clonedLogos = logos.map((logo, index) => (
      <img key={index} className="images" src={logo} alt="" />
    ));
    setLogoElements(clonedLogos);
  }, []);

  const toggle = (i) => {
    setSelected((prevSelected) => (prevSelected === i ? null : i));
  };

  return (
    <>
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
      </div>
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
        <div className="logos-slider">
          <div className="logos-slide">{logoElements}</div>
        </div>
      </div>
    </>
  );
};

export default Whyus;
