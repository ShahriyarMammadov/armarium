import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import backImage from "../../assets/images/newsBackImage.jpg";
import newsCard1 from "../../assets/images/newsCard1.jpg";

const NewsPage = () => {
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

          <div className="card">
            <div className="image">
              <Link to={"/xeberler/super_yay_endirimi"}>
                <img src={newsCard1} alt="Armarium" />
              </Link>
            </div>
            <div className="text">
              <div className="headerText">
                <h5>Armarium-dan Super Təkliflər!</h5>
              </div>
              <div className="date">
                <i className="fa-regular fa-calendar-days"></i> 2023-05-20
              </div>
              <hr />

              <div className="detailTextSlice">
                <p>Armarium-dan sizi sevindirəcək xəbərlər. . . .</p>
              </div>

              <div className="nav">
                <Link to={"/xeberler/super_yay_endirimi"}>
                  DAHA ƏTRAFLI <i className="fa-solid fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <Link to={"/xeberler"}>
                <img src={newsCard1} alt="Armarium" />
              </Link>
            </div>
            <div className="text">
              <div className="headerText">
                <h5>Armarium-dan Super Təkliflər!</h5>
              </div>
              <div className="date">
                <i className="fa-regular fa-calendar-days"></i> 2023-05-20
              </div>
              <hr />

              <div className="detailTextSlice">
                <p>Armarium-dan sizi sevindirəcək xəbərlər. . . .</p>
              </div>

              <div className="nav">
                <Link to={"/"}>
                  DAHA ƏTRAFLI <i className="fa-solid fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <Link to={"/xeberler"}>
                <img src={newsCard1} alt="Armarium" />
              </Link>
            </div>
            <div className="text">
              <div className="headerText">
                <h5>Armarium-dan Super Təkliflər!</h5>
              </div>
              <div className="date">
                <i className="fa-regular fa-calendar-days"></i> 2023-05-20
              </div>
              <hr />

              <div className="detailTextSlice">
                <p>Armarium-dan sizi sevindirəcək xəbərlər. . . .</p>
              </div>

              <div className="nav">
                <Link to={"/"}>
                  DAHA ƏTRAFLI <i className="fa-solid fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <Link to={"/xeberler"}>
                <img src={newsCard1} alt="Armarium" />
              </Link>
            </div>
            <div className="text">
              <div className="headerText">
                <h5>Armarium-dan Super Təkliflər!</h5>
              </div>
              <div className="date">
                <i className="fa-regular fa-calendar-days"></i> 2023-05-20
              </div>
              <hr />

              <div className="detailTextSlice">
                <p>Armarium-dan sizi sevindirəcək xəbərlər. . . .</p>
              </div>

              <div className="nav">
                <Link to={"/"}>
                  DAHA ƏTRAFLI <i className="fa-solid fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <Link to={"/xeberler"}>
                <img src={newsCard1} alt="Armarium" />
              </Link>
            </div>
            <div className="text">
              <div className="headerText">
                <h5>Armarium-dan Super Təkliflər!</h5>
              </div>
              <div className="date">
                <i className="fa-regular fa-calendar-days"></i> 2023-05-20
              </div>
              <hr />

              <div className="detailTextSlice">
                <p>Armarium-dan sizi sevindirəcək xəbərlər. . . .</p>
              </div>

              <div className="nav">
                <Link to={"/"}>
                  DAHA ƏTRAFLI <i className="fa-solid fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <Link to={"/xeberler"}>
                <img src={newsCard1} alt="Armarium" />
              </Link>
            </div>
            <div className="text">
              <div className="headerText">
                <h5>Armarium-dan Super Təkliflər!</h5>
              </div>
              <div className="date">
                <i className="fa-regular fa-calendar-days"></i> 2023-05-20
              </div>
              <hr />

              <div className="detailTextSlice">
                <p>Armarium-dan sizi sevindirəcək xəbərlər. . . .</p>
              </div>

              <div className="nav">
                <Link to={"/"}>
                  DAHA ƏTRAFLI <i className="fa-solid fa-caret-right"></i>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsPage;
