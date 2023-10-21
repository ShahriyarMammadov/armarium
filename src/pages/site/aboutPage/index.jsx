import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import LoadingComponent from "../../../components/loading";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const [aboutText, setAboutText] = useState("");

  const getAboutText = async () => {
    try {
      let { data } = await axios.get(
        `https://armariumbackend-production.up.railway.app/about/getHaqqimizda/6515be22e9d3dcf856ed1311`
      );
      setAboutText(data?.data?.about);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const backgroundRef = useRef(null);

  const getBackImage = async () => {
    try {
      let { data } = await axios.get(
        `https://armariumbackend-production.up.railway.app/backImage/getBackImageByPage/Haqqimizda`
      );
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundImage = `url(https://armariumbackend-production.up.railway.app/images/${data?.image?.coverImage})`;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAboutText();
    getBackImage();
  }, []);

  return (
    <div id="aboutPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Haqqımızda</title>
        <meta property="og:image" content="../../../../public/favicon.png" />
        <meta
          name="description"
          content="Armarium | Xəyallarınızı Armarium ilə süsləyin"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, Xəyallarınızı Armarium ilə süsləyin"
        ></meta>
      </Helmet>
      <div className="backImage" ref={backgroundRef}></div>
      <div className="aboutPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("HAQQIMIZDA")}</span>
          </span>
        </div>
        <div className="about">
          <h3>{t("BİZ KİMİK?")}</h3>
        </div>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div
            className="aboutText"
            dangerouslySetInnerHTML={{ __html: aboutText }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default AboutPage;
