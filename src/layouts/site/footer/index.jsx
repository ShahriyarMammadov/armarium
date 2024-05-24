import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Footer = () => {
  const { t } = useTranslation();

  const [sertifikat, setSertifikat] = useState([]);

  const getCertificate = async () => {
    try {
      let { data } = await axios.get(
        `""/about/allCertificate`
      );
      setSertifikat(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCertificate();
  }, []);

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
                  <a href="tel: +994512908127">
                    {t("Telefon")}: +99451 290 8127
                  </a>
                </p>
              </div>
              <div className="text">
                <Link to={"/"}>
                  <p>
                    <a href="tel:+994512908127">Faks: +99451 290 8127</a>
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
                  <p>{t("Missiya")}</p>
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
                <a
                  href="https://www.facebook.com/profile.php?id=100094702263939&mibextid=b06tZ0"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/armariumkitchendoor/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://youtube.com/@ArmariumKitchenDoor?si=j7Qwq0W9UVI8LdtA"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>

            <div>
              <div className="headerText">
                <h4>{t("Sertifikatlar")}</h4>
              </div>
              <div className="text">
                {sertifikat?.slice(0, 2)?.map((e) => {
                  return (
                    <img
                      src={`""/images/${e?.coverImage}`}
                      alt="Sertifikat"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://maps.google.com/maps?q=40.445080,49.778401&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
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
          <a href={"https://shahriyarmammadov.com"} target="_blank">
            {t("Website by Shahriyar")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
