import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import LoadingComponent from "../../../components/loading";
import axios from "axios";

const GuaranteePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);
  const [guaranteeText, setGuaranteeText] = useState("");

  const getGuaranteeText = async () => {
    try {
      let { data } = await axios.get(
        `https://armariumbackend-production.up.railway.app/about/getZemanet/651674b81222f3e734ae9f72`
      );
      setGuaranteeText(data?.data?.about);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getGuaranteeText();
  }, []);

  const { t } = useTranslation();

  return (
    <div id="guaranteePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Zəmanət</title>
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
      <div className="backImage"></div>
      <div className="container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/haqqimizda"}>
              {t("HAQQIMIZDA")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>

            <span>{t("ZƏMANƏT")}</span>
          </span>
        </div>
        <div className="guarantee">
          <h3>{t("ARMARİUM ZƏMANƏTİ")}</h3>
        </div>
        <div className="guaranteeText">
          {loading ? (
            <LoadingComponent />
          ) : (
            <div className="aboutText">
              {guaranteeText?.split("<br />").map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuaranteePage;
