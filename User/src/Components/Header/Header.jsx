import React, { useState } from "react";
import "./Header.css";
import gklogo from "../../assets/img/gklogo.png";
import jupally from "../../assets/img/jupally.png";
import alamlogo from "../../assets/img/alamlogo.png";
import { Col, Container, Row } from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-section pt-2 pb-2">
      <Container className="">
         <Row className="align-items-center">
           <Col md={"3"} xs={"4"} className="order_1">
            <div className="site-branding">
              <div className="logofirst">
                <img className="img-fluid" src={gklogo} alt="" />
              </div>
              <div className="logosecond">
                <img className="img-fluid" src={jupally}  alt="" />
              </div>
            </div>
           </Col>
           <Col md={"7"} xs={"1"} className="order_3 wrapper ">
            <div className={`nav-items primarymenu ${isOpen && "open"}`}>
              <a href="/home">HOME</a>
              <a href="/about">ABOUT ALAM VILLAS</a>
              <a href="/service">ONGOING PROJECTS</a>
              <a href="/contact">TESTIMONIAL</a>
              <a href="/ContactUs">Contact Us</a>
            </div>

          

           </Col>
           <Col md={"2"} xs={"7"} className="order_2 position-relative">
           <div className="last logo secondLogo"  >
          <img className="img-fluid" src={alamlogo} alt="" />
         </div>
         {/* <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div> */}


<nav role="navigation">
  <div id="menuToggle">
   
    <input type="checkbox" />
    
    
    <span></span>
    <span></span>
    <span></span>
    
    
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
</nav>

           </Col>
         </Row>
      </Container>
    
    </header>
  );
};

export default Header;
