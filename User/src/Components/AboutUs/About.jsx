import React from "react";
import { Fade } from "react-awesome-reveal"; // Import the Fade component
import "./About.css";
import "../../App.css";
import { Col, Container, Row } from "reactstrap";
import aboutimg from "../../assets/img/about.png";

const About = () => {
  return (
    <>
      <div>
        <Fade
          cascade
          direction="left"
          damping={0.5e-1}
          delay={100}
          distance="120px"
        >
          <h1 className="large-heading animate__animated animate__backInUp">
            ABOUT US
          </h1>
        </Fade>
      </div>

      <Container className="container-1">
        <Row className="align-items-center">
          <Col md={"5"} className="img-col align-self-start">
            <Fade
              cascade
              direction="left"
              damping={0.5e-1}
              delay={100}
              distance="120px"
            >
              <div className="img-fit">
                <img
                  src={aboutimg}
                  className="img-about animate__animated animate__bounceInRight image-fluid"
                  alt=""
                />
              </div>
            </Fade>
          </Col>
          <Col md={"7"}>
            <h1 className="sow-headline position-relative small-headline">
              ABOUT US
            </h1>
            <Fade
              cascade
              direction="up"
              damping={0.5e-1}
              delay={50}
              distance="20px"
            >
              <h3 className="fs45">Built with the concept of luxury living!</h3>
            </Fade>

            <div className="paragraphs ">
              <Fade
                cascade
                direction="up"
                damping={0.5e-1}
                delay={50}
                distance="20px"
              >
                <p className="pera ">
                  Alam villas are an expression of luxury living and a synonym
                  for the captivating and innovative design of a gated
                  community. Blending the Indian joint family culture and
                  much-loved privacy we have designed these masterpieces at
                  Tirumalagiri, Hyderabad. By embracing these homes, one gets to
                  reimagine the living experience at our elegant 5 BHK triplex
                  villas (Areas range up to 4165 square feet)
                </p>
                <p className="pera">
                  Every corner of this beautiful ensemble reflects opulence.
                </p>
                <p className="pera">
                  With splendour lifestyle being its prime focus, it has a
                  beautiful swimming pool, spacious clubhouse, opulent open
                  areas, symphony gardens and much more added to its crown. Alam
                  villas also add wide 40 ft roads to their name, which makes
                  the driving experience even more plush and exuberant.
                </p>
                <p className="pera">
                  The villa exemplifies the high-end lifestyle. But, along with
                  the propinquity to all the comforts of life, something that
                  sits at the core of all leisurely pursuits, is the existence
                  of a place that you can call home with all your heart; a place
                  that tells a story of grace and perfection.
                </p>
                <p className="pera">
                  Luxury is more than just a fancy way of life; it is beyond
                  monetary well-being, to its core it is the wholesome feeling
                  of happiness and also a satisfying sense of accomplishment; we
                  as a team strive to unlock your path to happiness. We pay
                  undivided attention to details and make sure that you get a
                  surreal experience. We help you live luxuriously with
                  well-connected, spacious, luxurious, well-built homes situated
                  in harmonious neighbourhoods.
                </p>
              </Fade>
            </div>
            <div className="mt-4">
              <a href="#!" className="borderb">
                BOOK YOUR SITE VISIT
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
