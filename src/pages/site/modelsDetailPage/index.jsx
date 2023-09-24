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
        `https://armariumbackend-production.up.railway.app/decor/decorByName/${id}`
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
        <meta property="og:image" content="/favicon.png" />
        <meta
          name="description"
          content="Armarium | Hər Zaman Sizinlə. armarium"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, "
        ></meta>
      </Helmet>
      <section id="detailPage">
        <div className="coverImage">
          <img
            src={`https://armariumbackend-production.up.railway.app/images/${decorData[0]?.coverImage}`}
            alt="coverImage"
          />
        </div>

        <div className="aboutText container">
          <h5>{decorData[0]?.name}</h5>
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
                <Image
                  key={i}
                  src={`https://armariumbackend-production.up.railway.app/images/${e}`}
                />
              );
            })}
          </Image.PreviewGroup>
        </div>
      </section>
    </main>
  );
};

export default ModelsDetailPage;
