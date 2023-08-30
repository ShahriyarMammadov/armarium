import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
// import image1 from "../../assets/images/156.jpg";
// import image2 from "../../assets/images/157.jpg";
// import image3 from "../../assets/images/158.jpg";
// import image4 from "../../assets/images/159.jpg";
// import image5 from "../../assets/images/160.jpg";
// import image6 from "../../assets/images/161.jpg";
// import image7 from "../../assets/images/162.jpg";
// import image8 from "../../assets/images/163.jpg";
import { Link, useNavigate } from "react-router-dom";

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
              navigate("/allModels");
            }}
          >
            TÜM MODELLER
          </button>
        </div>

        <div className="images">
          {selectedData?.map((e, i) => {
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
          })}
          {/* <Link to={"/model/name"}>
            <div className="image">
              <img src={image2} alt="" />
              <p className="decorName">Lesa</p>
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image3} alt="" />
              <p className="decorName">Lesa</p>
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image4} alt="" />
              <p className="decorName">Lesa</p>
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image5} alt="" />
              <p className="decorName">Lesa</p>
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image6} alt="" />
              <p className="decorName">Lesa</p>
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image7} alt="" />
              <p className="decorName">Lesa</p>
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image8} alt="" />
              <p className="decorName">Lesa</p>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ModelsComponent;
