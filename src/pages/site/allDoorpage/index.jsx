import React, { useEffect, useState } from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
import SkeletonComponent from "../../../components/skeleton";
import axios from "axios";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AllDoorPage = () => {
  const [doors, setDoors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sliceCount, setSliceCount] = useState(12);

  const { t } = useTranslation();

  const getAllDoors = async () => {
    try {
      const { data } = await axios.get(
        "https://armariumbackend-production.up.railway.app/door/allDoors"
      );
      setDoors(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllDoors();
  }, []);

  return (
    <div id="allDoorPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Qapılar</title>
        <meta property="og:image" content="/as.png" />
        <meta
          name="description"
          content="Armarium | Hər Zaman Sizinlə. armarium"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, "
        />
      </Helmet>
      <div className="coverImage">
        <div className="backImage"></div>

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
                  <h3>Qapı Yoxdur.</h3>
                ) : (
                  <>
                    <div className="headerText">
                      <h1>Bütün Qapılarımız</h1>
                    </div>
                    <div className="grid-container container">
                      {doors?.slice(0, sliceCount).map((e, i) => {
                        return (
                          <div className="grid-content" key={i}>
                            <Image
                              src={`https://armariumbackend-production.up.railway.app/images/${e?.coverImage}`}
                            />
                            <p>{e?.id}</p>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => {
                        setSliceCount(sliceCount + 12);
                      }}
                    >
                      {t("DAHA ÇOX")}
                    </button>
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
