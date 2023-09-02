import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SkeletonComponent from "../skeleton";

const ModelsComponent = () => {
  const [selectedData, setSelectedData] = useState([]);

  const navigate = useNavigate();

  const getSelectedModelsData = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3000/selectedDecor/getSelectedDecors"
      );
      setSelectedData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedModelsData();
  }, []);

  return (
    <div id="modelsComponent">
      <div className="container">
        <div className="headerText">
          <div className="text">
            <h3>MODELLER</h3>
            <hr />
          </div>
          <button
            onClick={() => {
              navigate("/mebel/all_models");
            }}
          >
            BÜTÜN MODELLƏR
          </button>
        </div>

        <div className="images">
          {selectedData.length === 0 ? (
            <SkeletonComponent />
          ) : (
            selectedData?.map((e, i) => {
              return (
                <Link to={`/model/${e?.name}`}>
                  <div className="image" key={i}>
                    <img
                      src={`http://localhost:3000/images/${e?.coverImage}`}
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
