import React from "react";
import "./index.scss";
import backImage from "../../../assets/backgroundImages/haqqimizda.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div id="aboutPage">
      <div className="backImage">
        <img src={backImage} alt="" />
      </div>
      <div className="aboutPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              HOME <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler"}>
              XƏBƏRLƏR <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler/blog"}>
              BLOG <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>salam</span>
          </span>
        </div>
        <div className="about">
          <h3>HAQQIMIZDA</h3>
        </div>
        <div className="aboutText">
          <p>
            "Ehome.az" - müasir, gənc və şübhəsiz ki, dinamik şəkildə inkişaf
            edən mebel satışı ilə məşğul olan bir şirkətdir. Biz, istənilən
            interyerin ayrılmaz hissəsinə çeviriləcək mebel hissələrinin
            müxtəlif üslubda – klassikadan, modernə qədər satışı ilə
            professional məşğul oluruq. Mebeli evinizdən çıxmadan, saytımızdan
            rahat bir kresloda oturaraq da sifariş edə bilərsiniz. Hər gün
            saytımızı sizin üçün daha yaxşı və rahat hala gətiririk. Peşakar
            konsultantlarımız öz sahələrinin mütəxəssisləridir, məhsulla bağlı
            bütün suallarınızı mütləq cavablandıracaq və Sizə ən optimal
            variantları seçməyinizdə yardımçı olacaqlar.
            <h4>Geniş Seçim</h4>
            Şirkətin kataloqunda bütün mebel çeşidləri təqdim olunmuşdur: yataq
            otağı, qonaq otağı, uşaq, iş otağı, dəhliz, mətbəx, vanna otağı üçün
            mebel, yumşaq mebel, döşəklər və s.
            <ul>
              <li>Müxtəlif rəng tonlarında;</li>
              <li> Müxtəlif üslublarda;</li>
              <li>Müxtəlif qiymət aralıqlarında.</li>
            </ul>
            <h4>Fərdilik</h4>
            <ul>
              <li>
                Modul mebel Sizin istək və tələbatlarınız üçün kompozisiyanı
                tərtib etməyə imkan verir və beləliklə sözün əsl mənasında
                unikal interyer təşkil olunur.
              </li>
              <li>
                Həm bütün ev üçün eyni üslubda, həm də hər otaq üçün fərqli
                üslubda mebel seçmək fürsətiniz var.
              </li>
            </ul>
            <h4>Peşəkar Konsultasiya</h4>
            Hər hansı bir sualınız varsa və ya sadəcə məsləhətləşmək istəsəniz,
            bizim konsultatlarımız:
            <ul>
              <li>Maraqlandığınız mebel modeli haqda bütün məlumatı verəcək</li>
              <li>
                Mebeli seçməyə, kompozisiya yığmağa, hər şeyi ən kiçik detallara
                qədər düşünməyə kömək edəcəklər;
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
