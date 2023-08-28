import React from "react";
import "./index.scss";
import models from "../../assets/images/models.jpg";
import { Tabs } from "antd";
import image1 from "../../assets/images/144.jpg";
import image2 from "../../assets/images/145.jpg";
import image3 from "../../assets/images/146.jpg";
import image4 from "../../assets/images/147.jpg";
import image5 from "../../assets/images/148.jpg";
import image6 from "../../assets/images/150.jpg";

const AllModelsPage = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div id="allModels">
      <div className="coverImage">
        <div className="img">
          <img src={models} alt="AllModels" />
        </div>

        <div className="allModels container">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default AllModelsPage;
