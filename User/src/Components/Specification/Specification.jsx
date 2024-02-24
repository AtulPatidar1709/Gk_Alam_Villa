import React, { useRef, useState } from "react";
// Import Swiper React components
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "reactstrap";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
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
    desc: `MAIN DOOR : Teak Wood I Engineered Wood and Flush Doors with Teak Veneer Shutters aesthetically designed and finished with Polish, fixed with hardware of reputed make. INTERNAL DOOR : All internal doors with Engineered Wood and Flush Doors with Teak Veneer Shutters aesthetically designed and finished with Polish, fixed with hardware of reputed make <br> FRENCH WINDOWS : Three track opening for balconies and open terrace. UPVC Window frames, Shutters with Glass Panels and Mosquito Mesh of 3.0 Track with Standard Hardware.`,
  },
  {
    index: 6,
    img: flooring,
    name: "FLOORING",
    desc: "INTERNAL : 800 x 800 size vitrified tiles of reputed brand in all rooms.<br> BALCONIES: Anti skid Wood Textured tiles.<br> OPEN TERRACE : Anti skid Wood Textured tiles. <br>UTILITY/ WASH : Rustic Ceramic tiles for Floor and Glazed Ceramic Tiles of reputed brand upto 3' for Walls.<br> STAIRCASE: Vitrified Tiles/ NATURAL<br> STONE PARKING : Designer Tiles/ Natural Stone/ Equivalent",
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
    desc: "Joint of the R.C.C. structure &amp; brick wall will be covered with mesh before internal wall plastering commences.<br> EXTERNAL: Double coat cement plastering with Sponge finish. <br> INTERNAL: Smooth Cement Plastering with sponge finish.",
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
  return (
    <div className="main-specification">
      <div>
        <Col md={12} className="justify-content-center d-flex">
          <Fade
            cascade
            direction="up"
            damping={0.5e-1}
            delay={100}
            distance="120px"
          >
            <h1 className="large-heading">SPECIFICATIONS</h1>
          </Fade>
        </Col>
      </div>
      <Container className="position-relative">
        <Fade
          cascade
          direction="up"
          damping={0.5e-1}
          delay={100}
          distance="120px"
        >
          <h1 className="small-headline ">PROJECT SPECIFICATIONS</h1>
        </Fade>
        <Row className="justify-content-between" md={"12"} sm={"12"}>
          <Swiper
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {Data.map((item, id) => (
              <SwiperSlide>
                <Col md={"12"} key={id}>
                  <Row className="innnerCard">
                    <Row className="rowFirst">
                      <Col className="tittleSection" xs={"4"} md={"4"}>
                        <img
                          className="img-fluid"
                          src={item.img}
                          alt={item.name}
                        />
                      </Col>
                      <Col md={"8"} xs={"8"} className="d-flex justify-content-center">
                        <h5 className="fs-18">{item.name}</h5>
                      </Col>
                    </Row>
                    <Row className="d-flex align-align-content-md-start">
                      <Col md={"12"} className="peragraphCard">
                        <p className="peragraph">{item.desc}</p>
                      </Col>
                    </Row>
                  </Row>
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
};

export default Specification;
