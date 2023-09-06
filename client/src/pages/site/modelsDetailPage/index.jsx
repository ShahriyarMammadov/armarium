import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const ModelsDetailPage = () => {
  const [decorData, setDecorData] = useState([]);
  const { id } = useParams();

  const getDecorData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3000/decor/decorByName/${id}`
      );
      console.log(data);
      setDecorData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDecorData();
  }, []);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | {id}</title>
      </Helmet>
      <section id="detailPage">
        <div className="coverImage">
          <img
            src={`http://localhost:3000/images/${decorData[0]?.coverImage}`}
            alt="coverImage"
          />
        </div>

        <div className="aboutText container">
          <h5>{decorData[0]?.name}</h5>
          <div className="headText">
            <p>Maskülen ve derin…</p>
          </div>
          <p>{decorData[0]?.description}</p>
        </div>

        <div className="grid-container container">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            {decorData[0]?.images?.map((e, i) => {
              return (
                <Image key={i} src={`http://localhost:3000/images/${e}`} />
              );
            })}
          </Image.PreviewGroup>
        </div>
      </section>
    </main>
  );
};

export default ModelsDetailPage;
