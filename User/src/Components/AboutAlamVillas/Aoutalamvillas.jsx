import React, { useState } from "react";

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
      <div className="img-contain">
        <div className="text-area">
          <h5>Magnificent living lies ahead. </h5>
          <h2>
            Step into the new <br />
            Heights of grandeur
          </h2>
        </div>
      </div>
      <Container className="aboutContainer">
        <About />
      </Container>
      <Container className="CardsContainer">
        <Row>
          <h1 className="large-heading">AMENITIES</h1>
        </Row>
        <Row>
          <p className="small-headline">A WORLD OF WONDERS</p>
        </Row>
        <Row className="pb-4 CardsContainer">
          {cardsData.slice(0, 3).map((items, index) => (
            <Col
              className={items.name}
              xs={"11"}
              sm={"11"}
              md={"4"}
              lg={"4"}
              key={items.id}
            >
              <div
                className="card-2"
                style={{ backgroundImage: `url(${items.img})` }}
              >
                {/* <img src={items.img} alt="" /> */}
                <div className="heading-holder">
                  <h1>{items.name}</h1>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="pb-4 CardsContainer">
          {cardsData.slice(3, 5).map((items, index) => (
            <Col xs={"11"} sm={"6"} lg={"6"} md={"6"}>
              <div
                className="card-2"
                style={{ backgroundImage: `url(${items.img})` }}
              >
                <div className="heading-holder">
                  <h1>{items.name}</h1>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Row>
          <h1 className="large-heading">PLANS</h1>
        </Row>
        <Row>
          <p className="small-headline">PROJECT PLANS</p>
        </Row>
        <Row className="CardsContainer">
          <ProjectPlans />
        </Row>
      </Container>
      <Specification />
    </>
  );
};

export default Aoutalamvillas;
