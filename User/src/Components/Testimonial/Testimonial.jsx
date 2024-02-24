import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Testimonial.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
const Testimonial = () => {
  return (
    <>
      <div className="bgTestimonial">
        <Container>
          <div>
            <h2 className="heagingTestimonial">Testimonial</h2>
          </div>
        </Container>
      </div>
      <Container className="justify-content-center">
        <Row className="pt-5 pb-5 d-flex justify-content-center">
          <Col  md={"6"}>
            <TestimonialCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Testimonial;
