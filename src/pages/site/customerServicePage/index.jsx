import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const CustomerServicePage = () => {
  const { t } = useTranslation();

  return (
    <div id="customerServicePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Müştəri Xidmətləri</title>
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
      <div className="backImage"></div>
      <div className="container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/haqqimizda"}>
              {t("HAQQIMIZDA")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("MÜŞTƏRİ XİDMƏTLƏRİ")}</span>
          </span>
        </div>
        <div className="customer">
          <h3>{t("MÜŞTƏRİ XİDMƏTLƏRİ")}</h3>
        </div>
        <div className="customerText">
          <p>
            Armarium şirkəti olaraq missiyamız estetika, funksionallıq və
            keyfiyyəti bir araya gətirərək unikal mebel və iç məkan dizaynlarını
            müştərilərimizə təqdim edib onların yaşayış sahələrini və həmçinin
            iş yerlərini gözəlləşdirmək və özəl etməkdir.
            <br />
            <br /> Bizimçün ən vacib dəyərlər: <br />
            <br /> <br />
            1. Müştəri Məmnuniyyəti: Müştəri ehtiyaclarını anlamaq və onları
            qarşılamağa üstünlük vermək.
            <br /> <br /> 2. Keyfiyyət: Yüksək keyfiyyətli materiallar və işçi
            qüvvəsi istifadə edərək davamlı və estetik məhsullar təklif etmək.
            <br /> <br /> 3. Yaradıcılıq və İnnovasiya: Müasir dövrə uyğun,
            yenilikçi dizayn və istehsal prosesləri ilə müştərilərimizə orijinal
            və özəl məhsullar təqdim etmək.
            <br /> <br /> 4. Ətraf Mühitə Dəstək: Ətraf mühitə diqqət göstərib
            xüsusi zərərsiz materialları seçərək sürətləndirilmiş iş tətbiqinə
            bağlı qalmaq.
            <br /> <br /> 5. İş Etikası: Etik davranışlar, şəffaf və dürüstlük
            prinsiplərinə bağlılıq.
            <br /> <br /> 6. Komanda İşbirliyi: İşbirliyi və kommunikasiya
            içində bir komanda yaratmaq və birlikdə işləmək. Bu dəyərlər,
            Armarium Mebel İnteryer'in müştərilərinə xidmət göstərmə üslubunu
            əks etdirən əsas prinsip və dəyərləri ifadə edir
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
