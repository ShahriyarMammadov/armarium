import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
// import backImage from "../../../assets/backgroundImages/musteriXidmeti.png";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const CustomerServicePage = () => {
  const { t } = useTranslation();

  return (
    <div id="customerServicePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Müştəri Xidmətləri</title>
      </Helmet>
      <div className="backImage">
        {/* <img src={backImage} alt="BackGround Image" /> */}
      </div>
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
            <h4>Müştəri xidməti!</h4>
            Fəaliyyət göstərdiyimiz hər bir ölkədə aktiv müştəri xidməti xətləri
            və satışdan sonrakı xidmət qurmuşuq. Belə ki, yaşadığı ölkədən asılı
            olmayaraq, Embawood mebeli almış hər bir müştərimiz sonrakı
            periodlarda yarana biləcək istənilən problem, nasazlıq barəsində
            bizə müraciət edə bilər. Hər bir sorğu, istər zəmanət müddəti
            çərçivəsində, istərsə də zəmanət müddətindən sonra diqqətlə
            araşdırlır və müvafiq olaraq həll edilir.
            <h4>2 illik zəmanət!</h4>
            Mebel istehsalı prosesinin hər bir mərhələsində: xammal alışından
            başlayaraq məhsulların paketlənməsinə qədər bütün proseslər ciddi
            keyfiyyət nəzarətindən keçir. Belə yanaşmamızın nəticəsidir ki,
            bütün mebel məhsullarımıza 2 illik zəmanət veririk. Bununla belə,
            istənilən mebel modelimizi almaqla Siz ömür boyu etibar edə
            biləcəyiniz keyfiyyət əldə edirsiniz. Çünki, biz hər bir mebel
            modelimizə sevgi və nəvazişlə yanaşırıq. Sizin üçün istehsal edirik.
            Sizin xidmətinizdəyik!
            <h4>24 saat ərzində çatdırılma və quraşdırma!</h4>
            Embawood sizə pulsuz çatdırma və quraşdırma xidməti təqdim edir.
            İstənilən brend mağazamızda, istənilən miqdarda mebel alın və 24
            saat ərzində aldığınız mebel evinizdə olacaqdır. Xüsusi təlim keçmiş
            montaj qrupumuz operativ şəkildə və peşəkar səviyyədə mebelinizi ən
            qısa müddət ərzində quraşdıracaqdır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
