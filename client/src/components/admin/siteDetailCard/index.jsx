import React from "react";
import "./index.scss";

const SiteDetailCardsComponent = () => {
  return (
    <div id="SiteDetailCards">
      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <div className="text">
            <h3>75</h3>
            <p>Ümumi Bloq</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>30 Gün Ərzində 40 Bloq Paylaşmışsınız</span>
        </div>
      </div>

      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-regular fa-images"></i>
          </div>
          <div className="text">
            <h3>5</h3>
            <p>Ümumi Dekor</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>30 Gün Ərzində 1 Dekor Paylaşmışsınız</span>
        </div>
      </div>

      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className="text">
            <h3>4</h3>
            <p>Ümumi Vakansiya</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>30 Gün Ərzində 1 Vakansiya Paylaşmışsınız</span>
        </div>
      </div>

      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-regular fa-building"></i>
          </div>
          <div className="text">
            <h3>150</h3>
            <p>Ümumi Referans</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>30 Gün Ərzində 110 Referans Paylaşmışsınız</span>
        </div>
      </div>

      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-solid fa-newspaper"></i>
          </div>
          <div className="text">
            <h3>12</h3>
            <p>Ümumi Xəbər</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>30 Gün Ərzində 0 Xəbər Paylaşmışsınız</span>
        </div>
      </div>
    </div>
  );
};

export default SiteDetailCardsComponent;
