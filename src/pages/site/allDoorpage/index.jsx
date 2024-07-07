import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import SkeletonComponent from "../../../components/skeleton";
import axios from "axios";
import { Empty, Image } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AllDoorPage = () => {
  const [doors, setDoors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliceCount, setSliceCount] = useState(12);

  const { t } = useTranslation();
  const apiLink = "http://api.armarium.az";

  const getAllDoors = async () => {
    try {
      const { data } = await axios.get("http://api.armarium.az/door/allDoors");
      setDoors(data);
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
        `${apiLink}/backImage/getBackImageByPage/allDoors`
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
    window.scrollTo(0, 0);
    getAllDoors();
    getBackImage();
  }, []);

  return (
    <div id="allDoorPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Qapılar</title>
        <meta property="og:image" content="../../../../public/favicon.png" />
        <meta
          name="description"
          content="Armarium | Xəyallarınızı Armarium ilə süsləyin"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, "
        />
      </Helmet>
      <div className="coverImage">
        <div className="backImage" ref={backgroundRef}></div>

        <div className="container">
          <div className="navigation">
            <span>
              <Link to={"/"}>
                {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
              </Link>
              <Link to={"/mebeller"}>
                {t("MEBEL")} <i className="fa-solid fa-caret-right"></i>{" "}
              </Link>
              <span>{t("QAPILAR")}</span>
            </span>
          </div>
          <div id="allDoors">
            {loading ? (
              <SkeletonComponent />
            ) : (
              <div className="imagesCards">
                {doors.length == 0 ? (
                  <Empty
                    description={false}
                    style={{
                      display: "block",
                      width: "80vw",
                    }}
                  />
                ) : (
                  <>
                    <div className="headerText">
                      <h1>Bütün Qapılarımız</h1>
                    </div>
                    <div className="grid-container container">
                      {doors?.slice(0, sliceCount).map((e, i) => {
                        return (
                          <div className="grid-content" key={i}>
                            <Image src={`${apiLink}/images/${e?.coverImage}`} />
                            <p>{e?.id}</p>
                          </div>
                        );
                      })}
                    </div>

                    {doors?.length > 12 && doors?.length > sliceCount ? (
                      <button
                        onClick={() => {
                          setSliceCount(sliceCount + 20);
                        }}
                      >
                        {t("DAHA ÇOX")}
                      </button>
                    ) : null}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoorPage;
