import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
// import backImage from "../../../assets/backgroundImages/vakansiya.png";
import { Collapse } from "antd";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useTranslation } from "react-i18next";

const VacanciesPage = () => {
  const [allData, setAllData] = useState([]);
  const { t } = useTranslation();

  const getAllData = async () => {
    try {
      const data = await axios.get(`http://localhost:3000/vacancy/allVacancy`);
      setAllData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const items = allData?.map((data) => ({
    key: data?.id?.toString(),
    label: data?.name,
    children: (
      <>
        <p>
          {data?.description?.split("<br />").map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <a href={`mailto:shahriyarmammadov16@gmail.com`}>Müraciət Et</a>
      </>
    ),
  }));

  return (
    <div id="vacanciesPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Vakansiyalar</title>
      </Helmet>
      <div className="backImage">
        {/* <img src={backImage} alt="salam" /> */}
      </div>
      <div className="vacanciesPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("VAKANSİYALAR")}</span>
          </span>
        </div>

        <div className="vacancies">
          <Collapse
            // defaultActiveKey={["1"]}
            accordion
            items={items}
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default VacanciesPage;
