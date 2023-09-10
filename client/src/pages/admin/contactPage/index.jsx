import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import LoadingComponent from "../../../components/loading";

const ContactPage = () => {
  const [contactMe, setContactMe] = useState([]);
  const [writeToUs, setWriteToUs] = useState([]);

  const [loading, setLoading] = useState(true);

  const getContactMe = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/contactMe/getContactMe`
      );
      setContactMe(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getWriteToUs = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/writeToUs/allWriteToUs`
      );
      setWriteToUs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactMe();
    getWriteToUs();
  }, []);

  return (
    <div id="contactPage">
      <div id="contacts">
        <h4>TELEFON NÖMRƏSİ YAZANLAR</h4>

        {loading ? (
          <LoadingComponent />
        ) : contactMe.length == 0 ? (
          <h3>TELEFON NÖMRƏSİ YAZILMIYIB.</h3>
        ) : (
          <div className="contact">
            {contactMe?.map((e, i) => {
              return <p key={i}>{e?.phoneNumber}</p>;
            })}
          </div>
        )}

        {contactMe.length < 4 ? null : <button>DAHA ÇOX</button>}
      </div>

      <hr />

      <div id="writeToUs">
        <h4>MESAJ YAZANLAR</h4>

        {loading ? (
          <LoadingComponent />
        ) : writeToUs.length == 0 ? (
          <h3>MESAJ YAZILMAYIB.</h3>
        ) : (
          <div className="writeToUs">
            <p>salmas</p>
            <p>salmas</p>
            <p>salmas</p>
            <p>salmas</p>
            <p>salmas</p>
            <p>salmas</p>
          </div>
        )}
        {writeToUs.length < 4 ? null : <button>DAHA ÇOX</button>}
      </div>
    </div>
  );
};

export default ContactPage;
