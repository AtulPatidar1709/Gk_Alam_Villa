import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Col,
  Row,
} from "reactstrap";
import "./Card.css";
import CardBg from "../../assets/img/bg-card-logo.png";

const reviews = [
  {
    id: 1,
    name: "@darryncodes",
    job: "Front-end developer",
    img: "https://www.darryncodes.co.uk/img/darryncodes-profile.jpg",
    text: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iste, voluptate quam ipsum aliquam, corporis dicta distinctio, ea omnis quo quae non nulla facere rerum aperiam."',
  },
  {
    id: 2,
    name: "@annajohnson",
    job: "UI Designer",
    img: "https://randomuser.me/api/portraits/women/90.jpg",
    text: '"Morbi a facilisis quam. In nec lorem sollicitudin, volutpat ex sit amet, sodales augue. Duis pretium sagittis odio, nec porttitor purus vulputate id. Proin urna metus, luctus sit amet."',
  },
  {
    id: 3,
    name: "@peterjones",
    job: "Intern",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    text: '"Donec hendrerit semper eros sed pellentesque. Nunc varius condimentum odio vitae posuere. Nulla sollicitudin sem mauris, eget porttitor justo pulvinar et. Maecenas maximus."',
  },
  {
    id: 4,
    name: "@billanderson",
    job: "UX Designer",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
    text: '"Curabitur turpis felis, pellentesque feugiat tristique sit amet, vestibulum eu turpis. Sed commodo nulla quis metus consequat imperdiet. Aenean at elit dui. Donec sagittis ultricies."',
  },
];

const Cards = (args) => {
  return (
    <>
      {/* <div className="bg-card">
        <img src={CardBg} alt="" className="img-1" />
      </div> */}
      <Container className="card-container" md={"8"} lg={"6"}>
        <Row className="card-slide ">
          <Col className="bg-card-customers-img"  md={"4"} lg={"6"}>
            <img src={CardBg} alt="" className="bg-img-card"/>
          </Col>
          <Col md={"6"} lg={"6"}>
            <h3>Amit Kumar</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, aspernatur, delectus natus officiis illum suscipit in
              voluptatem sed molestiae est quod placeat ad cum reprehenderit
              omnis.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
