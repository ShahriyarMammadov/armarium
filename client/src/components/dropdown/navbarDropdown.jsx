import React from "react";
import { Link } from "react-router-dom";
import "./navbarDropdown.scss";

const NavBarDropdownComponent = () => {
  return (
    <>
      <div className="dropdown">
        <Link to={"/features"} className="parent">
          HAQQIMIZDA
        </Link>
        <div className="dropdown-content">
          <Link to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">ARMARIUM HAKKINDA</div>
          </Link>
          <Link to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">VIZYON VE MISYON</div>
          </Link>
          <Link to={"/visitor-analytics"} title="Visitor Analytics">
            <div className="text">REFERANSLAR</div>
          </Link>
          <Link to={"/online-store"} title="Online Store">
            <div className="text">INSAN KAYNAKLARI</div>
          </Link>
          <Link to={"/gallery-directories"} title="Gallery Directories">
            <div className="text">KALITE VE CEVRE POLITIKAMIZ</div>
          </Link>
          <Link to={"/themes"} title="Themes">
            <div className="text">VIDEOLAR</div>
          </Link>
          <Link to={"/themes"} title="Themes">
            <div className="text">KALITE BELGELERIMIZ</div>
          </Link>
          <Link to={"/themes"} title="Themes">
            <div className="text">YETKILI SATICI BASVURUSU</div>
          </Link>
          <Link to={"/themes"} title="Themes">
            <div className="text">KISISEL VERILERIN KORUNMASI</div>
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <Link to={"/features"} className="parent">
          VİZYON VƏ MİSSİYA
        </Link>
        <div className="dropdown-content">
          <Link to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">MUTFAK MODELLERI</div>
          </Link>
          <Link to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">MASALAR VE SANDALYELER</div>
          </Link>
          <Link to={"/visitor-analytics"} title="Visitor Analytics">
            <div className="text">AKSESUARLAR</div>
          </Link>
          <Link to={"/online-store"} title="Online Store">
            <div className="text">DIGITAL KATALOG</div>
          </Link>
          <Link to={"/gallery-directories"} title="Gallery Directories">
            <div className="text">SANAL TUR</div>
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <Link to={"/features"} className="parent">
          VAKANSİYALAR
        </Link>
        <div className="dropdown-content">
          <Link to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">YURT ICI SATICILAR</div>
          </Link>
          <Link to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">YURT DISI SATICILAR</div>
          </Link>
          <Link to={"/visitor-analytics"} title="Visitor Analytics">
            <div className="text">LINEDECOR ADB WEBSITESI</div>
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <Link to={"/features"} className="parent">
          REFERANSLAR
        </Link>
        <div className="dropdown-content">
          <Link to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">KAMPANYALAR</div>
          </Link>
          <Link to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">TESHIR FIRSATLARI</div>
          </Link>
          <Link to={"/visitor-analytics"} title="Visitor Analytics">
            <div className="text">UCRETSIZ PROJELENDIRME</div>
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <Link to={"/features"} className="parent">
          SATIŞ NÖQTƏLƏRİ
        </Link>
        <div className="dropdown-content">
          <Link to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">HABERLER</div>
          </Link>
          <Link to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">BASINDA ARMARIUM</div>
          </Link>
        </div>
      </div>

      <div className="dropdown">
        <Link to={"/features"} className="parent">
          XƏBƏRLƏR
        </Link>
        <div className="dropdown-content">
          <Link to={"/photo-proofing"} title="Photo Proofing">
            <div className="text">ILETISIM BILGILERI</div>
          </Link>
          <Link to={"/deliver-photos-to-client"} title="Digital Downloads">
            <div className="text">İLETİSİM FORMU</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBarDropdownComponent;
