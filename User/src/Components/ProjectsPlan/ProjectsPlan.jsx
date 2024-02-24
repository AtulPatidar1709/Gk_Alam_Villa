import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./ProjectsPlan.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
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

const ProjectsPlan = () => {
  return (
    <Container className="projects-plan-container">
      {/* <div className="maps-card"> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <div key={index} className="maps-imgs">
              <img src={item.src} alt={item.altText} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </Container>
  );
};

export default ProjectsPlan;
