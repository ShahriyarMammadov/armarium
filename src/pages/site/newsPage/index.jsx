import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingComponent from "../../../components/loading";
import { useTranslation } from "react-i18next";
import { Empty } from "antd";

const NewsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const [dataCount, setDataCount] = useState(6);

  const getNewsData = async () => {
    try {
      let data = await axios.get(
        `""/news/allNews`
      );
      setData(data.data);
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
        `""/backImage/getBackImageByPage/Xeberler`
      );
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundImage = `url(""/images/${data?.image?.coverImage})`;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getNewsData();
    getBackImage();
  }, []);

  return (
    <div id="newsPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Xəbərlər</title>
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
      <div className="newsPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("XƏBƏRLƏR")}</span>
          </span>
        </div>

        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            <div className="cards">
              {data.length == 0 ? (
                <Empty
                  description={false}
                  style={{
                    display: "block",
                    width: "80vw",
                  }}
                />
              ) : (
                data?.slice(0, dataCount)?.map((e, i) => {
                  return (
                    <div className="card" key={i}>
                      <div className="image">
                        <Link to={`/xeberler/${e?._id}`}>
                          <img
                            src={`""/images/${e?.coverImage}`}
                            alt={`${e?.name}`}
                          />
                        </Link>
                      </div>
                      <div className="text">
                        <div className="headerText">
                          <h5>{e?.name}</h5>
                        </div>
                        <div className="date">
                          <i className="fa-regular fa-calendar-days"></i>{" "}
                          {e?.date?.slice(0, 10)}
                        </div>
                        <hr />

                        <div className="detailTextSlice">
                          <p>{e?.cardDescription}</p>
                        </div>

                        <div className="nav">
                          <Link to={`/xeberler/${e?._id}`}>
                            DAHA ƏTRAFLI{" "}
                            <i className="fa-solid fa-caret-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {data?.length > 6 && data?.length > dataCount ? (
              <button
                onClick={() => {
                  setDataCount(dataCount + 6);
                }}
              >
                {t("DAHA ÇOX")}
              </button>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
