import React from "react";
import background from "../../../assets/img/background.png";
import "./Happines.css";
import About from "../../AboutUs/About";
import Whyus from "../../WhyUS/Whyus";
const Happines = () => {
  return (
    <>
      <div className="bg-1">
        <img src={background} alt="" className="img-1" />
      </div>
      <div className="card-1">
        <div className="card">
          <h1>
            Happiness-Inspired <br />
            <span> Luxury Villas </span>
          </h1>
          <p>
            Spacious 5 BHK Villas @Tirumalagiri <br />
            <span>Areas upto 4165 sft | Gated Community</span>
          </p>
          <button>BOOK YOUR SITE VISIT</button>
        </div>
      </div>
      <About/>
      <Whyus />
    </>
  );
};

export default Happines;
