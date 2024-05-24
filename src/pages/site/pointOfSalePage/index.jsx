import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Input, message } from "antd";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LoadingComponent from "../../../components/loading";

// AIzaSyDakeBJ24f3MWFyBFxYwlRA8EIQPAs5g5c
const PointOfSalesPages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { TextArea } = Input;
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const [loadingGetData, setLoadingGetData] = useState(true);

  const { t } = useTranslation();

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `""/salesPoint/allSalesPoint`
      );

      setdata(data);
      setLoadingGetData(false);
    } catch (error) {
      console.log(error);
      setLoadingGetData(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addWriteToUs = async () => {
    try {
      if (text.length == 0 || fullName.length == 0 || text.length == 0) {
        return message.error("Xanaları Tam Doldurun.");
      }
      setLoading(true);
      const { data } = await axios.post(
        `""/writeToUs/addWriteToUs`,
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
        <meta property="og:image" content="../../../../public/favicon.png" />
        <meta
          name="description"
          content="Armarium | Xəyallarınızı Armarium ilə süsləyin"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, Xəyallarınızı Armarium ilə süsləyin"
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

        {loadingGetData ? (
          <LoadingComponent />
        ) : (
          data?.map((e, i) => {
            return (
              <div className="services" key={i}>
                <div className="service">
                  <h2>{t("Göstərilən Xidmətlər")}</h2>
                  {e?.gosterilenXidmetler.map((e, i) => {
                    return (
                      <>
                        <div key={i}>
                          <p>
                            <i className="fa-solid fa-check"></i>
                            {e}
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>

                <div className="contact" key={i + 1}>
                  <h2>{t("Əlaqə Məlumatları")}</h2>
                  <p className="companyName">
                    {t("İş saatları")}: {e?.saat}
                  </p>
                  <address>{e?.address}</address>

                  <a href="tel:+99512908127" className="tel">
                    {t("Telefon")}: {e?.phoneNumber}
                  </a>
                  <a href={`mailto:${e?.email}`}>Email: {e?.email}</a>

                  <p className="contactAbout">
                    {t("Əlaqədar Şəxs")}: {e?.contactPerson}
                  </p>
                </div>
              </div>
            );
          })
        )}

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
