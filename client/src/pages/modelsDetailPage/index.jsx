import React from "react";
import "./index.scss";
import coverImage from "../../assets/images/101.jpg";
import image1 from "../../assets/images/100.jpg";
import image2 from "../../assets/images/102.jpg";
import image3 from "../../assets/images/103.jpg";
import image4 from "../../assets/images/104.jpg";
import image5 from "../../assets/images/105.jpg";
import image6 from "../../assets/images/106.jpg";
import image7 from "../../assets/images/107.jpg";
import image8 from "../../assets/images/108.jpg";

const ModelsDetailPage = () => {
  return (
    <main>
      <section id="detailPage">
        <div className="coverImage">
          <img src={coverImage} alt="coverImage" />
        </div>

        <div className="aboutText container">
          <h5>Esso</h5>
          <div className="headText">
            <p>Maskülen ve derin…</p>
          </div>
          <p>
            Tasarımı ve formu ön plana çıkaran mat yüzeyler, Esso ile
            mutfaklarda yükselişe geçiyor. Karmaşadan uzak ve duru görünümüyle
            Esso, mutfağı evin huzur ve dinginlik noktası haline getiriyor.
          </p>
        </div>

        <div className="grid-container container">
          <div className="gallery" key={1}>
            <img src={image1} alt={`image`} />
          </div>
          <div className="gallery" key={1}>
            <img src={image2} alt={`image`} />
          </div>
          <div className="gallery" key={1}>
            <img src={image3} alt={`image`} />
          </div>
          <div className="gallery" key={1}>
            <img src={image4} alt={`image`} />
          </div>
          <div className="gallery" key={1}>
            <img src={image5} alt={`image`} />
          </div>
          <div className="gallery" key={1}>
            <img src={image6} alt={`image`} />
          </div>
          <div className="gallery" key={1}>
            <img src={image7} alt={`image`} />
          </div>
          <div className="gallery" key={1}>
            <img src={image8} alt={`image`} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ModelsDetailPage;
