import React, { useState } from "react";
import Hamburger from "hamburger-react";
import "./Header.css";
import gklogo from "../../assets/img/gklogo.png";
import jupally from "../../assets/img/jupally.png";
import alamlogo from "../../assets/img/alamlogo.png";
import menu1 from "../../assets/img/menu1.png";
import hamburgeropen from "../../assets/icons/Humberg-open.svg";
import closeHumberg from "../../assets/icons/Close-Humburg.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="wrapper">
        <div className="logos">
          <div className="logo">
            <img src={gklogo} alt="" />
          </div>
          <div className="logo">
            <img src={jupally} height={120} alt="" />
          </div>
        </div>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="/home">HOME</a>
          <a href="/about">ABOUT ALAM VILLAS</a>
          <a href="/service">ONGOING PROJECTS</a>
          <a href="/contact">TESTIMONIAL</a>
          <a href="/ContactUs">Contact Us</a>
        </div>
        <div className="last logo">
          <img src={alamlogo} alt="" />
        </div>
        {/* <img src={hamburgeropen} className="hamburg-section" alt="" />
        <img src={closeHumberg} className="closeHumberg" alt="" /> */}
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
