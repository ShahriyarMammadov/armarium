import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Collapse } from "antd";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LoadingComponent from "../../../components/loading";

const VacanciesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  const getAllData = async () => {
    try {
      const data = await axios.get(
        `https://armariumbackend-production.up.railway.app/vacancy/allVacancy`
      );
      setAllData(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  function findEmails(text) {
    const words = text.split(" ");
    const emails = [];

    for (const word of words) {
      if (word.includes("@")) {
        emails.push(word);
      }
    }
    return emails;
  }

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
        {
          <a
            href={`mailto:${
              findEmails(data?.description)?.length > 0
                ? findEmails(data?.description)[0]
                : "f.yildirim@armarium.az"
            }`}
          >
            Müraciət Et
          </a>
        }
      </>
    ),
  }));

  return (
    <div id="vacanciesPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Vakansiyalar</title>
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
      <div className="backImage"></div>

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
          {loading ? (
            <LoadingComponent />
          ) : (
            <Collapse
              // defaultActiveKey={["1"]}
              accordion
              items={items}
              size="large"
              style={{ fontWeight: "600" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default VacanciesPage;
