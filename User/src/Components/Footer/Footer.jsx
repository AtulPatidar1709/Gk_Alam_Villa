import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import FooterBack from "../../assets/img/footerBack.png";
import FooterInner from "../../assets/img/footerinner.png";
import "./Footer.css";
const Footer = () => {
  return (
    <Container className="footer-back">
      <div className="footer-wrapper">
        <Row>
          <Col>
            <img src={FooterInner} alt="" />
          </Col>
          <Col>
            <Row>
              <h1>ONGOING PROJECTS</h1>
            </Row>
            <Row>
              <li>
                <ul>Casa Grande</ul>
                <ul>Zenith</ul>
                <ul>Park east and Ram’s Arcade</ul>
                <ul>Surya Arcade</ul>
              </li>
              <li>
                <ul>Triad</ul>
                <ul>Festoon</ul>
                <ul>Pearl Enclave</ul>
              </li>
            </Row>
          </Col>
          <Col>
            <Row>
              <h1>Get in Touch</h1>
            </Row>
            <Row>
              <p>
                #35/8, Aastha Gk Colony, Sainikpuri, Secunderabad,
                Telengana-500094.
              </p>
            </Row>
            <Row>
              <ul>
                <li>Salesteam@gkdevelopers.in</li>
                <li>+91 81858 68788</li>
                <li>www.gkdevelopers.in</li>
                <li>Privacy Policy</li>
              </ul>
            </Row>
          </Col>
          <Col>
            <Row>
              <h1>Join Our Newsletter</h1>
            </Row>
            <Row>
              <p>Get the latest project updates</p>
            </Row>
            <Row>
              <input placeholder="Your E-mail Address"></input>
            </Row>
            <Row>
              <Button>Submit</Button>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Footer;
