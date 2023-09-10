import React, { useState, useEffect } from "react";
import "./index.scss";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import country from "../../assets/images/country_slide.jpg";
import decor from "../../assets/images/deco.jpg";
import retro from "../../assets/images/retro1-1.jpg";
import vintage from "../../assets/images/vintage.jpg";

const Carousel = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    retro,
    vintage,
    image1,
    image2,
    image3,
    image4,
    decor,
    country,
  ];
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // if (!isHovered) {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      // }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const imageDecorText = [
    "Retro",
    "Vintage",
    "Asena",
    "Ormane",
    "New Model",
    "Galaxy",
    "Decor",
    "Country",
  ];

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="decor-text">{imageDecorText[index]}</div>
        </div>
      ))}
      <button className="carousel-button prev" onClick={prevSlide}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
