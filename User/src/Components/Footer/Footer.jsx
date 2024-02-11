import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import FooterBack from "../../assets/img/footerBack.png";
import FooterInner from "../../assets/img/footerinner.png";
import twitter from "../../assets/img/LinksSvg/twitter.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-back">
      <Container>
        <Row className="pt-5 rowsection">
          <Col md={"5"} sm={"9"} xs={"10"} lg={"2"}>
            <img src={FooterInner} alt="footer-inner" />
          </Col>
          <Col md={"5"} sm={"10"} xs={"10"} lg={"3"}>
            <h3>ONGOING PROJECTS</h3>
            <div className="ongoingList">
              <ul>
                <li>Casa Grande</li>
                <li>Zenith</li>
                <li>Park east and Ram’s Arcade</li>
                <li>Surya Arcade</li>
              </ul>
              <ul>
                <li>Triad</li>
                <li>Festoon</li>
                <li>Pearl Enclave</li>
              </ul>
            </div>
          </Col>
          <Col md={"5"} sm={"10"} xs={"10"} lg={"3"}>
            <h3>Get in Touch</h3>
            <div className="paragraph">
              <p>
                #35/8, Aastha Gk Colony, Sainikpuri, Secunderabad,
                Telengana-500094.
              </p>

              <div className="socialLinks">
                <p>Salesteam@gkdevelopers.in</p>
                <p>+91 81858 68788</p>
                <p>www.gkdevelopers.in</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </Col>
          <Col md={"6"} sm={"10"} xs={"10"} lg={"4"}>
          <h3>Join Our Newsletter </h3>
          <div>
            <p>Get the latest project updates</p>
            <br />
            <div className="emailArea">
              <input type="text" placeholder="Your Email-Address"  className="inputArea"/>
              <button className="btnSubmit">Submit</button>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
