import React from "react";
import "./index.scss";
import ISO9001 from "../../assets/images/iso1.png";
import ISO14001 from "../../assets/images/iso2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div id="footer" className="container">
          <div className="about">
            <div className="headerText">
              <h4>Hakkimizda</h4>
            </div>
            <div className="texts">
              <div className="text">
                <Link to={"/"}>
                  <p>Kurumsal</p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>Iletisim</p>
                </Link>
              </div>
              <div className="text">
                <p>
                  <a href="tel: +994503134473">Telefon: +99450 313 4473</a>
                </p>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>Faks: +99450 313 4473</p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>Email: info@armarium.az</p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>Yetkili Saticilik Bas Vurusu</p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>Cerez Politikasi</p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>Bilgi Toplumu Hizmetleri</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="socialMediaIcon">
            <div>
              <div className="headerText">
                <h4>Bizi Takip Edin</h4>
              </div>
              <div className="text">
                <a href="" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="" target="_blank">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <div className="headerText">
                <h4>Sertifikatlar</h4>
              </div>
              <div className="text">
                <img src={ISO9001} alt="ISO9001" className="first" />
                <img src={ISO14001} alt="ISO14001" />
              </div>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://maps.google.com/maps?q=Azerbaijan%20Technical%20University&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              id="gmap_canvas"
              frameborder="0"
              scrolling="no"
            />
          </div>
        </div>
      </footer>

      <div className="allRight">
        <div className="container">
          <p>© 2023 LINEADECOR, Tüm hakları saklıdır.</p>
          <Link to={"/"}>Site Haritası</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
