import React from "react";
import "./index.scss";
import Carousel from "../../components/carousel";
import videoImg from "../../assets/images/15.jpg";
import backImg from "../../assets/images/16.png";
import { Link } from "react-router-dom";
import CardComponent from "../../components/card";

const HomePage = () => {
  return (
    <main>
      <section id="section1" className="imageSlider">
        <Carousel />
      </section>

      <section id="section2" className="about">
        <div className="container section2">
          <div className="left">
            <h6 className="headerText">Başarı, deneyim ve birikim işidir...</h6>
            <p>
              Lineadecor mutfakları, ahşap sektöründe kazanılan deneyim ve
              birikimle 1991 yılında kurulan Dekor Ahşap Ürünleri San. A.Ş.
              tarafından üretilmektedir. Dekor Ahşap Ürünleri, üretim kalitesine
              verdiği önem doğrultusunda, teknolojiye ve insana yönelik
              yatırımlarını sürekli artırarak modüler mutfak sektörünün
              gelişiminde öncü rol oynamıştır. Belirlenen büyük hedeflere
              ulaşabilmek üzere alt yapısına önemli yatırımlar yapan Dekor Ahşap
              Ürünleri, 2006 yılında Gebze tesislerini faaliyete geçirerek tüm
              üretimini üst düzey teknolojilerle yenilemiştir.
            </p>
            <button>DETAYLI BILGI</button>
          </div>
          <div className="right">
            <img src={videoImg} alt="videoImg" className="videoImg" />
            <img src={backImg} alt="backImg" />
          </div>
        </div>
      </section>

      {/* backendden gelecek */}
      <section id="section3" className="cards">
        <div className="container">
          <CardComponent />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
