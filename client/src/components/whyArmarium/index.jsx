import React from "react";
import "./index.scss";

const WhyArmariumPage = () => {
  return (
    <div id="whyArmarium">
      <div className="whyArmarium container">
        <div className="armariumHeaderText">
          <h1>NƏYƏ GÖRƏ ARMARİUM</h1>
          <p>Hədəfimiz %100 müştəri məmnuniyyəti..</p>
        </div>
        <div className="whyCards">
          <div className="flexCard">
            <div className="card">
              <i className="fa-solid fa-medal"></i>
              <div className="text">
                <h3>Keyfiyyətli Məhsul</h3>
                <p>
                  Avrupa E1 Standartlarında üretim, TSE, HYB ve SSHYB, Garanti
                  Belgeleri ve ISO 9001:2008 Kalite Yönetim Sistemiyle
                  Belgelendirilmiştir.
                </p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-brush"></i>
              <div className="text">
                <h3>Müştəriyə Özəl Dizayn</h3>
                <p>
                  Avrupa E1 Standartlarında üretim, TSE, HYB ve SSHYB, Garanti
                  Belgeleri ve ISO 9001:2008 Kalite Yönetim Sistemiyle
                  Belgelendirilmiştir.
                </p>
              </div>
            </div>
          </div>
          <div className="flexCard">
            <div className="card">
              <i className="fa-solid fa-swatchbook"></i>
              <div className="text">
                <h3>Zəngin Rəng Seçimi</h3>
                <p>
                  Avrupa E1 Standartlarında üretim, TSE, HYB ve SSHYB, Garanti
                  Belgeleri ve ISO 9001:2008 Kalite Yönetim Sistemiyle
                  Belgelendirilmiştir.
                </p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-gear"></i>
              <div className="text">
                <h3>Müasir Texnologiya</h3>
                <p>
                  Avrupa E1 Standartlarında üretim, TSE, HYB ve SSHYB, Garanti
                  Belgeleri ve ISO 9001:2008 Kalite Yönetim Sistemiyle
                  Belgelendirilmiştir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyArmariumPage;
