import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import DropdownComponent from "../../components/dropdown/dropdown.jsx";
import logo from "../../assets/images/logo.png";
import NavBarDropdownComponent from "../../components/dropdown/navbarDropdown";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const threshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos < threshold;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // useEffect(() => {
  //   const headerTop = document.querySelector(".headerTop");

  //   if (!visible) {
  //     headerTop.style.transition =
  //       "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out";
  //     headerTop.style.maxHeight = "0";
  //     headerTop.style.opacity = "0";
  //     headerTop.style.overflow = "hidden";
  //   } else {
  //     headerTop.style.transition =
  //       "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out";
  //     headerTop.style.maxHeight = "100px"; // Header'ın normal yüksekliği
  //     headerTop.style.opacity = "1";
  //     headerTop.style.overflow = "visible";
  //   }
  // }, [visible]);
  return (
    <header>
      <div id="header" className="container">
        <div className={`${visible ? "active" : "inactive"} headerTop`}>
          <div className="left">
            <div className="icon">
              <a href="https://facebook.com">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://facebook.com">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://youtube.com">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="telephoneNumber">
              <a href="tel:+994503134473">
                ƏLAQƏ: <span>+99450 313 4473</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="language">
              <DropdownComponent />
            </div>

            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <div className="headerBottom container">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Armarium" />
            </Link>
          </div>
          <nav>
            <NavBarDropdownComponent />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
