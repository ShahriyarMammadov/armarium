import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import endirim from "../../assets/images/40endirim.png";
import certyoj from "../../assets/images/certyoj.jpg";
import first from "../../assets/images/first.jpg";
import iso from "../../assets/images/iso.png";
import "./index.scss";

const CardComponent = () => {
  const [data, setData] = useState([]);
  const [scrollX, setScrollX] = useState(false);

  useEffect(() => {
    if (data.length > 4) {
      setScrollX(true);
    } else {
      setScrollX(false);
    }
  }, []);

  return (
    <>
      <div id="cards" className={`${scrollX ? "scroll" : ""}`}>
        <div className="card">
          <div className="image">
            <img src={first} alt="first" />
          </div>
          <div className="text">
            <div className="headerText">
              <h3>
                <Link to={"/"}>Dijital Katalog</Link>
              </h3>
            </div>
            <div className="link">
              <Link to={"/"}>Detaylar Icin Tiklayiniz {">"}</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={endirim} alt="first" />
          </div>
          <div className="text">
            <div className="headerText">
              <h3>
                <Link to={"/"}>Dijital Katalog</Link>
              </h3>
            </div>
            <div className="link">
              <Link to={"/"}>Detaylar Icin Tiklayiniz {">"}</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={certyoj} alt="first" />
          </div>
          <div className="text">
            <div className="headerText">
              <h3>
                <Link to={"/"}>Dijital Katalog</Link>
              </h3>
            </div>
            <div className="link">
              <Link to={"/"}>Detaylar Icin Tiklayiniz {">"}</Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={iso} alt="first" />
          </div>
          <div className="text">
            <div className="headerText">
              <h3>
                <Link to={"/"}>Dijital Katalog</Link>
              </h3>
            </div>
            <div className="link">
              <Link to={"/"}>Detaylar Icin Tiklayiniz {">"}</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
