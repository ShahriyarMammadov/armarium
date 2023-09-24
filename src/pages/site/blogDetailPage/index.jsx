import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Image } from "antd";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const BlogDetailPage = () => {
  const [detailData, setDetailData] = useState([]);

  const { id } = useParams();

  const getBlogByName = async () => {
    try {
      const data = await axios.get(
        `https://armariumbackend-production.up.railway.app/blog/blogByName/${id}`
      );
      setDetailData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { t } = useTranslation();

  useEffect(() => {
    getBlogByName();
  }, []);

  return (
    <div id="blogDetail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | {id}</title>
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

      <div className="blogDetail container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler"}>
              {t("XƏBƏRLƏR")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler/blog"}>
              {t("BLOQ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{id.toLocaleUpperCase()}</span>
          </span>
        </div>

        <div className="text">
          <p>
            {detailData[0]?.description
              .split("<br />")
              .map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
        </div>
        <Image
          className="blogImage"
          src={`https://armariumbackend-production.up.railway.app/images/${detailData[0]?.coverImage}`}
          alt={`${detailData[0]?.name}`}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;
