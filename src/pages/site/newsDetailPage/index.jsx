import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const NewsDetailPage = () => {
  const { id } = useParams();

  const [detailData, setDetailData] = useState([]);

  const getNewsData = async () => {
    try {
      let data = await axios.get(
        `https://armariumbackend-production.up.railway.app/news/newsByName/${id}`
      );
      setDetailData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div id="newsDetail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Xəbərlər</title>
        <meta property="og:image" content="/as.png" />
        <meta
          name="description"
          content="Armarium | Hər Zaman Sizinlə. armarium"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, "
        ></meta>
      </Helmet>
      <div className="backImage">
        <img
          src={`https://armariumbackend-production.up.railway.app/images/${detailData[0]?.coverImage}`}
          alt={`${detailData[0]?.name}`}
        />
      </div>
      <div className="newsDetail container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              ƏSAS SƏHİFƏ <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler"}>XƏBƏRLƏR</Link>
          </span>
        </div>
        <p>
          {detailData[0]?.description.split("<br />").map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailPage;
