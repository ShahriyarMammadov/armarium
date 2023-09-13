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
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const nav = useNavigate();

  const { t } = useTranslation();

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
            <h6 className="headerText">
              {t("İnam, Bacarıq və Keyfiyyət İşidir...")}
            </h6>
            <p>
              {t(
                `Armarium, 1997-ci ildə Türkiyənin Düzcə şəhərində təsis edilmiş bir mebel şirkətidir. Şirkət mətbəx və qapı mebelləri istehsalı və interyer dizaynı sahəsində uzun illər ərzində qətiyyətli bir şəkildə fəaliyyət göstərir. Əsas fəaliyyət sahəsi, yaşayış binaları, otellər, restoranlar, kafelər ofislər və digər müəssisələr üçün qapı və mebel və dekorasiya istehsalıdır. Armarium, bu sahədə klassik və neoklasik dizaynların bacarığını nümayiş etdirərək müştərilərinin estetik tələblərini bütünlüklə qarşılayır. Şirkətin əsas məqsədi keyfiyyətli istehsal, uyğun məhsul təklifi və münasib qiymətlərdir. Bu, Armariumun marketinq siyasətinin ən əsas xüsusiyyətidir.`
              )}
            </p>
            <button
              onClick={() => {
                nav("/haqqimizda");
              }}
            >
              {t("ƏTRAFLI")}
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

      {/* <section id="section4" className="whyArmarium">
        <WhyArmariumPage />
      </section> */}

      <section id="section5" className="models">
        <ModelsComponent />
      </section>
    </main>
  );
};

export default HomePage;
