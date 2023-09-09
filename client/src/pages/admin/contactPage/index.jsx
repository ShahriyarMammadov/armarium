import React, { useEffect, useState } from "react";
import "./index.scss";

const ContactPage = () => {
  const [contactMe, setContactMe] = useState([]);
  const [writeToUs, setWriteToUs] = useState([]);

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
        `http://localhost:3000/user/userDataById/${id}`
      );
      setWriteToUs(data);
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
      <div className="contacts">
        <h4>TELEFON NÖMRƏSİ YAZANLAR</h4>

        <div className="contact">
          <p>salmas</p>
          <p>salmas</p>
          <p>salmas</p>
          <p>salmas</p>
          <p>salmas</p>
          <p>salmas</p>
        </div>

        <button>DAHA ÇOX</button>
      </div>

      <div className="contacts">
        <h4>MESAJ YAZANLAR</h4>

        <div className="contact">
          <p>salmas</p>
          <p>salmas</p>
          <p>salmas</p>
          <p>salmas</p>
          <p>salmas</p>
          <p>salmas</p>
        </div>

        <button>DAHA ÇOX</button>
      </div>
    </div>
  );
};

export default ContactPage;
