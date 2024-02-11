import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import "./ProjectsPlan.css"; // Import your CSS file for custom styles
import New1 from "../../assets/img/Plans/New-1.png";
import New2 from "../../assets/img/Plans/New-2.png";
import New3 from "../../assets/img/Plans/New-3.jpg";

const items = [
  {
    src: New1,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: New2,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: New3,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "black" }}
      onClick={onClick}
    />
  );
}

const ProjectsPlan = () => {
  var settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container className="projects-plan-container">
      <div className="maps-card">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="maps-imgs">
              <img src={item.src} alt={item.altText} />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default ProjectsPlan;
