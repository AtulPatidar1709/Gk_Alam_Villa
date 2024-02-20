import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
// Import Row and Col from reactstrap
import "./Specification.css";
import doorwindow from "../../assets/img/Specifications/doorwindow.png";
import electricity from "../../assets/img/Specifications/electricity.png";
import flooring from "../../assets/img/Specifications/flooring.png";
import kitchen from "../../assets/img/Specifications/kitchen.png";
import liftgenetator from "../../assets/img/Specifications/liftgenetator.png";
import painting from "../../assets/img/Specifications/painting.png";
import plastering from "../../assets/img/Specifications/plastering.png";
import plumbingSanitory from "../../assets/img/Specifications/plumbingSanitory.png";
import railing from "../../assets/img/Specifications/railing.png";
import structure from "../../assets/img/Specifications/structure.png";
import telephone from "../../assets/img/Specifications/telephone.png";
import toilet from "../../assets/img/Specifications/toilet.png";

const Data = [
  {
    index: 1,
    img: liftgenetator,
    name: "LIFT GENERATOR",
    desc: "Provision for Hydraulic LIFT. D G set, backup for common areas.",
  },
  {
    index: 2,
    img: plumbingSanitory,
    name: "PLUMBING SANITORY",
    desc: "Pneumatic pressure pumps, ISI-marked PVC pipes, sewage treatment plant, rain-water disposal.",
  },
  {
    index: 3,
    img: electricity,
    name: "ELECTRICAL",
    desc: "Concealed copper wiring, modular switches, power outlets multiple plug points.",
  },
  {
    index: 4,
    img: telephone,
    name: "TELEPHONE COMMUNICATION",
    desc: "Intercom facility, provision for cable connection.",
  },
  {
    index: 5,
    img: doorwindow,
    name: "DOOR WINDOWS",
    desc: `<b>MAIN DOOR</b> : Teak Wood I Engineered Wood and Flush Doors with Teak Veneer Shutters aesthetically designed and finished with Polish, fixed with hardware of reputed make. <br> <b>INTERNAL DOOR</b> : All internal doors with Engineered Wood and Flush Doors with Teak Veneer Shutters aesthetically designed and finished with Polish, fixed with hardware of reputed make <br> <b>FRENCH WINDOWS</b> : Three track opening for balconies and open terrace. UPVC Window frames, Shutters with Glass Panels and Mosquito Mesh of 3.0 Track with Standard Hardware.`,
  },
  {
    index: 6,
    img: flooring,
    name: "FLOORING",
    desc: "<b>INTERNAL :</b> 800 x 800 size vitrified tiles of reputed brand in all rooms.<br> <b>BALCONIES:</b> Anti skid Wood Textured tiles.<br> <b>OPEN TERRACE :</b> Anti skid Wood Textured tiles. <br><b>UTILITY/ WASH :</b> Rustic Ceramic tiles for Floor and Glazed Ceramic Tiles of reputed brand upto 3' for Walls.<br><b> STAIRCASE:</b> Vitrified Tiles/ NATURAL<br> <b>STONE PARKING :</b> Designer Tiles/ Natural Stone/ Equivalent",
  },
  {
    index: 7,
    img: structure,
    name: "STRCTURE",
    desc: "RCC Structure with Quality Steel and M25 Grade Concrete. Brick Masonry with Good Quality Red Bricks, Outer walls 9  and Inner walls 4 Thick.",
  },
  {
    index: 8,
    img: painting,
    name: "PAINTING",
    desc: "Acrylic Emulsion and Exterior Emulsion.",
  },
  {
    index: 9,
    img: kitchen,
    name: "KITCHEN",
    desc: "Acrylic Emulsion and Exterior Emulsion.",
  },
  {
    index: 10,
    img: plastering,
    name: "PLASTERING",
    desc: "Joint of the R.C.C. structure &amp; brick wall will be covered with mesh before internal wall plastering commences.<br> <b>EXTERNAL:</b> Double coat cement plastering with Sponge finish. <br> <b>INTERNAL:</b> Smooth Cement Plastering with sponge finish.",
  },
  {
    index: 11,
    img: toilet,
    name: "TOILET BATHROOM",
    desc: "Wall hung EWC, wash basin, hot and cold diverter, premium fittings, provision of geysers.",
  },
  {
    index: 12,
    img: railing,
    name: "RAILING",
    desc: "SS AND GLASS RAILING",
  },
];

const Specification = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992, // For tablets and smaller screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="main-specification">
        <div>
          <Col md={12} className="justify-content-center d-flex">
            <h1 className="large-heading">SPECIFICATIONS</h1>
          </Col>
        </div>
      <Container className="position-relative">
        <h1 className="small-headline ">PROJECT SPECIFICATIONS</h1>
        {/* <Slider {...settings}>
          {Data.map((item, id) => (
            <Row className="sliderRow">
              <Col className="SliderContainer">
                <Row>
                  <Col md={"4"}>
                    <img className="img-fluid" src={item.img} alt={item.name} />
                  </Col>
                  <Col md={"8"}>
                    <h5>{item.name}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col md={"12"}>
                    <p>{item.desc}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </Slider> */}
      </Container>
    </div>
  );
};

export default Specification;
