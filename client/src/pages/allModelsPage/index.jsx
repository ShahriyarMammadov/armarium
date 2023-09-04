import React, { useEffect, useState } from "react";
import "./index.scss";
import models from "../../assets/images/models.jpg";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import image1 from "../../assets/images/144.jpg";
import image2 from "../../assets/images/145.jpg";
import image3 from "../../assets/images/146.jpg";
import image4 from "../../assets/images/147.jpg";
import image5 from "../../assets/images/148.jpg";
import image6 from "../../assets/images/150.jpg";
import { Helmet } from "react-helmet";

const AllModelsPage = () => {
  const [decors, setDecors] = useState([]);

  const onChange = (key) => {
    console.log(key);
  };

  const getAllDecors = async () => {
    try {
      const data = await axios.get("http://localhost:3000/decor/allDecor");
      setDecors(data?.data);
    } catch (error) {
      console.log(error);
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
        <div className="img">
          <img src={models} alt="AllModels" />
        </div>

        <div className="allModels container">
          <Tabs defaultActiveKey="2" onChange={onChange} centered>
            <Tabs.TabPane tab="Mətbəx Mebelləri" key="1">
              <div>
                <h2>Content of Tab Pane 1</h2>
                <p>Some text here...</p>
                <img src={image1} alt="Image 1" />
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Mətbəx Mebelləri" key="2">
              <div id="KitchenModels">
                <h2>Content of Tab Pane 2</h2>
                <p>Some different text here...</p>
                <div className="imagesCards">
                  {decors?.map((e, i) => {
                    return (
                      <Link to={`/model/${e?.name}`}>
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
                  })}
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Aksesuarlar" key="3">
              <div>
                <h2>Content of Tab Pane 2</h2>
                <p>Some different text here...</p>
                <img src={image3} alt="Image 2" />
              </div>
            </Tabs.TabPane>
          </Tabs>
          <form
            action="http://localhost:3000/vacancy/addVacancy"
            method="POST"
            enctype="multipart/form-data"
          >
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="description" placeholder="Description" />
            {/* <input type="text" name="cardDescription" placeholder="Card Description" /> */}
            <input type="file" name="coverImage" accept="image/*" />
            {/* <input type="date" /> */}
            {/* <input type="file" name="images" accept="image/*" multiple /> */}
            <button type="submit">Upload</button>
          </form>
          {/* <img
            src="http://localhost:3000/images/images-1693322611929-100045829.jpeg"
            alt="Resim"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AllModelsPage;
