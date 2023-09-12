import React from "react";
import "./index.scss";
import ISO9001 from "../../../assets/images/iso1.png";
import ISO14001 from "../../../assets/images/iso2.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <div id="footer" className="container">
          <div className="about">
            <div className="headerText">
              <h4>{t("HAQQIMIZDA")}</h4>
            </div>
            <div className="texts">
              <div className="text">
                <Link to={"/haqqimizda"}>
                  <p>{t("Haqqımızda")}</p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/satis_noqteleri"}>
                  <p>{t("Əlaqə")}</p>
                </Link>
              </div>
              <div className="text">
                <p>
                  <a href="tel: +994503134473">
                    {t("Telefon")}: +99450 313 4473
                  </a>
                </p>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>
                    <a href="tel:+994503134473">Faks: +99450 313 4473</a>
                  </p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>
                    <a href="mailto:info@armarium.az">
                      Email: info@armarium.az
                    </a>
                  </p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/haqqimizda/zemanet"}>
                  <p>{t("Zəmanət")}</p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/haqqimizda/musteri_xidmeti"}>
                  <p>{t("Müştəri Xidmətləri")}</p>
                </Link>
              </div>
              <div className="text">
                <Link to={"/haqqimizda/terminler"}>
                  <p>{t("Terminlər")}</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="socialMediaIcon">
            <div>
              <div className="headerText">
                <h4>{t("Bizi İzləyin")}</h4>
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
                <h4>{t("Sertifikatlar")}</h4>
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
          <p>{t("© 2023 ARMARİUM, Bütün hüquqlar Qorunur.")}</p>
          <Link to={"/"}>{t("Sayt Xəritəsi")}</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
