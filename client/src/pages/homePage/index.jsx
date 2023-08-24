import React from "react";
import "./index.scss";
import Carousel from "../../components/carousel";

const HomePage = () => {
  return (
    <main>
      <section id="section1" className="imageSlider ">
        <Carousel />
      </section>
    </main>
  );
};

export default HomePage;
