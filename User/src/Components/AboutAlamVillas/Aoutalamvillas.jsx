import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "reactstrap";
import "../AboutAlamVillas/Aboutalavillas.css";
import About from "../AboutUs/About";
import Project1 from "../../assets/img/Amenities/New-Project-1.jpg";
import Project2 from "../../assets/img/Amenities/New-Project-2.jpg";
import Project3 from "../../assets/img/Amenities/New-Project-3.jpg";
import Project4 from "../../assets/img/Amenities/New-Project-4.jpg";
import Project5 from "../../assets/img/Amenities/New-Project-5.jpg";
import ProjectPlans from "../ProjectsPlan/ProjectsPlan";
import Specification from "../Specification/Specification";
import mainbg from "../../assets/img/bg-card-logo.png";

const cardsData = [
  {
    id: 1,
    name: "Club House",
    img: Project1,
  },
  {
    id: 2,
    name: "Swimming Pool",
    img: Project2,
  },
  {
    id: 3,
    name: "Play Ground",
    img: Project3,
  },
  {
    id: 4,
    name: "Designer Landscape",
    img: Project4,
  },
  {
    id: 5,
    name: "Play Area",
    img: Project5,
  },
];

const Aoutalamvillas = () => {
  return (
    <>
      <div className="bg-2">
        <div className="headSection">
          <Fade
            cascade
            direction="up"
            damping={0.5e-1}
            delay={100}
            distance="120px"
          >
            <h5>Magnificent living lies ahead. </h5>
            <h2>
              Step into the new <br />
              Heights of grandeur
            </h2>
          </Fade>
        </div>
      </div>
      <Container className="aboutContainer">
        <About />
      </Container>
      <Container>
        <Row>
          <Col md={12} className="justify-content-center d-flex">
            <Fade
              cascade
              direction="up"
              damping={0.5e-1}
              delay={100}
              distance="120px"
            >
              <h1 className="large-heading">AMENITIES</h1>
            </Fade>
          </Col>
          <Col className="align-content-center d-flex" sm={"11"}>
            <h1 className="small-headline position-relative">A WORLD OF WONDERS</h1>
          </Col>
        </Row>
      </Container>
      <Container className="CardsContainer">
        <Row className="pb-4 CardsContainer">
          {cardsData.slice(0, 3).map((items, index) => (
            <Col
              xs={"11"}
              sm={"11"}
              md={"4"}
              lg={"4"}
              key={items.id}
              className="mb-3 pb-4"
            >
              <div className="card-2 text-center">
                <img className="w-100 image-fluid" src={items.img} alt="" />
              </div>
              <div className="heading-holder">
                <h1>{items.name}</h1>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="pb-4 CardsContainer">
          {cardsData.slice(3, 5).map((items, index) => (
            <Col
              xs={"11"}
              sm={"6"}
              lg={"6"}
              md={"6"}
              className="justify-content-center"
            >
              <div className="card-2">
                <img className="image-fluid" src={items.img} alt="" />
              </div>
              <div className="heading-holder">
                <h1>{items.name}</h1>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <div>
        <Col md={"12"} className="justify-content-center d-flex">
          <Fade
            cascade
            direction="up"
            damping={0.5e-1}
            delay={100}
            distance="120px"
          >
            <h1 className="large-heading">PLANS</h1>
          </Fade>
        </Col>
      </div>
      <Container>
        <Col className="align-content-around d-flex ">
          <h1 className="small-headline position-relative">
            PROJECT PLANS
          </h1>
        </Col>
        <Row className="CardsContainer">
          <ProjectPlans />
        </Row>
      </Container>
      <Specification />
    </>
  );
};

export default Aoutalamvillas;
