import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import backImage from "../../assets/images/newsBackImage.jpg";
import axios from "axios";

const NewsPage = () => {
  const [data, setData] = useState([]);

  const getNewsData = async () => {
    try {
      let data = await axios.get(`http://localhost:3000/news/allNews`);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <div id="newsPage">
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

        <div className="cards">
          {data?.map((e, i) => {
            return (
              <div className="card" key={i}>
                <div className="image">
                  <Link to={`/xeberler/${e?.name}`}>
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
                    <Link to={`/xeberler/${e?.name}`}>
                      DAHA ƏTRAFLI <i className="fa-solid fa-caret-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
