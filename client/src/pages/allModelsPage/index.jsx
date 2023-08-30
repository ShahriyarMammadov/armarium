import React, { useState } from "react";
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

const AllModelsPage = () => {
  const [kitchenModels, setKitchenModels] = useState([]);

  const onChange = (key) => {
    console.log(key);
  };

  const getDecorData = async () => {
    try {
      const data = await axios.get("http://localhost:3000/decor/getAllDecor");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="allModels">
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
                  <Link to={"/model/salsm"}>
                    <img src={image2} alt="Image 2" />
                    <div className="text hidden">
                      <p className="modelName">Esso</p>
                      <p className="description hidden">Maskulen ve Derin</p>
                    </div>
                  </Link>
                  <Link to={"/model/salsm"}>
                    <img src={image3} alt="Image 2" />
                    <div className="text">
                      <p className="modelName">Petra</p>
                      <p className="description hidden">Maskulen ve Derin</p>
                    </div>
                  </Link>
                  <Link to={"/model/salsm"}>
                    <img src={image4} alt="Image 2" />
                    <div className="text hidden">
                      <p className="modelName">Sera</p>
                      <p className="description hidden">Maskulen ve Derin</p>
                    </div>
                  </Link>
                  <Link to={"/model/salsm"}>
                    <img src={image5} alt="Image 2" />
                    <div className="text hidden">
                      <p className="modelName">Otto</p>
                      <p className="description hidden">Maskulen ve Derin</p>
                    </div>
                  </Link>
                  <Link to={"/model/salsm"}>
                    <img src={image6} alt="Image 2" />
                    <div className="text">
                      <p className="modelName">Lea</p>
                      <p className="description hidden">Maskulen ve Derin</p>
                    </div>
                  </Link>
                  <Link to={"/model/salsm"}>
                    <img src={image1} alt="Image 2" />
                    <div className="text">
                      <p className="modelName">Luna</p>
                      <p className="description hidden">Maskulen ve Derin</p>
                    </div>
                  </Link>
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
            action="http://localhost:3000/decor/addDecor"
            method="POST"
            enctype="multipart/form-data"
          >
            <input type="text" name="name" placeholder="Name" />
            <input type="text" name="description" placeholder="Description" />
            <input type="file" name="coverImage" accept="image/*" />
            <input type="file" name="images" accept="image/*" multiple />
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
