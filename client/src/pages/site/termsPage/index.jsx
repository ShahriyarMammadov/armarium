import React from "react";
import "./index.scss";
import backImage from "../../../assets/images/termsBackImage.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const TermsPage = () => {
  return (
    <div id="termsPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Terminlər</title>
      </Helmet>
      <div className="backImage">
        <img src={backImage} alt="TermsPage" />
      </div>
      <div className="termsPage container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              Home <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/haqqimizda"}>
              Haqqımızda <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>Terminlər</span>
          </span>
        </div>
        <p>
          Bu bölmədə, mebel sahəsində tez-tez rast gəlinən terminlər haqqında
          məlumat verməyə çalışmışıq. Açıq rəf — Kitabxanalarda və mağazalarda
          kitabların və malların asanlıqla seçiləbilməsini, görünəbilməsini
          təmin etmək üçün hazırlanan dolab. Bu dolabları ev şəraitində də
          istifadə etmək mümkündür. Demontaj mebel — Sökülüb təkrar montaj
          ediləbilən şəkildə istehsal olunmuş mebel. DVP (древесноволокнистые
          плиты) — ağac lifindən olan kütlənin isti preslənməsi prosesində xalça
          şəklində formalaşdırılan təbəqəli material. Bu lifləri ağac xammalını
          xırdalamaqla və buxara verməklə almaq mümkündür. Xammal olaraq
          taxta—şalban hazırlanma prosesindən qalmış qalıqlar, texnoloji
          yonqarlardan və oduncaq ağaclar istifadə edilir. DSP —
          (древесно-стружечная плита) — İsti preslə preslənmiş ağac
          hissəciklərindən ibarət çoxlaylı materialdır. DSP lövhəsi ən sərt
          tələblərə uyğundur— daxili boşluqlar, çatlaqlar kimi çatışmazlıqları
          yoxdur. Ən əhəmiyyətli keyfiyyətləri sırasında yüksək davamlılıq,
          sərtlik, təktərkiblilik, emalda yumşaqlıq, mismar və şurupları möhkəm
          saxlama qabiliyyəti vardır. Düşmə Qapaq— İki yan tərəfindəki millərin
          köməyi ilə dönərək açılan və üfiqi vəziyyətdə durduqda masa kimi də
          istifadə olunabilən mebel qapağı. Finischfolie — Teksturalı incə
          lövhədən hazırlanmış və səthi cila ilə örtülmüş təklaylı materialdır.
          Karniz— Mebel kompozisiyasını tamamlayan, hər hansı profil və ya bir
          neçə profildən hazırlanan xətt elementidir. Karnizin bayır tərəfə
          çıxıntısı olur. Adətən karnizin üstündə attik və ya fronton
          yerləşdirilir. Klass E1 — DSP-nin keyfiyyət standartıdır. Bu o mənaya
          gəlir ki, həmin məhsulun hətta tibbi mebelin hazırlanmasında da
          istifadə edilməsi mümkündür (zərərli maddələrin, xüsusilə konserogen
          formaldegid fenolu maddəsinin çıxarılmasına nəzarət standartı) Laminat
          — Kağız laylı dekorativ materialdır. Laminatın növləri— (High Pressure
          Laminat) — mərtəbəli presslərdə hazırlanan yüksək təzyiqlə preslənmiş
          üzlük materialıdır. CPL (Contiuous Pressure Laminat) — lentli
          presslərdə hazırlanan aşağı təzyiqlə preslənmiş üzlük materialıdır.
          Laminə edilmiş DSP/MDF — Melamin hopdurulmuş xüsusi dekorativ kağız
          örtüklü lövhədir (ona görə bəzən ona melamin lövhəsi deyirlər).
          Laminatlı lövhənin yüksək istehlak xüsusiyyətləri vardır—
          termodayanıqlıdır, nəmə davamlıdır, sürtülməyə və digər zədələrə qarşı
          dayanıqlıdır. Marketri (şəbəkə) — Şpon hissəciklərindən yığılmış
          dəstdir. Məhşur fransız mebelçisi Andre Şarl Bul (1642 — 1732) tısbağa
          qını, qara ağac və bənzəri materialların fonunda bürüncdən mozaik
          naxışlar yığırdı. Bul mazaikası və ya Bull merketrisi adını almış bu
          texnikanın məğzində biri—birinin üstünə qoyulmuş material laylarının
          üzərində eyni zamanda həm fonun həm də haşiyənin elementləri oyulma
          işi durmuşdur MDF — İngilis dilindən götürülmüş Medium Density
          Fiberboard ifadəsinin abreviaturudur. Orta sıxlığa malik taxtalifli
          lövhə mənasını verir. MDF lövhələr ağac liflərindən hazırlanır. Bu da
          lövhələri ekoloji baxımdan qiymətli edir. MDF lövhələri çox möhkəm və
          sıx olur, rənglənmək və ya laminə edilmək üçün idealdır. Laminə etmək
          — Lövhələrin və ya hissələrinin xüsusi kağız plyonka ilə üzlənməsi
          prosesidir. Laminə ancaq isti preslərdə üzlük materialın lövhəyə
          yapışdırılması şəklində həyata keçirilir. Presləmə temperaturu 190 —
          210 C, presləmə müddəti 30—40 saniyədir. Laminə edilmiş lövhə
          mexaniki, kimyəvi təsirə qarşı yüksək dayanıqlıdır. Postforminq —
          Üzlük materiallarının mebel hissələrinin kənarlarına yapışdırılması
          prosesidir. Pressforminq — MDF lövhələrinin işlənmə texnologiyasıdır.
          Bu texnologiya vasitəsilə lövhənin üzərinə dekorativ relyef vurulur.
          PVC — Mebel sənayesində üzlük material kimi istifadə olunur. Bu
          material formaya salındıqdan sonra təkrar emal olunma xassəli
          termoplastlar qrupuna daxildir. Plimer plyonkalar müxtəlif rənglərdə,
          çap və ya relyef şəkillərlə, mat və ya parlaq səthə malikdir.
          Uzunömürlüdür; sirkə turşusu, etil spirt, qələvilərə qarşı
          dayanıqlıdır; tərkibində insan sağlığına zərli maddələr yoxdur.
          Softforminq — Mebel fasadlarının hazırlanması üçün istifadə edilən
          laminə edilmiş DSP—lərin hazırlanması texnologiyasıdır. Tekstura —
          Latın dilində textura — parça, quruluş, birləşmə, tikili mənasını
          daşıyır. Hər—hansı parçanın, materialın daxili strukturu, quruluşu
          əsasında onun səthinin xüsusiyyəti haqda məlumat verir. Tekstura
          materialın obyektiv fiziki və kimyəvi xassələri ilə müəyyən edilir və
          bununla da fakturadan seçilir. Temperlənmiş şüşə — Belə şüşə tipi
          qoruyucu şüşə tipinə daxildir. Standart şüşə paketləri qırıldığında
          xırda parçalara parçalandığı zaman teperlənmiş şüşələr onlardan 4—5
          dəfə daha etibarlıdır və qırıldığı zaman təhlükə yaratmır. Trek
          (yönləndirici) — Kupe dolablarda istifadə olunan xüsusi relslərdir.
          Həmin relslər vasitəsilə kupe—dolabın diyircəklər üzərində
          yerləşdirilmiş qapıları hərəkət edir, açılıb bağlanır. Vitraj— Fransız
          dilində — şüşələmə deməkdir. Latınca "vitrum" — şüşə anlamına gəlir.
          Rəngli şüşədən və ya digər işıq keçirən materialdan hazırlanmış
          dekorativ incəsənət əsəridir. Adətən vitrajlardan pəncərələr, şüşəli
          qapılar, şəffaf arakəsmələr üçün istifadə edilir. Vitrajdan keçən işıq
          şüaları vitrajın rəngini alır və interyerdə xüsusi emosional abı hava
          yaradır.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
