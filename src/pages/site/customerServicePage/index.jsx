import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import LoadingComponent from "../../../components/loading";
import axios from "axios";

const CustomerServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);
  const [missiyaText, setMissiyaText] = useState("");
  const apiLink = "http://api.armarium.az";
  const getGuaranteeText = async () => {
    try {
      let { data } = await axios.get(
        `${apiLink}/about/getMissiya/6515c18559f571344af26918`
      );
      setMissiyaText(data?.data?.about);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const backgroundRef = useRef(null);

  const getBackImage = async () => {
    try {
      let { data } = await axios.get(
        `${apiLink}/backImage/getBackImageByPage/Missiya`
      );
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundImage = `url(${apiLink}/images/${data?.image?.coverImage})`;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuaranteeText();
    getBackImage();
  }, []);

  const { t } = useTranslation();

  return (
    <div id="customerServicePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Missiya</title>
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
      <div className="container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/haqqimizda"}>
              {t("HAQQIMIZDA")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("MİSSiYA")}</span>
          </span>
        </div>
        <div className="customer">
          <h3>{t("MİSSİYA")}</h3>
        </div>
        <div className="customerText">
          {loading ? (
            <LoadingComponent />
          ) : (
            <div
              className="aboutText"
              dangerouslySetInnerHTML={{ __html: missiyaText }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
