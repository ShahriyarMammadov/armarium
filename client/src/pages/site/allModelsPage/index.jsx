import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingComponent from "../../../components/loading";
import SkeletonComponent from "../../../components/skeleton";

const AllModelsPage = () => {
  const [decors, setDecors] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllDecors = async () => {
    try {
      const data = await axios.get("http://localhost:3000/decor/allDecor");
      setDecors(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllDecors();
  }, []);

  return (
    <div id="allModels">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Bütün Modellər</title>
      </Helmet>
      <div className="coverImage">
        <div className="backImage"></div>

        <div className="allModels container">
          <div id="KitchenModels">
            {loading ? (
              <SkeletonComponent />
            ) : (
              <div className="imagesCards">
                {decors.length == 0 ? (
                  <h3>Dekor Yoxdur.</h3>
                ) : (
                  decors?.map((e, i) => {
                    return (
                      <Link to={`/model/${e?.name}`} key={i}>
                        <img
                          src={`http://localhost:3000/images/${e?.coverImage}`}
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
                  })
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
