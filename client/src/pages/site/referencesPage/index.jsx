import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
// import backImage from "../../../assets/backgroundImages/referans.png";
import { Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoadingComponent from "../../../components/loading";

const ReferencesPage = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { Text } = Typography;

  const getAllData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3000/reference/allReferences`
      );
      setAllData(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div id="referencesPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Referanslar</title>
      </Helmet>
      <div className="backImage">
        {/* <img src={backImage} alt="backImage" /> */}
      </div>
      <div className="referencesPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              HOME <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>REFERANSLAR</span>
          </span>
        </div>

        <div className="text">
          <h3>LINEADECOR, PROJELERİNİZE DEĞER KATAR.</h3>
          <h4>
            Lineadecor 30 yılı aşkın tecrübesiyle yurt içi ve yurt dışında
            seçkin gayrimenkul projelerinin mutfağında yer almaktadır.
          </h4>
          <p>
            Orta ve Yakın Doğu, Avrupa ve Amerika’da yükselen ayrıcalıklı
            projelerin yanı sıra; Türkiye’de büyük inşaat firmalarının projeleri
            de Lineadecor imzasını taşımaktadır. Mimari proje aşamasında mutfak
            planlamasından tesisata kadar pek çok konuda danışmanlık hizmeti
            veren Lineadecor, dev projelerin tasarım ortağı olarak kusursuz bir
            hizmet sunmaktadır.
          </p>
        </div>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="grid-container container">
            {allData.length == 0 ? (
              <h3>Referans Yoxdur.</h3>
            ) : (
              allData?.map((e, i) => {
                const imageUrls = e?.images.map(
                  (image) => `http://localhost:3000/images/${image}`
                );
                return (
                  <>
                    <div style={{ position: "relative" }}>
                      <Image.PreviewGroup items={imageUrls} key={i}>
                        <Image
                          src={`http://localhost:3000/images/${e?.coverImage}`}
                        />
                      </Image.PreviewGroup>
                      <Text
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          padding: "6px 10px",
                        }}
                      >
                        {e?.name}
                      </Text>
                    </div>
                  </>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferencesPage;
