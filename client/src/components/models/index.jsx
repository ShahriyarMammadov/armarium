import React from "react";
import "./index.scss";
import image1 from "../../assets/images/156.jpg";
import image2 from "../../assets/images/157.jpg";
import image3 from "../../assets/images/158.jpg";
import image4 from "../../assets/images/159.jpg";
import image5 from "../../assets/images/160.jpg";
import image6 from "../../assets/images/161.jpg";
import image7 from "../../assets/images/162.jpg";
import image8 from "../../assets/images/163.jpg";
import { Link } from "react-router-dom";

const ModelsComponent = () => {
  return (
    <div id="modelsComponent">
      <div className="container">
        <div className="headerText">
          <div className="text">
            <h3>MODELLER</h3>
            <hr />
          </div>
          <button>TÜM MODELLER</button>
        </div>

        {/* Backend-den gelecek */}
        <div className="images">
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image1} alt="" />
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image2} alt="" />
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image3} alt="" />
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image4} alt="" />
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image5} alt="" />
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image6} alt="" />
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image7} alt="" />
            </div>
          </Link>
          <Link to={"/model/name"}>
            <div className="image">
              <img src={image8} alt="" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModelsComponent;
