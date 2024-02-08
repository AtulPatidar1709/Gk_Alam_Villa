import React from "react";
import About from "../Components/AboutUs/About";
import Whyus from "../Components/WhyUS/Whyus";
import Footer from "../Components/Footer/Footer";
import Happines from "../Components/Happines/Happines";
import "../App.css"
const Home = () => {
  return (
    <>
      <Happines />
      <About />
      <Whyus />
    </>
  );
};

export default Home;
