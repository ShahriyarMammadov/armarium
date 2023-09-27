import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import SkeletonComponent from "../../../components/skeleton";
import { Empty } from "antd";
import { useTranslation } from "react-i18next";

const AllModelsPage = () => {
  const [decors, setDecors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [decorSliceCount, setDecorSliceCount] = useState(20);

  const { t } = useTranslation();

  const getAllDecors = async () => {
    try {
      const data = await axios.get(
        "https://armariumbackend-production.up.railway.app/decor/allDecor"
      );
      setDecors(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllDecors();
  }, []);

  return (
    <div id="allModels">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Bütün Modellər</title>
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
      <div className="coverImage">
        <div className="backImage"></div>

        <div className="allModels container">
          <div className="navigation">
            <span>
              <Link to={"/"}>
                {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
              </Link>
              <span>{t("BÜTÜN MODELLƏRİMİZ")}</span>
            </span>
          </div>
          <div id="KitchenModels">
            {loading ? (
              <SkeletonComponent />
            ) : (
              <div className="imagesCards">
                {decors.length == 0 ? (
                  <Empty
                    description={false}
                    style={{
                      display: "block",
                      width: "80vw",
                    }}
                  />
                ) : (
                  <>
                    {decors?.slice(0, decorSliceCount)?.map((e, i) => {
                      return (
                        <Link to={`/model/${e?.name}`} key={i}>
                          <img
                            src={`https://armariumbackend-production.up.railway.app/images/${e?.coverImage}`}
                            alt={`${e?.name}`}
                          />
                          <div className="text hidden">
                            <p className="modelName">{e?.name}</p>
                            <p className="description hidden">
                              {e?.description?.slice(0, 37) + ". . ."}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    {decors?.length > 20 && decors?.length > decorSliceCount ? (
                      <button
                        onClick={() => {
                          setDecorSliceCount(decorSliceCount + 20);
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

export default AllModelsPage;
