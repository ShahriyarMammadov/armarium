import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "./index.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingComponent from '../../../components/loading'

const ModelsDetailPage = () => {
  const [decorData, setDecorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getDecorData = async () => {
    try {
      const data = await axios.get(
        `https://armariumbackend-production.up.railway.app/decor/decorByName/${id}`
      );
      setDecorData(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getDecorData();
  }, []);

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | {id}</title>
        <meta property="og:image" content="../../../../public/favicon.png" />
        <meta
          name="description"
          content="Armarium | Xəyallarınızı Armarium ilə süsləyin"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, Xəyallarınızı Armarium ilə süsləyin"
        ></meta>
      </Helmet>
      {loading ? (
        <LoadingComponent />
      ) : (
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
      )}
    </main>
  );
};

export default ModelsDetailPage;
