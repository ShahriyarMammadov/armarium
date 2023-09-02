import React, { useEffect, useState } from "react";
import "./index.scss";
import image1 from "../../assets/images/xeberler1.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const NewsDetailPage = () => {
  const { id } = useParams();

  const [detailData, setDetailData] = useState([]);

  const getNewsData = async () => {
    try {
      let data = await axios.get(`http://localhost:3000/news/newsByName/${id}`);
      setDetailData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div id="newsDetail">
      <div className="backImage">
        <img
          src={`http://localhost:3000/images/${detailData[0]?.coverImage}`}
          alt={`${detailData[0]?.name}`}
        />
      </div>
      <div className="newsDetail container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              Home <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler"}>
              Xəbərlər <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{id}</span>
          </span>
        </div>
        <p>
          {detailData[0]?.description.split("<br />").map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailPage;
