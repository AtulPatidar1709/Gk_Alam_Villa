import React from "react";
import background from "../../assets/img/background.png";
import "./Happines.css";
import { Fade } from "react-awesome-reveal";
import "../../App.css";
import { Col, Container, Row } from "reactstrap";
const Happines = () => {
  return (
    <>
      <div className="bg-1">
        <img src={background} alt="" className="img-1" />
      </div>
      <Container className="container_card flex align-items-center flex-wrap ">
        <Row>
          <Col
            className="m-auto align-items-center"
            xs={11}
            sm={10}
            md={10}
            lg={10}
          >
            <div className="heroSectionBox secondtop ">
              <Fade
                cascade
                direction="up"
                damping={0.5e-1}
                delay={100}
                distance="20px"
              >
                <h1 className="hapHeading">
                  Happiness-Inspired <br />
                  <span>Luxury Villas</span>
                </h1>
                <h3 className="">
                  Spacious 5 BHK Villas @Tirumalagiri <br />
                  <span>Areas upto 4165 sft | Gated Community</span>
                </h3>
                <div className="mt-4">
                  <a href="#!" className="borderb ">
                    BOOK YOUR SITE VISIT
                  </a>
                </div>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Happines;
