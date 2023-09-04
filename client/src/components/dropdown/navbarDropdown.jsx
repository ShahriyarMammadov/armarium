import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarDropdown.scss";
import { useTranslation } from "react-i18next";

const NavBarDropdownComponent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="dropdown">
        <NavLink to={"/haqqimizda"} className="parent">
          {t("HAQQIMIZDA")}
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/haqqimizda/zemanet"} title="Zəmanət">
            <div className="text">{t("ZƏMANƏT")}</div>
          </NavLink>
          <NavLink to={"/haqqimizda/musteri_xidmeti"} title="Terminlər">
            <div className="text">{t("MÜSTƏRİ XİDMƏTLƏRİ")}</div>
          </NavLink>
          <NavLink to={"/haqqimizda/terminler"} title="Visitor Analytics">
            <div className="text">{t("TERMİNLƏR")}</div>
          </NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to={"/features"} className="parent">
          {t("MEBEL")}
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/mebel/all_models"} title="Photo Proofing">
            <div className="text">{t("BÜTÜN MODELLƏR")}</div>
          </NavLink>
          <NavLink to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">MASALAR VE SANDALYELER</div>
          </NavLink>
          <NavLink to={"/visitor-analytics"} title="Visitor Analytics">
            <div className="text">AKSESUARLAR</div>
          </NavLink>
          <NavLink to={"/online-store"} title="Online Store">
            <div className="text">DIGITAL KATALOG</div>
          </NavLink>
          <NavLink to={"/gallery-directories"} title="Gallery Directories">
            <div className="text">SANAL TUR</div>
          </NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to={"/referanslar"} className="parent">
          {t("REFERANSLAR")}
        </NavLink>
      </div>

      <div className="dropdown">
        <NavLink to={"/satis_noqteleri"} className="parent">
          {t("SATIŞ NÖQTƏLƏRİ")}
        </NavLink>
      </div>

      <div className="dropdown">
        <NavLink to={"/vakansiyalar"} className="parent">
          {t("VAKANSİYALAR")}
        </NavLink>
      </div>

      <div className="dropdown">
        <NavLink to={"/xeberler"} className="parent">
          {t("XƏBƏRLƏR")}
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/xeberler/blog"} title="Digital Downloads">
            <div className="text">{t("BLOQ")}</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBarDropdownComponent;
