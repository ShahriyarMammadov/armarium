import React from "react";
import "./index.scss";
import Carousel from "../../../components/carousel";
import videoImg from "../../../assets/images/15.jpg";
import backImg from "../../../assets/images/16.png";
import CardComponent from "../../../components/card";
import ModelsComponent from "../../../components/models";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import WhyArmariumPage from "../../../components/whyArmarium";

const HomePage = () => {
  const nav = useNavigate();

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Xəyallarınız Gerçəkləşdirək</title>
      </Helmet>
      <section id="section1" className="imageSlider">
        <Carousel />
      </section>

      <section id="section2" className="about">
        <div className="container section2">
          <div className="left">
            <h6 className="headerText">İnam, Bacarıq və Keyfiyyət İşidir...</h6>
            <p>
              "Armarium.az" - müasir, gənc və şübhəsiz ki, dinamik şəkildə
              inkişaf edən mebel satışı ilə məşğul olan bir şirkətdir. Biz,
              istənilən interyerin ayrılmaz hissəsinə çeviriləcək mebel
              hissələrinin müxtəlif üslubda – klassikadan, modernə qədər satışı
              ilə professional məşğul oluruq. Mebeli evinizdən çıxmadan,
              saytımızdan rahat bir kresloda oturaraq da sifariş edə bilərsiniz.
              Hər gün saytımızı sizin üçün daha yaxşı və rahat hala gətiririk.
              Peşakar konsultantlarımız öz sahələrinin mütəxəssisləridir,
              məhsulla bağlı bütün suallarınızı mütləq cavablandıracaq və Sizə
              ən optimal variantları seçməyinizdə yardımçı olacaqlar.
            </p>
            <button
              onClick={() => {
                nav("/haqqimizda");
              }}
            >
              ƏTRAFLI
            </button>
          </div>
          <div className="right">
            <img src={videoImg} alt="videoImg" className="videoImg" />
            <img src={backImg} alt="backImg" />
          </div>
        </div>
      </section>

      <section id="section3" className="cards">
        <div className="container">
          <CardComponent />
        </div>
      </section>

      <section id="section4" className="whyArmarium">
        <WhyArmariumPage />
      </section>

      <section id="section5" className="models">
        <ModelsComponent />
      </section>
    </main>
  );
};

export default HomePage;
