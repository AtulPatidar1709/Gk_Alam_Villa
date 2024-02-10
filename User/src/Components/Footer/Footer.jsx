import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import FooterBack from "../../assets/img/footerBack.png";
import FooterInner from "../../assets/img/footerinner.png";
import twitter from "../../assets/img/LinksSvg/twitter.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-back">
      <Container className="footer">
        <Row className="wrapper-main">
          <Row className="" md={"12"} sm={"12"} lg={"12"}>
            <Col md={"4"} sm={"10"} lg={"2"} className="item-col">
              <img src={FooterInner} alt="" />
            </Col>
            <Col md={"6"} sm={"10"} lg={"4"} className="item-col">
              <Row>
                <h3>ONGOING PROJECTS</h3>
              </Row>
              <Row>
                <Col md={"6"} sm={"6"} lg={"6"}>
                  <ul>Casa Grande</ul>
                  <ul>Zenith</ul>
                  <ul>Park east and Ram’s Arcade</ul>
                  <ul>Surya Arcade</ul>
                </Col>
                <Col md={"6"} sm={"6"} lg={"6"}>
                  <ul>Triad</ul>
                  <ul>Festoon</ul>
                  <ul>Pearl Enclave</ul>
                </Col>
              </Row>
            </Col>
            <Col md={"6"} sm={"10"} lg={"3"} className="item-col">
              <Row className="item-col">
                <h3 className="item-col">Get in Touch</h3>
              </Row>
              <Row>
                <p className="item-col">
                  #35/8, Aastha Gk Colony, Sainikpuri, Secunderabad,
                  Telengana-500094.
                </p>
              </Row>
              <Row className="item-col">
                <li>Salesteam@gkdevelopers.in</li>
                <li>+91 81858 68788</li>
                <li>www.gkdevelopers.in</li>
                <li>Privacy Policy</li>
              </Row>
            </Col>
            <Col md={"6"} sm={"10"} lg={"3"} className="item-col">
              <Row>
                <h3>Join Our Newsletter</h3>
                <p>Get the latest project updates</p>
              </Row>
              <Row>
                <input placeholder="Your E-mail Address"></input>
                <Button>Submit</Button>
              </Row>
            </Col>
          </Row>
          <Row>
            <link rel="stylesheet" href={twitter} />
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
