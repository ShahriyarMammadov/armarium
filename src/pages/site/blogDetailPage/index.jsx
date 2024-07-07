import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Image } from "antd";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const BlogDetailPage = () => {
  const [detailData, setDetailData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const apiLink = "http://api.armarium.az";

  const getBlogByName = async () => {
    try {
      const data = await axios.get(`${apiLink}/blog/blogByName/${id}`);
      setDetailData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const backgroundRef = useRef(null);

  const getBackImage = async () => {
    try {
      let { data } = await axios.get(
        `${apiLink}/backImage/getBackImageByPage/BloqDetail`
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

  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogByName();
    getBackImage();
  }, []);

  return (
    <div id="blogDetail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | {id}</title>
        <meta property="og:image" content="/favicon.png" />
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

        <div
          className="text"
          dangerouslySetInnerHTML={{
            __html: detailData[0]?.description,
          }}
        ></div>
        <Image
          className="blogImage"
          src={`${apiLink}/images/${detailData[0]?.coverImage}`}
          alt={`${detailData[0]?.name}`}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;
