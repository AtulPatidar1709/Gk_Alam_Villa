import React, { useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import cardImage1 from "../../assets/img/CardImg/amit.jpg";
import cardImage2 from "../../assets/img/CardImg/manasa.jpg";
import cardImage3 from "../../assets/img/CardImg/prasad.jpg";
import "./Card.css";

const reviews = [
  {
    id: 1,
    name: "Prasad G",
    job: " - Senior General Manager",
    company: "FHPL(Apollo Group)",
    img: cardImage1,
    text: "  In sum, our experience with GK Builders and Developers was more than satisfactory. The team met deadlines, was easy to work with, helpful in making difficult decisions, respectful of our unique wishes, showed excellent attention to detail and was kind and welcoming to customers. ",
  },
  {
    id: 2,
    name: "Amit Kumar",
    job: "- Project Manager",
    company: "Crowd",
    img: cardImage2,
    text: "   For us, buying a new home was not just about investing in a property but it was a part of building our dreams. We had so many plans and ideas for our first home together. We felt that GK Builders and Developers is the right choice since the brand has a very good reputation.  ",
  },
  {
    id: 3,
    name: " Manasa Atmakuru  ",
    job: " -  Project Lead",
    company: "Tech Mahindra",
    img: cardImage3,
    text: " GK Builders and Developers helped and supported us throughout the planning and buying process and have been so very professional and truly wonderful. I have had to make so many decisions and they have been with me all the way. ",
  },
];

const Cards = (args) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="bgtestimonials">
        <Container className="cardn">
          <Row>
            <Col md={"8"} className="m-auto">
              <Swiper
                rewind={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                {reviews.map((item, index) => (
                  <SwiperSlide>
                    <Row
                      key={index}
                      className="card-slide d-flex align-items-center justify-content-center"
                    >
                      <Col
                        className="bg-card-customers-img "
                        md={"3"}
                        sm={"12"}
                      >
                        <img
                          src={item.img}
                          alt="Card-images"
                          className="image-fluid bg-img-card"
                        />
                      </Col>
                      <Col md={"9"}>
                        <h4>
                          {item.name} <span>{item.job}</span>
                        </h4>
                        <h4>{item.company}</h4>
                        <p>{item.text}</p>
                      </Col>
                    </Row>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cards;
