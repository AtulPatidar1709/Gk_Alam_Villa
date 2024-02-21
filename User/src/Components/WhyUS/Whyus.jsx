import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import  CountUp  from 'react-countup';
import "./Whyus.css";
import "../../App.css";
import "../Cards/Cards";
import Accordian from "../Accordian/Accordian";
import Specification from "../Specification/Specification";
import whySection from "../../assets/img/whySection.png";
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
      <div className="main-why pb-240">
        <div>
          <img src="" alt="" />
        </div>
        
        <Fade
          cascade
          direction="up"
          damping={0.5e-1}
          delay={100}
          distance="20px"
        > 
          <div className="main-why">
            <h1 className="why-heading large-heading">WHY CHOOSE US?</h1>
            <h4 className="choose-us position-relative small-headline pl-5">
              WHY CHOOSE US
            </h4>
          </div>
        </Fade>
        <Container>
          <Row className="align-items-center">
            <Col md={"7"}>
              <div className="accodianCss">
                <Accordian />
              </div>
            </Col>
            <Col md={"5"}>
              <Fade
                cascade
                direction="left"
                damping={0.5e-1}
                delay={100}
                distance="120px"
              >
                <div className="img-fit">
                  <img src={whySection} alt="" className="img-about" />
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Experiance Area */}
      <Container className="Experiance">
        <Row className="align-items-center expRow flex p-16 bgClr">
          <Col md={4} className="align-items-center d-grid pt-50 pb-50">
            <h1 className="heads"><CountUp end={35} duration={20}/>+</h1>
            <p className="peraExperiance">Years</p>
          </Col>
          <Col md={4} className="align-items-center d-grid pt-50 pb-50">
            <h1 className="heads"><CountUp end={4000} duration={5} />+</h1>
            <p className="peraExperiance">Happy Families</p>
          </Col>
          <Col md={4} className="align-items-center d-grid pt-50 pb-50">
            <h1 className="heads"><CountUp end={3} duration={20} />Million+</h1>
            <p className="peraExperiance">Sq.Ft. Delivered</p>
          </Col>
        </Row>
      </Container>

      {/* Ongoing Area */}
      <Fade
        cascade
        direction="up"
        damping={0.5e-1}
        delay={100}
        distance="120px"
      >
        <h1 className="large-heading ongoing-heading">ONGOING PROJECTS</h1>
      </Fade>
      <Container className="w-90 position-relative p-16 flex-column text-bg-[#c6c6c6] border">
        <Col className="main-ongoing">
          <Fade
            cascade
            direction="up"
            damping={0.5e-1}
            delay={100}
            distance="120px"
          >
            <Row>
              <h4 className="choose-us small-headline">ONGOING PROJECTS</h4>
            </Row>
          </Fade>
          <Row>{/* <YoutubeEmbed embedId="oJM7v0Jpn3E" /> */}</Row>
        </Col>
      </Container>
      <Container className="w-80">
        <div className="logos-slider">
          <div className="logos-slide">{logoElements}</div>
        </div>
      </Container>
      <Cards />
      <Specification />
    </>
  );
};

export default Whyus;
