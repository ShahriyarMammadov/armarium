import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import backImage from "../../../assets/backgroundImages/xeberler.png";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingComponent from "../../../components/loading";

const NewsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNewsData = async () => {
    try {
      let data = await axios.get(`http://localhost:3000/news/allNews`);
      setData(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div id="newsPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Xəbərlər</title>
      </Helmet>
      <div className="backImage">
        <img src={backImage} alt="Armarium" />
      </div>
      <div className="newsPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              Home <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>Xəbərlər</span>
          </span>
        </div>

        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="cards">
            {data.length == 0 ? (
              <h3>Xəbər Yoxdur.</h3>
            ) : (
              data?.map((e, i) => {
                return (
                  <div className="card" key={i}>
                    <div className="image">
                      <Link to={`/xeberler/${e?._id}`}>
                        <img
                          src={`http://localhost:3000/images/${e?.coverImage}`}
                          alt={`${e?.name}`}
                        />
                      </Link>
                    </div>
                    <div className="text">
                      <div className="headerText">
                        <h5>{e?.name}</h5>
                      </div>
                      <div className="date">
                        <i className="fa-regular fa-calendar-days"></i>{" "}
                        {e?.date?.slice(0, 10)}
                      </div>
                      <hr />

                      <div className="detailTextSlice">
                        <p>{e?.cardDescription}</p>
                      </div>

                      <div className="nav">
                        <Link to={`/xeberler/${e?._id}`}>
                          DAHA ƏTRAFLI{" "}
                          <i className="fa-solid fa-caret-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
