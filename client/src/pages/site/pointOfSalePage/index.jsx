import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Input, message } from "antd";
import axios from "axios";

// AIzaSyDakeBJ24f3MWFyBFxYwlRA8EIQPAs5g5c
const PointOfSalesPages = () => {
  const { TextArea } = Input;
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const addWriteToUs = async () => {
    try {
      if (text.length == 0 || fullName.length == 0 || text.length == 0) {
        return message.error("Xanaları Tam Doldurun.");
      }
      setLoading(true);
      const { data } = await axios.post(
        `http://localhost:3000/writeToUs/addWriteToUs`,
        {
          fullName,
          email,
          phoneNumber,
          text,
        }
      );
      console.log(data);
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
      </Helmet>
      <div className="backImage">
        <iframe
          src="https://maps.google.com/maps?q=xirdalan%20dairesi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          id="gmap_canvas"
          frameborder="0"
          scrolling="no"
        ></iframe>

        {/* <img src={pointOfSalesBackImage} alt="salam" /> */}
      </div>
      <div className="pointOfSales container">
        <div className="locationCard">
          <h3>Armarium</h3>
          <p>
            Doğubayazıt Anadolu'nun doğusunda, Avrupa E-yolu E80 transityolu
            üzerinde kurulmuştur. Ağrı'ya bağlı ve Merkez ilçenin 93 km
            doğusunda, İran 25 km uzaklıktadır. İlçe toprakları genellikle
            engebeli ve yüksektir. İlçe merkezi düzlükte kurulmuştur. Ağrı'nın
            en eski, tarihi ve gelişmiş ilçesidir. Kendi adını taşıyan ovanın
            güney doğusunda kurulmuştur.
          </p>
        </div>

        <div className="navigation">
          <span>
            <Link to={"/"}>
              HOME <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>SATIŞ NÖQTƏLƏRİ</span>
          </span>
        </div>

        <div className="services">
          <div className="service">
            <h2>Göstərilən Xidmətlər</h2>

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
            <h2>Əlaqə Məlumatları</h2>
            <p className="companyName">İş saatları: 09:00 - 18:00</p>
            <address>
              Ahmedihani Mah. Abdulbari Sokak Goozle Cad. No : 50 Doğubayazıt /
              AĞRI
            </address>

            <a href="tel:+993134473" className="tel">
              Telefon: +99450 313 4473
            </a>
            <a href="mailto:salam">Email: armarium@gmail.com</a>

            <p className="contactAbout">Əlaqədar Şəxs: Armarium Armarium</p>
          </div>
        </div>

        <div className="writeToUs">
          <div className="head">
            <h3>TƏKLİF VƏ YA ŞİKAYƏTLƏRİNİZ</h3>
          </div>

          <div className="form">
            <div className="top">
              <div>
                <label htmlFor="nameSurname">Ad və Soyadınız</label>
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
                <label htmlFor="telephone">Telefon</label>
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
              placeholder="Müraciətiniz"
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
              Göndər
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointOfSalesPages;
