import React from "react";
import { NavLink } from "react-router-dom";
import "./navbarDropdown.scss";

const NavBarDropdownComponent = () => {
  return (
    <>
      <div className="dropdown">
        <NavLink to={"/features"} className="parent">
          HAQQIMIZDA
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">ARMARIUM HAKKINDA</div>
          </NavLink>
          <NavLink to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">VIZYON VE MISYON</div>
          </NavLink>
          <NavLink to={"/visitor-analytics"} title="Visitor Analytics">
            <div className="text">REFERANSLAR</div>
          </NavLink>
          <NavLink to={"/online-store"} title="Online Store">
            <div className="text">INSAN KAYNAKLARI</div>
          </NavLink>
          <NavLink to={"/gallery-directories"} title="Gallery Directories">
            <div className="text">KALITE VE CEVRE POLITIKAMIZ</div>
          </NavLink>
          <NavLink to={"/themes"} title="Themes">
            <div className="text">VIDEOLAR</div>
          </NavLink>
          <NavLink to={"/themes"} title="Themes">
            <div className="text">KALITE BELGELERIMIZ</div>
          </NavLink>
          <NavLink to={"/themes"} title="Themes">
            <div className="text">YETKILI SATICI BASVURUSU</div>
          </NavLink>
          <NavLink to={"/themes"} title="Themes">
            <div className="text">KISISEL VERILERIN KORUNMASI</div>
          </NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to={"/features"} className="parent">
          MEBEL
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">MUTFAK MODELLERI</div>
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
        <NavLink to={"/features"} className="parent">
          VAKANSİYALAR
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">YURT ICI SATICILAR</div>
          </NavLink>
          <NavLink to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">YURT DISI SATICILAR</div>
          </NavLink>
          <NavLink to={"/visitor-analytics"} title="Visitor Analytics">
            <div className="text">LINEDECOR ADB WEBSITESI</div>
          </NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to={"/features"} className="parent">
          REFERANSLAR
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">KAMPANYALAR</div>
          </NavLink>
          <NavLink to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">TESHIR FIRSATLARI</div>
          </NavLink>
          <NavLink to={"/visitor-analytics"} title="Visitor Analytics">
            <div className="text">UCRETSIZ PROJELENDIRME</div>
          </NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to={"/features"} className="parent">
          SATIŞ NÖQTƏLƏRİ
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">HABERLER</div>
          </NavLink>
          <NavLink to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">BASINDA ARMARIUM</div>
          </NavLink>
        </div>
      </div>

      <div className="dropdown">
        <NavLink to={"/features"} className="parent">
          XƏBƏRLƏR
        </NavLink>
        <div className="dropdown-content">
          <NavLink to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">ILETISIM BILGILERI</div>
          </NavLink>
          <NavLink to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">İLETİSİM FORMU</div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBarDropdownComponent;
