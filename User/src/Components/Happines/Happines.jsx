import React from "react";
import background from "../../assets/img/background.png";
import "./Happines.css";
import "animate.css";
import { Col, Container, Row } from "reactstrap";
const Happines = () => {
  return (
    <>
      <div className="bg-1">
        <img src={background} alt="" className="img-1" />
      </div>
      <Container className="container_card flex align-items-center flex-wrap ">
        <Row>
          <Col className="m-auto card align-items-center" xs={11} sm={10} md={9} lg={9}>
            <div className="heroSectionBox">
              <h1 className="animate__animated animate__backInLeft">
                Happiness-Inspired <br />
                <span>Luxury Villas</span>
              </h1>
              <p className="animate__animated animate__bounceInUp about-heading">
                Spacious 5 BHK Villas @Tirumalagiri <br />
                <span>Areas upto 4165 sft | Gated Community</span>
              </p>
              <button>BOOK YOUR SITE VISIT</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Happines;
