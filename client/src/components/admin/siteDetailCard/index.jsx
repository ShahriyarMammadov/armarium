import React from "react";
import "./index.scss";

const SiteDetailCardsComponent = ({ data }) => {
  return (
    <div id="SiteDetailCards">
      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <div className="text">
            <h3>{data?.user?.blogCount}</h3>
            <p>Ümumi Bloq</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>
            30 Gün Ərzində {data?.data?.blogCount} Bloq Paylaşmışsınız
          </span>
        </div>
      </div>

      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-regular fa-images"></i>
          </div>
          <div className="text">
            <h3>{data?.user?.decorCount}</h3>
            <p>Ümumi Dekor</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>
            30 Gün Ərzində {data?.data?.decorCount} Dekor Paylaşmışsınız
          </span>
        </div>
      </div>

      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-solid fa-briefcase"></i>
          </div>
          <div className="text">
            <h3>{data?.user?.vacanciesCount}</h3>
            <p>Ümumi Vakansiya</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>
            30 Gün Ərzində {data?.data?.vacanciesCount} Vakansiya Paylaşmışsınız
          </span>
        </div>
      </div>

      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-regular fa-building"></i>
          </div>
          <div className="text">
            <h3>{data?.user?.referenceCount}</h3>
            <p>Ümumi Referans</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>
            30 Gün Ərzində {data?.data?.referanceCount} Referans Paylaşmışsınız
          </span>
        </div>
      </div>

      <div className="SiteDetailCard">
        <div className="cardHeader">
          <div className="icon">
            <i className="fa-solid fa-newspaper"></i>
          </div>
          <div className="text">
            <h3>{data?.user?.newsCount}</h3>
            <p>Ümumi Xəbər</p>
          </div>
        </div>
        <div className="cardFooter">
          <i className="fa-solid fa-circle-arrow-up"></i>
          <span>
            30 Gün Ərzində {data?.data?.newsCount} Xəbər Paylaşmışsınız
          </span>
        </div>
      </div>
    </div>
  );
};

export default SiteDetailCardsComponent;
