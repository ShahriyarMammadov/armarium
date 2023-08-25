import React, { useEffect, useState } from "react";
import "./index.scss";

const BackToTopComponent = () => {
  const [showButton, setShowButton] = useState(false);

  const backToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton ? (
        <button
          className="backToTop"
          onClick={() => {
            backToTop();
          }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      ) : null}
    </div>
  );
};

export default BackToTopComponent;
