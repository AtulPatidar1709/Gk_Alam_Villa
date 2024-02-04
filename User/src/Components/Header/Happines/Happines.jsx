import React from "react";
import background from "../../../assets/img/background.png";
import "./Happines.css";
import About from "../../AboutUs/About";
import Whyus from "../../WhyUS/Whyus";
import { Col, Container, Row } from "reactstrap";
const Happines = () => {
  return (
    <>
      <div className="bg-1">
        <img src={background} alt="" className="img-1" />
      </div>
      <Container>
        <Row>
          <Col className="m-auto" md={"8"}>
        
              <div className="card">
                  <h1 className="">
                    Happiness-Inspired <br />
                  Luxury Villas 
                  </h1>
                  <p>
                    Spacious 5 BHK Villas @Tirumalagiri <br />
                    <span>Areas upto 4165 sft | Gated Community</span>
                  </p>
                  <button>BOOK YOUR SITE VISIT</button>
                </div>
           
          </Col>
        </Row>
      </Container>
      
      <About/>
      <Whyus />

    </>
  );
};

export default Happines;
