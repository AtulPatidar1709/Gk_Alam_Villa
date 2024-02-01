import React from "react";
import { useState } from "react";
import whySection from "../../assets/img/whySection.png";
import "./Accordian.css"

const data = [
  {
    title: "1 Superior Construction",
    content:
      "With over three decades of experience, GK Builders and Developers is amongst the most trusted real estate developers in Hyderabad. Our brand is synonymous with superior quality of construction materials, best-in-industry practices, and compliance with safety protocol.",
  },
  {
    title: "2 Value For Money",
    content:
      "We offer our customers the best value for their money and investment. While no compromises are made in the quality of construction, every effort is made to optimise costs and pass on the benefit to the customer.",
  },
  {
    title: "3 Transparency",
    content:
      "All our operations and communication are transparent, and we encourage you to visit our sites at any time to get a look at our practices We are committed to following all RERA guidelines and complying with all local municipal laws while developing our projects.",
  },
  {
    title: "4 Track Record",
    content:
      "Our 4000+ customers are truly our brand ambassadors and endorse our brand’s commitment and professionalism We have created an impeccable track and reputation and we are committed to taking this legacy forward.",
  },
];

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected((prevSelected) => (prevSelected === i ? null : i));
  };

  return (
    <div className="Wrapper">
      <div className="accordian">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <a>{item.title}</a>
              <span>{selected === i ? "-" : "+"}</span>
            </div>
            <div className={`content ${selected === i ? "show" : ""}`}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="img-fit">
        <img src={whySection} alt="" className="img-about" />
      </div>
    </div>
  );
};

export default Accordian;
