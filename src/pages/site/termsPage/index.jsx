import React, { useEffect } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const TermsPage = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="termsPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Terminlər</title>
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
      <div className="termsPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/haqqimizda"}>
              {t("HAQQIMIZDA")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("TERMİNLƏR")}</span>
          </span>
        </div>
        <div className="terms">
          <h3>{t("TERMİNLƏR")}</h3>
        </div>
        <div className="termsText">
          <p>
            <span>Açıq rəf</span> — Kitabxanalarda və mağazalarda kitabların və
            malların asanlıqla seçiləbilməsini, görünəbilməsini təmin etmək üçün
            hazırlanan dolab. Bu dolabları ev şəraitində də istifadə etmək
            mümkündür. <br /> <br />
            <span>Demontaj mebel</span> — Sökülüb təkrar montaj ediləbilən
            şəkildə istehsal olunmuş mebel. <br /> <br />
            <span>DVP (древесноволокнистые плиты)</span> — ağac lifindən olan
            kütlənin isti preslənməsi prosesində xalça şəklində formalaşdırılan
            təbəqəli material. Bu lifləri ağac xammalını xırdalamaqla və buxara
            verməklə almaq mümkündür. Xammal olaraq taxta—şalban hazırlanma
            prosesindən qalmış qalıqlar, texnoloji yonqarlardan və oduncaq
            ağaclar istifadə edilir. <br /> <br />
            <span>DSP — (древесно-стружечная плита)</span> — İsti preslə
            preslənmiş ağac hissəciklərindən ibarət çoxlaylı materialdır. DSP
            lövhəsi ən sərt tələblərə uyğundur— daxili boşluqlar, çatlaqlar kimi
            çatışmazlıqları yoxdur. Ən əhəmiyyətli keyfiyyətləri sırasında
            yüksək davamlılıq, sərtlik, təktərkiblilik, emalda yumşaqlıq, mismar
            və şurupları möhkəm saxlama qabiliyyəti vardır. <br /> <br />
            <span>Düşmə Qapaq</span> — İki yan tərəfindəki millərin köməyi ilə
            dönərək açılan və üfiqi vəziyyətdə durduqda masa kimi də istifadə
            olunabilən mebel qapağı. <br />
            <br />
            <span>Finischfolie</span> — Teksturalı incə lövhədən hazırlanmış və
            səthi cila ilə örtülmüş təklaylı materialdır. <br />
            <br />
            <span>Karniz</span> — Mebel kompozisiyasını tamamlayan, hər hansı
            profil və ya bir neçə profildən hazırlanan xətt elementidir.
            Karnizin bayır tərəfə çıxıntısı olur. Adətən karnizin üstündə attik
            və ya fronton yerləşdirilir. <br />
            <br />
            <span>Laminat</span> — Kağız laylı dekorativ materialdır. Laminatın
            növləri— (High Pressure Laminat) — mərtəbəli presslərdə hazırlanan
            yüksək təzyiqlə preslənmiş üzlük materialıdır. CPL (Contiuous
            Pressure Laminat) — lentli presslərdə hazırlanan aşağı təzyiqlə
            preslənmiş üzlük materialıdır. <br />
            <br />
            <span>MDF</span> — İngilis dilindən götürülmüş Medium Density
            Fiberboard ifadəsinin abreviaturudur. Orta sıxlığa malik taxtalifli
            lövhə mənasını verir. MDF lövhələr ağac liflərindən hazırlanır. Bu
            da lövhələri ekoloji baxımdan qiymətli edir. MDF lövhələri çox
            möhkəm və sıx olur, rənglənmək və ya laminə edilmək üçün idealdır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
