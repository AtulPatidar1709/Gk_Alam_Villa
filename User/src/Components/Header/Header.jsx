import React from "react";
import Hamburger from "hamburger-react";
import "./Header.css";
import gklogo from "../../assets/img/gklogo.png";
import jupally from "../../assets/img/jupally.png";
import alamlogo from "../../assets/img/alamlogo.png";
import menu1 from "../../assets/img/menu1.png";

const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        {/* <div className="menu"> */}
        <div className="logos">
          <div>
            <img src={gklogo} alt="" />
          </div>
          <div>
            <img src={jupally} alt="" className="img-2" />
          </div>
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About Alam Villas</li>
            <li>Ongoing Projects</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="logos-1">
          <img src={alamlogo} alt="" />
        </div>
      </div>
      <div className="icon-1">
        <img src={menu1} alt="" className="icons" />
      </div>
    </div>
    // </div>
  );
};

export default Header;
