import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Input, message } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";

// AIzaSyDakeBJ24f3MWFyBFxYwlRA8EIQPAs5g5c
const PointOfSalesPages = () => {
  const { TextArea } = Input;
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();

  const addWriteToUs = async () => {
    try {
      if (text.length == 0 || fullName.length == 0 || text.length == 0) {
        return message.error("Xanaları Tam Doldurun.");
      }
      setLoading(true);
      const { data } = await axios.post(
        `https://armariumbackend-production.up.railway.app/writeToUs/addWriteToUs`,
        {
          fullName,
          email,
          phoneNumber,
          text,
        }
      );
      message.success(data?.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div id="pointOfSales">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Satış Nöqtələri</title>
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
      <div className="backImage">
        <iframe
          src="https://maps.google.com/maps?&amp;hl=en&amp;q=40.445080, 49.778401&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          id="gmap_canvas"
          frameborder="0"
          maptype="terrain"
          scrolling="no"
        ></iframe>
      </div>
      <div className="pointOfSales container">
        <div className="locationCard">
          <h3>Armarium</h3>
          <p>
            {t(
              "Armarium, 1997-ci ildə Türkiyənin Düzcə şəhərində təsis edilmiş bir mebel şirkətidir. Şirkət mətbəx və qapı mebelləri istehsalı və interyer dizaynı sahəsində uzun illər ərzində qətiyyətli bir şəkildə fəaliyyət göstərir. Əsas fəaliyyət sahəsi, yaşayış binaları, otellər, restoranlar, kafelər ofislər və digər müəssisələr üçün qapı və mebel və dekorasiya istehsalıdır."
            )}
          </p>
        </div>

        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("SATIŞ NÖQTƏLƏRİ")}</span>
          </span>
        </div>

        <div className="services">
          <div className="service">
            <h2>{t("Göstərilən Xidmətlər")}</h2>

            <div>
              <p>
                <i className="fa-solid fa-check"></i>
                Ödənişsiz Kəşf
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                Dizayn və Layihələndirmə
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                3D Təqdimat
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                Montaj və Servis Xidmətləri
              </p>
              <p>
                <i className="fa-solid fa-check"></i>
                Məhsul Nümunələrini Görə Bilmə
              </p>
            </div>
          </div>

          <div className="contact">
            <h2>{t("Əlaqə Məlumatları")}</h2>
            <p className="companyName">{t("İş saatları")}: 09:00 - 18:00</p>
            <address>
              Sumqayıt şossesi, döngə 1, n50 (Xırdalan dairəsi tərəf)
            </address>

            <a href="tel:+99512908127" className="tel">
              {t("Telefon")}: +99451 290 8127
            </a>
            <a href="mailto:salam">Email: armarium@armarium.az</a>

            <p className="contactAbout">{t("Əlaqədar Şəxs")}: Fırat Yıldırım</p>
          </div>
        </div>

        <div className="writeToUs">
          <div className="head">
            <h3>{t("TƏKLİF VƏ YA ŞİKAYƏTLƏRİNİZ")}</h3>
          </div>

          <div className="form">
            <div className="top">
              <div>
                <label htmlFor="nameSurname">{t("Ad və Soyadınız")}</label>
                <Input
                  name="nameSurname"
                  id="nameSurname"
                  onChange={(e) => {
                    setfullName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <Input
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="telephone">{t("Telefon")}</label>
                <Input
                  name="telephone"
                  id="telephone"
                  onChange={(e) => {
                    setphoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>
            <TextArea
              rows={4}
              placeholder={t("Müraciətiniz")}
              maxLength={400}
              showCount
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <Button
              type="dashed"
              loading={loading}
              onClick={() => {
                addWriteToUs();
              }}
            >
              {t("Göndər")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointOfSalesPages;
