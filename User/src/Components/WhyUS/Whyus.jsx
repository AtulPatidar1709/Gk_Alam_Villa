import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { DefaultPlayer as Video } from "react-html5video";
import "./Whyus.css";
import "../../App.css";
import "../Cards/Cards";
// import "../YoutubeEmbed.js";
import whySection from "../../assets/img/whySection.png";
import Accordian from "../Accordian/Accordian";
import whyUs from "../../assets/img/WhyUS.png";
import logo1 from "../../assets/img/SliderImg/logo1.png";
import logo2 from "../../assets/img/SliderImg/logo2.png";
import logo3 from "../../assets/img/SliderImg/logo3.png";
import logo4 from "../../assets/img/SliderImg/logo4.png";
import logo5 from "../../assets/img/SliderImg/logo5.png";
import logo6 from "../../assets/img/SliderImg/logo6.png";
import logo7 from "../../assets/img/SliderImg/logo7.png";
import Cards from "../Cards/Cards";

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
          <h1 className="why-heading large-heading animate__animated animate__fadeInDown">
            WHY CHOOSE US?
          </h1>
          <h4 className="choose-us small-headline pl-5 animate__animated animate__bounceInUp">
            WHY CHOOSE US
          </h4>
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

      {/* Experiance Area */}
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

      {/* Ongoing Area */}
      <Container className="w-90 p-16 flex-column text-bg-[#c6c6c6] border">
        <Col className="main-ongoing">
          <Row>
            <h1 className="ongoing-heading large-heading">ONGOING PROJECTS</h1>
          </Row>
          <Row>
            <h4 className="choose-us small-headline">ONGOING PROJECTS</h4>
          </Row>
          <Row>{/* <YoutubeEmbed embedId="oJM7v0Jpn3E" /> */}</Row>
        </Col>
      </Container>
      <Container className="w-80">
        <div className="logos-slider">
          <div className="logos-slide">{logoElements}</div>
        </div>
      </Container>
      <Cards/>
      {/* Slider Area */}
    </>
  );
};

export default Whyus;
