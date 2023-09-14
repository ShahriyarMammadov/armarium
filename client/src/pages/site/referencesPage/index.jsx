import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoadingComponent from "../../../components/loading";
import { useTranslation } from "react-i18next";
import SkeletonComponent from "../../../components/skeleton";

const ReferencesPage = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const { Text } = Typography;

  const getAllData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3000/reference/allReferences`
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

  return (
    <div id="referencesPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Referanslar</title>
      </Helmet>
      <div className="backImage"></div>

      <div className="referencesPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("REFERANSLAR")}</span>
          </span>
        </div>

        <div className="text">
          <h3>{t("ARMARIUM, LAYIHƏLƏRİNİZƏ DƏYƏR QATAR..")}</h3>
          <h4>
            {t(
              "Armarium, 1997-ci ildə Türkiyənin Düzcə şəhərində təsis edilmiş bir mebel şirkətidir. Şirkət mətbəx və qapı mebelləri istehsalı interyer dizaynı sahəsində uzun illər ərzində qətiyyətli bir şəkildə fəaliyyət göstərir. Əsas fəaliyyət sahəsi, yaşayış binaları, otellər, restoranlar, kafelər ofislər və digər müəssisələr üçün qapı və mebel və dekorasiya istehsalıdır. Armarium, bu sahədə klassik və neoklasik dizaynların bacarığını nümayiş etdirərək müştərilərinin estetik tələblərini bütünlüklə qarşılayır."
            )}
          </h4>
          <p>
            {t(
              "Şirkətin əsas məqsədi keyfiyyətli istehsal, uyğun məhsul təklifi və münasib qiymətlərdir. Bu, Armariumun marketinq siyasətinin ən əsas xüsusiyyətidir. Müştərilərinə yüksək keyfiyyətli məhsullar və münasib qiymətlər təklif edərək onların büdcələrinə uyğun məhsullarla onları təmin edir. Şirkətin istehsal etdiyi mebellər funksionallıq və estetika ilə birləşir, bu da onların müştərilərinin tələblərini tamamilə qarşılayır."
            )}
          </p>
        </div>
        {loading ? (
          <div className="skeletonComp">
            <SkeletonComponent />
          </div>
        ) : (
          <div className="grid-container container">
            {allData.length == 0 ? (
              <h3>Referans Yoxdur.</h3>
            ) : (
              allData?.map((e, i) => {
                const imageUrls = e?.images.map(
                  (image) => `http://localhost:3000/images/${image}`
                );
                return (
                  <>
                    <div style={{ position: "relative" }}>
                      <Image.PreviewGroup items={imageUrls} key={i}>
                        <Image
                          src={`http://localhost:3000/images/${e?.coverImage}`}
                        />
                      </Image.PreviewGroup>
                      <Text
                        style={{
                          position: "absolute",
                          top: "20px",
                          right: "20px",
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          padding: "6px 10px",
                        }}
                      >
                        {e?.name}
                      </Text>
                    </div>
                  </>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferencesPage;
