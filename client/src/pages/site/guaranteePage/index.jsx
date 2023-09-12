import React from "react";
import "./index.scss";
// import guaranteBackGif from "../../../assets/backgroundImages/zemanet.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const GuaranteePage = () => {
  const { t } = useTranslation();

  return (
    <div id="guaranteePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Zəmanət</title>
      </Helmet>
      <div className="backImage">
        {/* <img src={guaranteBackGif} alt="Welcome" /> */}
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

            <span>{t("ZƏMANƏT")}</span>
          </span>
        </div>
        <div className="guarantee">
          <h3>{t("ARMARİUM ZƏMANƏTİ")}</h3>
        </div>
        <div className="guaranteeText">
          <p>
            <h4>Zəmanət şərtlərinə daxil olan hallar:</h4>
            <ul>
              <li>
                Zəmanət müddəti mebelin ünvana çatdırıldığı gündən başlamaqla və
                elektrik asessuarları istisna olmaqla mebelin bütün hissələrinə
                aiddir;
              </li>
              <li>
                Çatdırılma-quraşdırılma xidməti müştərinin sifarişinə əsasən
                7-30 gün ərzində həyata keçirilir. Bu müddət müştərinin
                istəyindən asılı olaraq (servislə razılışdırmaqla) uzadıla
                bilər;
              </li>
              <li>
                Mebelin təmirdə olduğu vaxt zəmanət müddətinə daxil deyil və
                təmirdə olduğu vaxt zəmanət müddətinə əlavə olunur. Təmir işləri
                60 gündən çox olmayan müddət ərzində çatdırılır;
              </li>
            </ul>
            <h4>Zəmanət şərtlərinə daxil olmayan hallar:</h4>
            <ul>
              <li>Zəmanət müddəti bitibsə;</li>
              <li>
                Meblin çatdırılması və quraşdırılması Ehome.az şirkətinin təyin
                etdiyi çatdırılma və quraşdırılma ximətinə aid işçi heyəti
                tərəfindən həyata keçirilmədikdə;
              </li>
              <li>
                Mebeli Ehome.az şirkətinin təyin etmədiyi şəxs təmir etdikdə;
              </li>
              <li>
                İstelakçı tərəfindən mebelə zərər (cızılma, əzilmə, qırılma,
                yırtılma və s.)
              </li>
              <li>
                Hər hansı bir fövqəladə hadisə nəticəsində mebelə zərər
                dəydikdə.
              </li>
            </ul>
            <h4>
              Mebelin dəyişdirilməsi və ya qaytarılması açağıdaki hallarda təmin
              edilir:
            </h4>
            Müştəri mebelin sifarişi zamanı onun ölçüsü, modeli və dizayn
            seçimində yalnışlığa yol verərsə Ehome.az şirkəti mebelin
            qaytarılmasından və ya dəyişdirilməsindən imtina etmək hüququna
            malikdir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuaranteePage;
