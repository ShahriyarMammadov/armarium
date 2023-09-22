import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SkeletonComponent from "../skeleton";
import { useTranslation } from "react-i18next";

const ModelsComponent = () => {
  const [selectedData, setSelectedData] = useState([]);

  console.log(selectedData);

  const navigate = useNavigate();

  const getSelectedModelsData = async () => {
    try {
      const data = await axios.get(
        "https://armariumbackend-production.up.railway.app/selectedDecor/getSelectedDecors"
      );
      setSelectedData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedModelsData();
  }, []);
  const { t } = useTranslation();

  return (
    <div id="modelsComponent">
      <div className="container">
        <div className="headerText">
          <div className="text">
            <h3>{t("MODELLƏR")}</h3>
            <hr />
          </div>
          <button
            onClick={() => {
              navigate("/mebeller/all_models");
            }}
          >
            {t("BÜTÜN MODELLƏR")}
          </button>
        </div>

        <div className="images">
          {selectedData?.data?.length === 0 ? (
            <SkeletonComponent />
          ) : (
            selectedData?.data?.map((e, i) => {
              return (
                <Link to={`/model/${e?.name}`}>
                  <div className="image" key={i}>
                    <img
                      src={`https://armariumbackend-production.up.railway.app/images/${e?.coverImage}`}
                      alt={`${e?.name}`}
                    />
                    <p className="decorName">{e?.name}</p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelsComponent;
