import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FurniturePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | MEBELLƏR</title>
        <meta property="og:image" content="/favicon.png" />
        <meta
          name="description"
          content="Armarium | Hər Zaman Sizinlə. armarium"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, "
        ></meta>
      </Helmet>
      <div className="backImage"></div>
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
