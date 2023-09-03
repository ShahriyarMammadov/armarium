import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import backImage from "../../assets/giphy/customerServiceBackGif.gif";
import { Helmet } from "react-helmet";

const CustomerServicePage = () => {
  return (
    <div id="customerServicePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Müştəri Xidmətləri</title>
      </Helmet>
      <div className="backImage">
        <img src={backImage} alt="BackGround Image" />
      </div>
      <div className="container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              Home <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/haqqimizda"}>
              Haqqımızda <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>Müştəri Xidməti</span>
          </span>
        </div>
        <p>
          Müştəri xidməti! Madeyra mebeli almış hər bir müştərimiz sonrakı
          periodlarda yarana biləcək istənilən problem, nasazlıq barəsində bizə
          müraciət edə bilər. *9696 qısa nəmrəsinə daxil olan hər bir sorğu,
          istər zəmanət müddəti çərçivəsində, istərsə də zəmanət müddətindən
          sonra diqqətlə araşdırlır və müvafiq olaraq həll edilir. 2 illik
          zəmanət! Mebel istehsalı prosesinin hər bir mərhələsində: xammal
          alışından başlayaraq məhsulların paketlənməsinə qədər bütün proseslər
          ciddi keyfiyyət nəzarətindən keçir. Belə yanaşmamızın nəticəsidir ki,
          bütün mebel məhsullarımıza 2 illik zəmanət veririk. Bununla belə,
          istənilən mebel modelimizi almaqla Siz ömür boyu etibar edə
          biləcəyiniz keyfiyyət əldə edirsiniz. Çünki, biz hər bir mebel
          modelimizə sevgi və nəvazişlə yanaşırıq. Sizin üçün istehsal edirik.
          Sizin xidmətinizdəyik! 24 saat ərzində çatdırılma və quraşdırma!
          Madeyra sizə pulsuz çatdırma və quraşdırma xidməti təqdim edir.
          İstənilən brend mağazamızda, istənilən miqdarda mebel alın və 24 saat
          ərzində aldığınız mebel evinizdə olacaqdır. Xüsusi təlim keçmiş montaj
          qrupumuz operativ şəkildə və peşəkar səviyyədə mebelinizi ən qısa
          müddət ərzində quraşdıracaqdır.
        </p>
      </div>
    </div>
  );
};

export default CustomerServicePage;
