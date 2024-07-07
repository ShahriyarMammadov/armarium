import React, { useEffect, useRef } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FurniturePage = () => {
  const ApiLInk = "http://api.armarium.az";

  const { t } = useTranslation();
  const getAllDecors = async () => {
    try {
      const data = await axios.get(
        "http://api.armarium.az/selectedDecor/getSelectedDecors"
      );
      setDecors(data?.data.data);
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
        `${ApiLInk}/backImage/getBackImageByPage/AllModels`
      );
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundImage = `url(${ApiLInk}/images/${data?.image?.coverImage})`;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getBackImage();
    getAllDecors();
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | MEBELLƏR</title>
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
      <div className="backImage" ref={getBackImage}></div>
      <div className="navigation">
        <span>
          <Link to={"/"}>
            {t("ƏSAS SƏHİFƏ ")} <i className="fa-solid fa-caret-right"></i>{" "}
          </Link>
          <span>{t("XƏBƏRLƏR")}</span>
        </span>
      </div>
    </div>
  );
};

export default FurniturePage;
