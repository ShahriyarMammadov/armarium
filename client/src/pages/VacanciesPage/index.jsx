import React, { useRef, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import backImage from "../../assets/images/vacanciesBackImage.jpeg";
import { Collapse } from "antd";

const VacanciesPage = () => {
  const items = [
    {
      key: "1",
      label: "Web Developer",
      children: (
        <>
          <p>
            Namizədə tələblər: <br />
            AR Əmək Məcəlləsini və mövcud əmək qanunvericiliyini <br />
            İşgüzar ünsiyyətin əxlaqını və peşə etiketi qaydalarını <br />1 C
            8.2 və 8.3 MS Office proqramları <br /> E-gov, E-taxes proqramları
            ilə işləmə bacarığı <br />
            Milli mühasibat uçotu standartları İş barədə məlumat: Mal – material
            uçotu, anbar qalığı, aylıq inventarizasiyanın aparılması <br />
            Əsas vəsaitlərin, azqiymətlilərin uçotu və amortizasiyası <br />
            Bank , kassa əməliyatları Balans, Mənfəət – Zərər, Pul hərəkətləri
            haqqında hesabatlarının təqdim olunması <br />
            <br /> Dövlət Orqanlarına – Vergi Bəyannamələrinin ( ƏDV, ÖMV Əmlak,
            Sadələşmiş, Mənfəət,) Statistika hesabatlarının (aylıq, rüblük,
            illik ) təqdim olunması
            <br /> Gömrük işlərinin aparılması, məhsulların rəsmi sənədləşməsinə
            nəzarət Əmək haqqının hesablanması Vergi və digər qanuni
            öhdəliklərini vaxtında yerinə yetirmək <br />
            Satışla bağlı müqavilələrin tərtib edilməsi və hüquqi öhdəliklərin
            yerinə yetirilməsinə nəzarət edilməsi <br />
            Rəhbərlik tərəfindən verilən digər tapşırıqların yerinə yetirilməsi{" "}
            <br />
            Azərbaycan Respublikasının Əmək Məcəlləsinə uyğun sənədləşmə <br />{" "}
            İş qafiki: Həftənin 6 günü, 1 gün istirahət <br /> Nahar şirkət
            tərəfindən təmin olunur <br />
            Əmək haqqı: 1500-2000 (müsahibə əsasında təyin olunur)
          </p>
          <a href="mailto:shahriyarmammadov16@gmail.com">Müraciət Et</a>
        </>
      ),
    },
    {
      key: "2",
      label: "Qrafik Dizayner",
      children: (
        <>
          <p>
            Namizədə tələblər: <br />
            AR Əmək Məcəlləsini və mövcud əmək qanunvericiliyini <br />
            İşgüzar ünsiyyətin əxlaqını və peşə etiketi qaydalarını <br />1 C
            8.2 və 8.3 MS Office proqramları <br /> E-gov, E-taxes proqramları
            ilə işləmə bacarığı <br />
            Milli mühasibat uçotu standartları İş barədə məlumat: Mal – material
            uçotu, anbar qalığı, aylıq inventarizasiyanın aparılması <br />
            Əsas vəsaitlərin, azqiymətlilərin uçotu və amortizasiyası <br />
            Bank , kassa əməliyatları Balans, Mənfəət – Zərər, Pul hərəkətləri
            haqqında hesabatlarının təqdim olunması <br />
            <br /> Dövlət Orqanlarına – Vergi Bəyannamələrinin ( ƏDV, ÖMV Əmlak,
            Sadələşmiş, Mənfəət,) Statistika hesabatlarının (aylıq, rüblük,
            illik ) təqdim olunması
            <br /> Gömrük işlərinin aparılması, məhsulların rəsmi sənədləşməsinə
            nəzarət Əmək haqqının hesablanması Vergi və digər qanuni
            öhdəliklərini vaxtında yerinə yetirmək <br />
            Satışla bağlı müqavilələrin tərtib edilməsi və hüquqi öhdəliklərin
            yerinə yetirilməsinə nəzarət edilməsi <br />
            Rəhbərlik tərəfindən verilən digər tapşırıqların yerinə yetirilməsi{" "}
            <br />
            Azərbaycan Respublikasının Əmək Məcəlləsinə uyğun sənədləşmə <br />{" "}
            İş qafiki: Həftənin 6 günü, 1 gün istirahət <br /> Nahar şirkət
            tərəfindən təmin olunur <br />
            Əmək haqqı: 1500-2000 (müsahibə əsasında təyin olunur)
          </p>
          <a href="mailto:shahriyarmammadov16@gmail.com">Müraciət Et</a>
        </>
      ),
    },
    {
      key: "3",
      label: "Mühafizəçi",
      children: (
        <>
          <p>
            Namizədə tələblər: <br />
            AR Əmək Məcəlləsini və mövcud əmək qanunvericiliyini <br />
            İşgüzar ünsiyyətin əxlaqını və peşə etiketi qaydalarını <br />1 C
            8.2 və 8.3 MS Office proqramları <br /> E-gov, E-taxes proqramları
            ilə işləmə bacarığı <br />
            Milli mühasibat uçotu standartları İş barədə məlumat: Mal – material
            uçotu, anbar qalığı, aylıq inventarizasiyanın aparılması <br />
            Əsas vəsaitlərin, azqiymətlilərin uçotu və amortizasiyası <br />
            Bank , kassa əməliyatları Balans, Mənfəət – Zərər, Pul hərəkətləri
            haqqında hesabatlarının təqdim olunması <br />
            <br /> Dövlət Orqanlarına – Vergi Bəyannamələrinin ( ƏDV, ÖMV Əmlak,
            Sadələşmiş, Mənfəət,) Statistika hesabatlarının (aylıq, rüblük,
            illik ) təqdim olunması
            <br /> Gömrük işlərinin aparılması, məhsulların rəsmi sənədləşməsinə
            nəzarət Əmək haqqının hesablanması Vergi və digər qanuni
            öhdəliklərini vaxtında yerinə yetirmək <br />
            Satışla bağlı müqavilələrin tərtib edilməsi və hüquqi öhdəliklərin
            yerinə yetirilməsinə nəzarət edilməsi <br />
            Rəhbərlik tərəfindən verilən digər tapşırıqların yerinə yetirilməsi{" "}
            <br />
            Azərbaycan Respublikasının Əmək Məcəlləsinə uyğun sənədləşmə <br />{" "}
            İş qafiki: Həftənin 6 günü, 1 gün istirahət <br /> Nahar şirkət
            tərəfindən təmin olunur <br />
            Əmək haqqı: 1500-2000 (müsahibə əsasında təyin olunur)
          </p>
          <a href="mailto:shahriyarmammadov16@gmail.com">Müraciət Et</a>
        </>
      ),
    },
    {
      key: "4",
      label: "Mebel Ustası",
      children: (
        <>
          <p>
            Namizədə tələblər: <br />
            AR Əmək Məcəlləsini və mövcud əmək qanunvericiliyini <br />
            İşgüzar ünsiyyətin əxlaqını və peşə etiketi qaydalarını <br />1 C
            8.2 və 8.3 MS Office proqramları <br /> E-gov, E-taxes proqramları
            ilə işləmə bacarığı <br />
            Milli mühasibat uçotu standartları İş barədə məlumat: Mal – material
            uçotu, anbar qalığı, aylıq inventarizasiyanın aparılması <br />
            Əsas vəsaitlərin, azqiymətlilərin uçotu və amortizasiyası <br />
            Bank , kassa əməliyatları Balans, Mənfəət – Zərər, Pul hərəkətləri
            haqqında hesabatlarının təqdim olunması <br />
            <br /> Dövlət Orqanlarına – Vergi Bəyannamələrinin ( ƏDV, ÖMV Əmlak,
            Sadələşmiş, Mənfəət,) Statistika hesabatlarının (aylıq, rüblük,
            illik ) təqdim olunması
            <br /> Gömrük işlərinin aparılması, məhsulların rəsmi sənədləşməsinə
            nəzarət Əmək haqqının hesablanması Vergi və digər qanuni
            öhdəliklərini vaxtında yerinə yetirmək <br />
            Satışla bağlı müqavilələrin tərtib edilməsi və hüquqi öhdəliklərin
            yerinə yetirilməsinə nəzarət edilməsi <br />
            Rəhbərlik tərəfindən verilən digər tapşırıqların yerinə yetirilməsi{" "}
            <br />
            Azərbaycan Respublikasının Əmək Məcəlləsinə uyğun sənədləşmə <br />{" "}
            İş qafiki: Həftənin 6 günü, 1 gün istirahət <br /> Nahar şirkət
            tərəfindən təmin olunur <br />
            Əmək haqqı: 1500-2000 (müsahibə əsasında təyin olunur)
          </p>
          <a href="mailto:shahriyarmammadov16@gmail.com">Müraciət Et</a>
        </>
      ),
    },
  ];

  // Elanin bitme tarixinide elave etmek olar
  return (
    <div id="vacanciesPage">
      <div className="backImage">
        <img src={backImage} alt="salam" />
      </div>
      <div className="vacanciesPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              Home <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>Vakansiyalar</span>
          </span>
        </div>

        <div className="vacancies">
          <Collapse defaultActiveKey={["1"]} ghost items={items} size="large" />
        </div>
      </div>
    </div>
  );
};

export default VacanciesPage;
