import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Empty, Image, Typography } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import SkeletonComponent from "../../../components/skeleton";

const ReferencesPage = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dataCount, setDataCount] = useState(2);

  const { t } = useTranslation();

  const { Text } = Typography;

  const getAllData = async () => {
    try {
      const data = await axios.get(
        `https://armariumbackend-production.up.railway.app/reference/allReferences`
      );
      setAllData(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllData();
  }, []);

  return (
    <div id="referencesPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Referanslar</title>
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
          <>
            <div className="grid-container container">
              {allData.length == 0 ? (
                <Empty
                  description={false}
                  style={{
                    display: "block",
                    width: "80vw",
                  }}
                />
              ) : (
                allData?.slice(0, dataCount)?.map((e, i) => {
                  const imageUrls = e?.images.map(
                    (image) =>
                      `https://armariumbackend-production.up.railway.app/images/${image}`
                  );
                  return (
                    <>
                      <div style={{ position: "relative" }}>
                        <Image.PreviewGroup items={imageUrls} key={i}>
                          <Image
                            src={`https://armariumbackend-production.up.railway.app/images/${e?.coverImage}`}
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
            {allData?.length > 2 && allData?.length > dataCount ? (
              <button
                onClick={() => {
                  setDataCount(dataCount + 10);
                }}
              >
                {t("DAHA ÇOX")}
              </button>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
};

export default ReferencesPage;
