import React from "react";
import "./index.scss";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div id="aboutPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Haqqımızda</title>
        <meta property="og:image" content="/as.png" />
        <meta
          name="description"
          content="Armarium | Hər Zaman Sizinlə. armarium"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, "
        ></meta>
      </Helmet>
      <div className="backImage"></div>
      <div className="aboutPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("HAQQIMIZDA")}</span>
          </span>
        </div>
        <div className="about">
          <h3>{t("HAQQIMIZDA")}</h3>
        </div>
        <div className="aboutText">
          <p>
            {t(
              "Armarium, 1997-ci ildə Türkiyənin Düzcə şəhərində təsis edilmiş bir mebel şirkətidir. Şirkət mətbəx və qapı mebelləri istehsalı interyer dizaynı sahəsində uzun illər ərzində qətiyyətli bir şəkildə fəaliyyət göstərir. Əsas fəaliyyət sahəsi, yaşayış binaları, otellər, restoranlar, kafelər ofislər və digər müəssisələr üçün qapı və mebel və dekorasiya istehsalıdır. Armarium, bu sahədə klassik və neoklasik dizaynların bacarığını nümayiş etdirərək müştərilərinin estetik tələblərini bütünlüklə qarşılayır."
            )}
            <br />{" "}
            {t(
              "Şirkətin əsas məqsədi keyfiyyətli istehsal, uyğun məhsul təklifi və münasib qiymətlərdir. Bu, Armariumun marketinq siyasətinin ən əsas xüsusiyyətidir. Müştərilərinə yüksək keyfiyyətli məhsullar və münasib qiymətlər təklif edərək onların büdcələrinə uyğun məhsullarla onları təmin edir. Şirkətin istehsal etdiyi mebellər funksionallıq və estetika ilə birləşir, bu da onların müştərilərinin tələblərini tamamilə qarşılayır."
            )}
            <br />{" "}
            {t(
              "Şirkət məhsullarını mövcud modaya və müştərinin tələblərinə uyğun dizayn etmək üçün yaradıcı və texnoloji bacarığı nümayiş etdirir. Müştəri məmnuniyyəti Armarium üçün əsas prioritetdir."
            )}
            <br />
            <br />
            {t(
              "Müştərilərinin tələblərini başa düşməyə və onları gerçəkləşdirməyə nail olmaq üçün dinamik və professional bir kollektiv və yüksək texnologiyalı avadanliqlarla işləyən Armarium hər zaman müştərilərinə münasib qiymət təklif edir. Lüks dizaynli mətbəx və qapılar artıq hər kəs üçün əlçatandır. Armarium, beynəlxalq əməkdaşlıq və markalaşma yolunda da böyük addımlar ataraq mətbəx və interyer sahəsində dünya miqyasında tanınmış bir brend halına gəlməyi qarşısına məqsəd qoyan qətiyyətli bir şirkətdir."
            )}
            <br />
            {t(
              "10000 m2 qapalı ərazi və 5000 m2 açıq ərazidə ən son texnologiya və ən müasir avadanlıqlarla aylıq 5000 qapı və 13000m2 laminat və MDF yüzey işleme həcminə sahib olan şirkətimiz, 100-ə yaxın kollektivi ilə başda Azərbaycan bazarı olmaqla region və dünya bazarında da tanınan bir müəssisə olmağı hədəfləmişdir."
            )}
            <br />
            {t(
              "2023-cü ildən etibarən Azərbaycan Türkiyə ortaqlığı ilə Bakı şəhərində fəaliyyətə başlamış, həmçinin “Crystal Mebel & İnteryer” şirkətinin tərkibində işləyən və Armarium brendi adı altında mebel istehsal edən fabrikimiz, 2024-cü ildə ciddi böyümə hədəfləri olan, 2030-cu ilə qədər bölgədə və dünya bazarında adını ən üst sıralara qaldırmağı qarşısına məqsəd qoyan, gün keçdikcə böyüyən köklü bir müəssisədir."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
