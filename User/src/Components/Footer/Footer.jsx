import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import FooterInner from "../../assets/img/footerinner.png";
import twitter from "../../assets/img/LinksSvg/twitter.svg";
import facebook from "../../assets/img/LinksSvg/facebook.svg";
import insta from "../../assets/img/LinksSvg/insta.svg";
import linkedin from "../../assets/img/LinksSvg/linkedin.svg";
import youtube from "../../assets/img/LinksSvg/youtube.svg";
import Mail from "../../assets/img/ContactSvg/Mail.svg";
import Call from "../../assets/img/ContactSvg/Call.Svg";
import Globe from "../../assets/img/ContactSvg/globe.svg";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-back">
      <Container>
        <Row className="pt-5 rowsection">
          <Col className="d-flex align-items-start justify-content-center" md={"3"} sm={"9"} xs={"10"} lg={"3"}>
            <img src={FooterInner} alt="footer-inner" />
          </Col>
          <Col md={"3"} sm={"10"} xs={"10"} lg={"3"}>
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
          <Col md={"3"} sm={"10"} xs={"10"} lg={"3"}>
            <h3>Get in Touch</h3>
            <div className="paragraph">
              <p>
                #35/8, Aastha Gk Colony, Sainikpuri, Secunderabad,
                Telengana-500094.
              </p>

              <div className="socialLinks">
                <p>
                  {" "}
                  <img src={Mail} alt="" />
                  Salesteam@gkdevelopers.in
                </p>
                <p>
                  {" "}
                  <img src={Call} alt="" />
                  +91 81858 68788
                </p>
                <p>
                  {" "}
                  <img src={Globe} alt="" /> www.gkdevelopers.in
                </p>
                <p>
                  {" "}
                  <img src={Globe} alt="" />
                  Privacy Policy
                </p>
              </div>
            </div>
          </Col>
          <Col md={"3"} sm={"10"} xs={"10"} lg={"3"}>
            <h3>Join Our Newsletter </h3>
            <div>
              <p>Get the latest project updates</p>
              <br />
              <div className="emailArea">
                <input
                  type="text"
                  placeholder="Your Email-Address"
                  className="inputArea"
                />
                <button className="btnSubmit">Submit</button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="linkSection">
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={youtube} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
