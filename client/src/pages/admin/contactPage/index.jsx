import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import LoadingComponent from "../../../components/loading";

const ContactPage = () => {
  const [contactMe, setContactMe] = useState([]);
  const [writeToUs, setWriteToUs] = useState([]);
  const [sliceCount, setSliceCount] = useState(5);
  const [sliceCountTel, setsliceCountTel] = useState(5);

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
            {contactMe?.slice(0, sliceCountTel).map((e, i) => {
              return (
                <div key={i} className="phone">
                  <p>{e?.phoneNumber}</p>
                </div>
              );
            })}
          </div>
        )}

        {contactMe.length < 4 ? null : (
          <button
            onClick={() => {
              setsliceCountTel(sliceCountTel + 5);
            }}
          >
            DAHA ÇOX
          </button>
        )}
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
            {writeToUs?.slice(0, sliceCount).map((e, i) => {
              return (
                <div key={i} id="writeToUsDatas">
                  <p>
                    <span>AD:</span> {e?.fullName}
                  </p>
                  <p>
                    <span>EMAIL:</span> {e?.email}
                  </p>
                  <p>
                    <span>ƏLAQƏ NÖMRƏSİ:</span> {e?.phoneNumber}
                  </p>
                  <p>
                    <span>MƏTN:</span> {e?.text}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {writeToUs.length < 4 ? null : (
          <button
            onClick={() => {
              setSliceCount(sliceCount + 5);
            }}
          >
            DAHA ÇOX
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
