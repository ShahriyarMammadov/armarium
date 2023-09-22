import React, { useState, useEffect } from "react";
import "./index.scss";
import alinda from "../../assets/carouselImage/alinda.jpg";
import beigeGold from "../../assets/carouselImage/beigeGold.jpg";
import inova from "../../assets/carouselImage/inova.jpeg";
import lika from "../../assets/carouselImage/lika.jpg";
import marine from "../../assets/carouselImage/marine.jpg";
import tenedos from "../../assets/carouselImage/tenedos.jpg";

const Carousel = () => {
  // const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [alinda, beigeGold, inova, lika, marine, tenedos];

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
    "Alinda",
    "Beige Gold",
    "Inova",
    "Lika",
    "Marine",
    "Tenedos",
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
