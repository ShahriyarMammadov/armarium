import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import DropdownComponent from "../../components/dropdown/dropdown.jsx";
import logo from "../../assets/images/logo.png";
import NavBarDropdownComponent from "../../components/dropdown/navbarDropdown";

const Header = () => {
  return (
    <header>
      <div id="header" className="container">
        <div className="headerTop">
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
