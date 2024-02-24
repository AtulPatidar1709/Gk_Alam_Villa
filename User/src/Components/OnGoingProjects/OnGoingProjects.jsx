import React from "react";
import "./OnGoingProjects.css";
import { Container, Row, Col } from "reactstrap";
import image1 from "../../assets/img/Ongoing/1.png";
import image2 from "../../assets/img/Ongoing/2.png";
import image3 from "../../assets/img/Ongoing/3.jpg";
import image4 from "../../assets/img/Ongoing/4.png";
import image5 from "../../assets/img/Ongoing/5.png";
import image6 from "../../assets/img/Ongoing/6.png";
import image7 from "../../assets/img/Ongoing/7.jpg";

const data = [
  {
    key : 1,
    img: image1,
    btag: " YAPRAL, SECUNDERABAD | 3 & 4 BHK Classical Apartments",
    title: "GK's Casa grande",
    content:
      "With over three decades of experience, GK Builders and Developers is amongst the most trusted real estate developers in Hyderabad. Our brand is synonymous with superior quality of construction materials, best-in-industry practices, and compliance with safety protocol.",
  },
  {
    key : 2,
    img: image2,
    btag: "YAPRAL, SECUNDERABAD | 2 BHK & 3 BHK",
    title: "GK's zenith",
    content:
      "GK’s Zenith offers you step foot through the elegant gateway, feast your senses on a range of activity and leisure zones.",
  },
  {
    key : 3,
    img: image3,
    title: "GK'S TRIAD",
    btag: "KAPRA, SECUNDERABAD 3 BHK APARTMENTS",
    content:
      "We have carefully crafted Triad apartments, these standalone apartments with 3 BHK are a pure synonym of luxury.",
  },
  {
    key : 4,
    img: image4,
    title: "GK'S FESTOON",
    btag: "AMMUGUDA, SECUNDERABAD | 2 BHK & 3 BHK",
    content:
      "Located in the buzzing location of Ammuguda, this unique project comprising standalone apartments is no less than an architectural marvel.",
  },
  {
    key : 5,
    img: image5,
    title: "GK'S PEARL ENCLAVE",
    btag: "YAPRAL, SECUNDERABAD | 4 BHK & 5 BHK",
    content:
      "GK's Pearl Enclave believes in offering the perfect mix of comfort, leisure and quality in its offerings.",
  },
  {
    key : 6,
    img: image6,
    title: "GK'S SURYA ARCADE",
    btag: "YAPRAL, SECUNDERABAD | 3 BHK",
    content:
      "Over a period of three and half decades GK BUILDERS AND DEVELOPERS has carved a distinct niche for itself through several projects spread over mainly in Sainikpuri zone of Secunderabad.",
  },
  {
    key : 7,
    img: image7,
    title: "GK'S PARK EAST END AND RAM'S ARCADE",
    btag: "KAPRA, SECUNDERABAD 3 BHK APARTMENTS",
    content:
      "Ram's Arcade is meticulously built 3 BHK over a huge area, with each flat size (2269 - 2297 sft) respectively.",
  },
];

const OnGoingProjects = () => {
  
  return (
    <>
      <div>
        <div className="ongoingBg">
          <Container>
            <h2 className="headlineBg">Ongoing Projects</h2>
          </Container>
        </div>
        <Container>
          <Row className="g-4 pt-5 pb-5">
            {data.map((item, index) => (
              <Col md={"6"} key={index}>
                <a href="">
                  <div
                    className="cardImg"
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    <div className="card-container">
                      <div className="box">
                        <h2 className={data.key} id="heading" >{item.title}</h2>
                        <b>{item.btag}</b>
                        <p className="cardP">{item.content}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OnGoingProjects;
