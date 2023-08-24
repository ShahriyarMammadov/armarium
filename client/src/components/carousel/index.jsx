import React, { useState, useEffect } from "react";
import "./index.scss";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.png";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";

const images = [image1, image2, image3, image4];

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Carousel;
