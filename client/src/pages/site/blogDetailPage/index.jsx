import React, { useEffect, useState } from "react";
import "./index.scss";
import backImage from "../../../assets/images/1.jpg";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Image } from "antd";
import { Helmet } from "react-helmet";

const BlogDetailPage = () => {
  const [detailData, setDetailData] = useState([]);

  const { id } = useParams();

  const getBlogByName = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3000/blog/blogByName/${id}`
      );
      setDetailData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogByName();
  }, []);

  return (
    <div id="blogDetail">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | {id}</title>
      </Helmet>

      <div className="backImage">
        <img src={backImage} alt="image" />
      </div>

      <div className="blogDetail container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              HOME <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler"}>
              XƏBƏRLƏR <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler/blog"}>
              BLOG <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{id.toLocaleUpperCase()}</span>
          </span>
        </div>

        <div className="text">
          <p>
            {detailData[0]?.description
              .split("<br />")
              .map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </p>
        </div>
        <Image
          className="blogImage"
          src={`http://localhost:3000/images/${detailData[0]?.coverImage}`}
          alt={`${detailData[0]?.name}`}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;
