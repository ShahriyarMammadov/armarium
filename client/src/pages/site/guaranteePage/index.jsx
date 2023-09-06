import React from "react";
import "./index.scss";

import guaranteBackGif from "../../../assets/giphy/haqqimizdaBackGif.gif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const GuaranteePage = () => {
  return (
    <div id="guaranteePage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Zəmanət</title>
      </Helmet>
      <div className="backColor">
        <img src={guaranteBackGif} alt="Welcome" loading="lazy" />
      </div>
      <div className="container">
        <div className="navigation">
          <span>
            <Link to={"/"}>
              Home <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/haqqimizda"}>
              Haqqımızda <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>Zəmanət</span>
          </span>
        </div>
        <p>
          Şirkətimiz istehsal etdiyi hər bir məhsul növünə 2 il müddətində
          zəmanət verilir. Zəmanət şərtləri haqqında daha ətraflı məlumatı bu
          bölmədən götürə bilərsiniz. Mebelin alınma tarixinin qəbul edilməsi
          üçün zəmanət müddəti ərzində zəmanət kartı, təhvil-təslim aktı, çek,
          qaimə-faktura və bənzəri sənədləri itirməyin. Sənədlər natamam olduğu
          təqdirdə şirkətin zəmanət xidməti göstərməkdən imtina etmək hüququ
          vardır. <br /> <br />
          <b>Zəmanət şərtləri</b> <br />
          <br /> Zəmanət müddəti mebelin satıldığı gündən başlayaraq 24 ay
          müddətində etibarlıdır. Zəmanət xidməti mebelin bütün hissələri daxil
          olmaqla şirkətin istehsal etdiyi hər model üçün etibarlıdır. Təmir
          müddəti ən çox 30 iş günü təşkil edir. Mebelin təmirdə olduğu vaxt
          kəsiyi zəmanət müddətinə əlavə olunmur. Mebelin zəmanət müddəti
          çərçivəsində mebeldə material, quraşdırma (şirkətin təyin etdiyi
          quraşdırma qrupu tərəfindən yığılıbsa) və ya fabrik xətaları
          aşkarlandığı təqdirdə şirkət hesabına təmir edilir, ehtiyac yarandıqda
          isə təmənnasız olaraq əvəzləşdirilir. Siz aşağıda sadalanmış hallarda
          aldığınız mebelin təmənnasız dəyişdirilməsini tələb edə bilərsiniz:
          Mebelin hər-hansı bir hissəsi bir il ərzində iki dəfə təmir edildikdən
          sonra eyni qüsur təkrar yarandığı təqdirdə; Mebeldə 1 il ərzində 4
          dəfədən artıq müxtəlif qüsurlar yarandığı təqdirdə; Mebeldə 2 il
          ərzində (zəmanət müddəti ərzində) 6 dəfədən artıq müxtəlif qüsurlar
          yarandığı təqdirdə; Təmir üçün təyin olunmuş maksimal müddət (30 gün)
          keçdiyi təqdirdə; Mebelin təmirə yararsız olmağı ekspert tərəfindən
          təsdiqləndiyi təqdirdə. Zəmanət xidmətinə daxil olmayan hallar
          aşağıdakı kimidir: Şirkət tərəfindən təyin olunmamış quraşdırma qrupu
          tərəfindən quraşdırma nəticəsində yaranan qüsurlar; Zəmanət müddətinin
          bitməsi; Bu kitabçada göstərilən mebel istismar qaydalarına riayət
          edilməməsi; Mebelin üzərində təhvil-təslimdən sonra mexaniki zədələrin
          yaranması; Mexanizmlərin normadan artıq yüklənməsi; Mebelin təbii
          fəlakət (sel, yanğın, bədbəxt hadisə, v.s.) nəticəsində zərər görməsi;
          İstehlakçı tərəfindən bilərək və ya bilməyərək mebelə fiziki zərər
          yetirilməsi; Mebelə, təmir məqsədi ilə şirkət tərəfindən təyin
          edilməmiş ustaların müdaxilə etməsi nəticəsində zədələrin
          aşkarlanması; Mebelə istehlakçı tərəfindən konstruktiv dəyişikliyin
          edilməsi nəticəsində zərərin verilməsi; Təmizlik zamanı mebelə zərər
          verə biləcək maddələrdən istifadə olunması; Mebelin yanlış istismarı
          nəticəsində qüsurların yaranması (cızılma, əzilmə, qırılma və.s.)
          Yuxarıda qeyd olunmuş hallar meydana gəldiyi təqdirdə göstərilən
          xidmət ödənişlidir və şirkət tərəfindən təyin edilmiş qiymətlərlə
          həyata keçirilir. Qüsurun xüsusiyyəti mebelə baxış keçirilən zaman
          ekspert tərəfindən təyin edilir. Mebelin qəbulu Quraşdırma işi
          tamamlandıqdan sonra mebeli diqqətlə yoxlayın. Siyirmələrin,
          işıqlandırma sisteminin, yumşaq mebel mexanizmlərinin
          işləyib-işləmədiyinə diqqət yetirin. Qapıların düzgün tənzimlənməsinə,
          mexaniki zədələrin (cızıq, batıq, qopma, mühüm dərəcədə olan rəng
          fərqliliyi) olub-olmamasına baxın. Qeyd etmək istərdik ki, mebel
          təhvil verildikdən sonra aşkarlanmış mexaniki zədələrə aid şikayətlər
          zəmanətli təmir üçün əsas kimi qəbul olunmur. Həmin problemlərin
          aradan qaldırılması ödəniş müqabilində həyata keçirilir. Mebelin
          görünməyən və xarici görünüşünə təsir etməyən hissələrində olan kiçik
          çaplı qüsurlar yol veriləndir. Mebelin çatdırılması "Mebelin
          çatdırılması" dedikdə mebelin alındığı məkandan onun sifarişçi
          tərəfindən göstərilmiş ünvana (ev və digər) daşınması (yükləmə,
          daşıma, boşaltma, ünvana qədər qaldırma) nəzərdə tutulur. Mebelin
          ünvana çatdırılması şirkətimiz tərəfindən Sizə təklif etdiyimiz
          ödənişsiz, lazımi avadanlıq, nəqliyyat vasitələri və personala malik
          xidmətdir. Mebel aldığınızda bu xidmətdən istifadə etməyinizi tövsiyə
          edirik.. Mebelin ünvana çatdırılması şirkətimiz tərəfindən işlənib
          hazırlanan "Mebelin çatdırılması və quraşdırılmasıtəlimatı"na müvafiq
          olaraq həyata keçirilir. Sizə, öz imkanlarınız hesabına mebelin
          daşınmasını həyata keçirməyinizi tövsiyə etmirik. Çünki, mebel
          daşınmasını müstəqil olaraq həyata keçirdikdən sonra, ortaya çıxan
          çatışmazlıqlar zəmanət xidməti daxilində təmin olunmur. Mebelin
          quraşdırılması Mebelin quraşdırılmasında da şirkətimizin müvafiq təlim
          keçmiş personala, lazımi avadanlıq, alət və cihazlara malik, həmçinin,
          "Mebelin çatdırılması və quraşdırılması" təlimatına uyğun olaraq
          fəaliyyət göstərən quraşdırma xidmətindən istifadə etməyinizi tövsiyə
          edirik. Belə olduğu halda, şirkətimiz quraşdırılan mebelin
          keyfiyyətinə görə cavabdehlik daşıyır. Sizə öz imkanlarınız hesabına
          və ya şirkət tərəfindən ixtisaslaşdırılmamış quraşdırıcıların
          xidmətindən istifadə etməklə mebeli quraşdırmaq, təmir etmək və ya
          aksessuarlarını dəyişməyi tövsiyə etmirik. Çünki, mebelin
          quraşdırılması xüsusi peşəkarlıq (müvafiq bilik və bacarıq; mebel
          istehsalının texnologiyası haqqında məlumat; istifadə olunan
          materiallar və konstruksiyalar haqqında məlumat; quraşdırma
          ardıcıllığı; quraşdırmada istifadə olunan bütün avadanlıqlardan
          istifadə bacarığı və b.) və təcrübə tələb edir. Diqqət! Quraşdırma
          Embawood şirkətinə aid olmayan qeyri-peşəkar quraşdırıcılar tərəfindən
          həyata keçirildikdə mebelə verilən zəmanət qüvvədən düşür və həmçinin,
          düzgün quraşdırılmamış mebel istifadə zamanı insanların sağlığı və
          hətta həyatı üçün də təhlükə yarada bilər. Mebeldən ümumi istifadə
          qaydaları Mebelin hər-hansı bir hissəsi ləkələnibsə, həmin hissənin
          dərhal təmizlənməsi tövsiyə olunur. Əgər ləkə bir müddət mebel
          hissəsinin üzərində qalsa, yayıla bilər və mebelin səthi xarab ola
          bilər. Çətin təmizlənən ləkələrin çıxarılması üçün xüsusi təmizlik
          vasitələrindən istifadə etməyiniz tövsiyə olunur. Lazımi vasitənin
          düzgün seçimi üçün onun istifadə təyinatını düzgün oxuyun. Kimyəvi
          təmizlik maddələrinin istifadəsi Turşu, qələvi, həlledici kimi kimyəvi
          maddələrin mebellə təmasına yol verməyin. Həmin maddələr kimyəvi aktiv
          olduğundan onlarla təmas sizə və mebelinizə zərər yetirə bilər. Laklı
          fasad Unutmayın ki, laklı mebelə xüsusi qulluq etməsəniz, tədricən
          mebel öz təravətini itirə bilər. Buna hava şəraiti, ətraf mühit,
          yanlış baxım, günəş şüalarının aşırı təsiri səbəb ola bilər. Laklı
          fasadların təmizlənməsi üçün quru və yumşaq bezlə tərkibində
          cilalayıcı olan təmizlik maddələrindən istifadə etməyiniz tövsiyə
          olunur. Laklı fasad cilalayıcılarından da istifadə edə bilərsiniz,
          onlar eyni zamanda təmizləmə xüsusiyyətinə də malikdir. Panel mebeldən
          istifadə qaydaları: Qapı və siyirmələri zərblə bağlamayın. Belə
          olduqda mebelə qoyulmuş şüşə və güzgülər qırıla, digər hissələr
          (petlə, ray, kranşteyn) sıradan çıxa bilər. Mebelinizin rəf və
          siyirmələri əşyalarla dolu olduğu halda mebelin yerini dəyişdirməyin.
          Mebelin yerini dəyişdikdən sonra, qapı və siyirmələri yenidən
          tənzimləyin. Mebelinizin üzərinə dağılan suyu dərhal silin və
          qurulayın. Rəfləri və siyirmələri normadan artıq yükləməyin. Qapı və
          siyirmələri zərblə açıb-bağlamayın. Mebeldən təyinatına görə istifadə
          edin. Klaviatura siyirməsinin üzərində əyləşmək, jurnal masası və TV
          altlığının üstünə çıxmaq tövsiyə olunmur. Klaviatura siyirməli
          masaların açma - bağlama əməliyyatı tək tərəfli (bir küncdən)
          aparılmamalıdır. Mebelinizi daşıyan zaman hərəkətli hissələrini
          (klaviatura siyirməsi, sadə rəf, siyirmə, v.s..,) çıxararaq daşıyın.
          Əgər həmin hissələri çıxarmırsınızsa mebeli onların açılmayacağı
          istiqamətdə əyərək daşımağınız tövsiyə olunur. Mebelləri itələyərək və
          ya sürüyərək daşımaq olmaz. Bir neçə siyirməsi olan mebellərdə eyni
          anda birdən çox siyirmə açılmamalıdır. Paltar dolabları yalnız
          paltarlar üçün layihələndirilmişdir. Asılqan və rəflərə uyğun olmayan
          əşyaları qoymayın, asmayın. Mebeldə istifadə olunan işıqlandırma
          sistemləri uzun müddət fasiləsiz istifadəyə uyğun deyil. Siyirmələri
          açıq saxlamayın (uşaqlar üstünə çıxıb sındıra bilər). Kupe dolabların
          qapılarını zərblə bağlamayın. İki mərtəbəli çarpayılar: Çarpayıların
          ikinci mərtəbəsinin hündürlüyü 1500mm-dir. 7 yaşından kiçik uşaqların
          istifadəsi tövsiyə olunmur. Çarpayılar yalnız uşağın yatması üçün
          layihələndirilmişdir. Uşağınızın sağlamlığına zərər gəlməməsi və
          çarpayının zədələnməməsi üçün uşaqlara çarpayı üstündə dik dayanmağa,
          tullanmağa, oynamağa icazə verməyin. Qorxuluğa söykənmək, sallanmaq,
          dırmaşmaq olmaz. Döşək haqqında Döşəklərin əsas funksiyalarından biri
          yatarkən bədənin düzgün vəziyyətdə qalmasını təmin etməkdir. Bu da öz
          növbəsində yuxunuzu yaxşılaşdırır. Ümumiyyətlə, döşək sizin
          sağlamlığınıza bir-başa təsir edə biləcək mebel hissələrindən biridir.
          Odur ki, düzgün seçilmiş döşək sizin əhvalınızı xeyli yaxşılaşdıra
          bilər. Döşəyin düzgün istismar qaydaları: Döşəyi aldıqdan sonra ilk 3
          ay, hər iki həftədən bir döşəyi çevirin. Sonrakı periodda 3 ayda bir
          dəfə çevirin. Döşək baş-ayaq şəklində, yəni uzunluq boyu
          çevrilməlidir. Döşək ağır, şaquli yükləməyə məruz qalmamalıdır, yəni
          üzərində hoppanmaq və gəzmək tövsiyə olunmur. Belə yüklənmələr döşəyin
          ömrünü qısaldır. Döşəyin saxlanma və istismarı üçün tələb olunan hava
          şəraiti +10-dan +35 dərəcəyə qədər, nisbi rütubət 70%-dir. Əgər döşək
          daha soyuq hava şəraitində saxlanırsa öz istismar keyfiyyətini itirə
          bilər. Yumşaq mebel: Yumşaq mebeli temperaturu +10 C dərəcədən aşağı
          olmayan, nisbi rütubəti isə 45-70% arası olan havalandırılabilən
          otaqlarda istismar olunmalıdır. Mənfi dərəcədən gətirilən yumşaq mebel
          quru, təmiz və yumşaq bezlə silinməlidir. Mebelinizi birbaşa günəş
          şualarından qoruyun, istilik mənbələrinə, soyuq və nəmli divarlara
          yaxın məsafədə yerləşdirməyin. Laklı və boyalı detalları nəm, turşu,
          qələvi, həlledicilərdən və mexaniki zədələrdən qoruyun. Kitab şəklində
          açılan yumşaq mebelləri açıb-bağlayanda diqqətli olun. Divanı
          açıb-bağlayarkən uşaqları məsafədə saxlayın və ümumiyyətlə bu işi
          uşaqlara tapşırmayın. Kitab şəklində açılan mebelləri divardan ən az
          15 cm aralı yerləşdiriniz. Bu məsafə mebelin funksiyalarını düzgün
          yerinə yetirmək üçün vacibdir. Belə olmadıqda divarı və ya mebelinizi
          zədələyə bilərsiniz. Mebelinizi xalça yuyan və ya digər sulu və
          vakumlu təmizlik cihazları ilə təmizləmək tövsiyə edilmir. Mebelin
          üzərinə çıxmayın, uşaqlara mebelin üzərində hoppanmağa icazə verməyin.
          Mebelin üzərində paltar ütüləməyin. Bundan əlavə işləyən fen, isti
          çaydanlıq və digər istilik yayan ev alətlərini mebelin üzərinə
          qoymayın. Mebelinizin qoltuq hissəsinin üstündə əyləşməyin. Bundan
          əlavə pərdə, şəkil və digər aksesuarları asmaq üçün qoltuğun üzərinə
          çıxmayın. Pərdə asmaq, pəncərə silmək kimi işlərdə mebelinizin
          söykənəcək hissəsindən istifadə etməyin, çünki mexanizmi işə düşə
          bilər. Bu halda həm siz, həm də mebeliniz zədələnə bilər.
          Mexanizmləri, kitab kimi açılan mebellərin sandıqlarını bir kənardan
          tutub açmayın. Bu halda mexanizmlər tez sıradan çıxa bilər. Divanı
          açmaq üçün ortadan, ya da hər iki tərəfdən eyni anda proporsional
          olaraq tutub çəkmək lazımdır. Otaqda mebelin yerini dəyişərkən, mebeli
          itələməyin, qoltuqdan tutub sürüməyin. Belə halda mebelin qoltuğu,
          ayağı və otağın döşəməsi zədələnə bilər. Otaqda mebelin yerini
          dəyişdirmək üçün iki nəfər mebelin alt hissəsindən tutub qaldırmaqla
          həyata keçirmək mümkündür. Mebelin altında qalan xalça və digər döşəmə
          örtüklərinin yerini dəyişdirən zaman mebeli bir tərəfdən tutub
          qaldırmayın. Bu halda mebelin ayağı və digər bağlantı mexanizmləri
          zədələnə bilər. stifadə olunan nərdivanları təyinatına uyğun istifadə
          emək lazımdır. Uşaqlarınıza nərdivanın üstündə tullanmağa,
          pillələrindən sallanmağa icazə verməyin . Güzgülər: Güzgüləri
          təmizlərkən pəncərə təmizliyi üçün təyin olunan sintetik vasitələrdən
          istifadə etməməyiniz tövsiyə olunur. Onlar ləkə və bulanma meydana
          gəlməsinə səbəb ola bilər. Quru təmizləmə də cızıqların əmələ
          gəlməməsi üçün arzu olunan deyil. Güzgü təmizləməsində naşatır
          spirtindən və ya xüsusi güzgü təmizləmə vasitələrindən istifadə edin.
          Şüşələr Şüşələrin həssas olduğunu və zərbə nəticəsində qırıla
          biləcəyini nəzərə alın. Ağır və sərt əşyaları şüşə rəflərin üzərinə
          yığmayın və zərbə vurmayın. Şüşəli rəflərin qalınlığı ən az 4mm-dir.
          Təmizlik üçün xüsusi olaraq təyin olunmuş təmizlik vasitələrindən
          istifadə edin. Təmizlikdə abraziv xüsusiyyətlərə malik təmizlik
          maddələrindən və ya metal tərkibli bez və süngərlərdən istifadə
          etməyin. Hava şəraiti və ətraf mühitin təsiri Mebel yaşayış yerlərində
          istifadə üçün təxsis edilmişdir, quru, isti, havalandırma imkanı olan
          yerlərdə istismar olunmalıdır. Mebelin işığa, rütubətə, istiyə və
          soyuğa həssas olduğunu nəzərə alaraq bu şərtlərin mebelə təsir
          etməməsinə xüsusi diqqət yetirilməlidir. Əks halda, mebelin
          köhnəlməsi, deformasiyası və hissələrinin istismara yararsız hala
          gəlməsi müşahidə oluna bilər. İşıq Günəş şüalarının mebellə bir başa
          təmas etməsinə yol verməyin. Günəş şüalarının mütəmadi olaraq mebellə
          təmasımebel rənginin solmasına, üzləmə materiallarının soyulmasına və
          deformasiyaya yol aça bilər. Temperatur İstilik və ya soyuqluq
          dərəcəsinin yüksəkliyi, və ya hava temperaturunun birdən kəskin olaraq
          dəyişməsi mebelə ciddi ziyan vura bilər. Mebeli soyuq və nəmli
          divarlara və ya istilik mənbələrinə (ən az 1 m) yaxın quraşdırmağınız
          tövsiyə olunmur. Mebelin saxlanılması və istifadə olunması üçün
          tövsiyə olunan istilik +10 - +25 dərəcə arasıdır. Mebelin üstünə
          qaynar alətləri (ütü, isti tava, qaynar çaydan v.s.) qoymayın. Rütubət
          Mebelin istismar edildiyi yer üçün tövsiyə olunan nisbi rütubət 60 -
          70%. Mebeli uzun müddət rütubətli və (və ya) quru (xüsusən mütəmadi
          olaraq dəyişkən) hava şəraitində saxlanması tövsiyə edilmir. Belə hava
          şəraiti zamanla mebelin və ya onun hissələrinin dağılmasına səbəb ola
          bilər. Mebelin istismar edildiyi yerdə bənzər şərait olduğu təqdirdə,
          həmin məkanın ventilyasiyasını təmin etməyiniz vacibdir. Bu məqsədlə,
          hava quruducusu və ya nəmləndiricilərdən istifadə edə bilərsiniz.
          Mebelin səthinin hər zaman quru qalmasına diqqət edin. İslanmış mebel
          səthinin quru və yumşaq bezlə silinməsi tövsiyə olunur. Mebelin üz
          (fasad) hissələrini xüsusi mebel yağları və ya islaq, yumşaq və təmiz
          bezlə silərək təmizləyin, sonra isə dərhal qurulayın. Təmizlik üçün
          kimyəvi maddələrdən (turşu, qələvi, həlledici) istifadə etməyin. Şüşə
          və güzgüləri quru bezlə silin, yağlı və çıxmayan ləkələri suda
          isladılaraq yaxşı sıxılmış yumşaq bezlə silin. Təmizlik Mebelin
          hər-hansı bir hissəsi ləkələnibsə, həmin hissənin dərhal təmizlənməsi
          tövsiyə olunur. Əgər ləkə bir müddət mebel hissəsinin üzərində qalsa,
          yayıla bilər və mebelin səthi xarab ola bilər. Çətin təmizlənən
          ləkələrin çıxarılması üçün xüsusi təmizlik vasitələrindən istifadə
          etməyiniz tövsiyə olunur. Lazımi vasitənin düzgün seçimi üçün onun
          istifadə təyinatını düzgün oxuyun. Kimyəvi təmizlik maddələrinin
          istifadəsi: Turşu, qələvi, həlledici kimi kimyəvi maddələrin mebellə
          təmasına yol verməyin. Həmin maddələr kimyəvi aktiv olduğundan onlarla
          təmas sizə və mebelinizə zərər yetirə bilər. Laklı fasad Unutmayın ki,
          laklı mebelə xüsusi qulluq etməsəniz, tədricən mebel öz təravətini
          itirə bilər. Buna hava şəraiti, ətraf mühit, yanlış baxım, günəş
          şüalarının aşırı təsiri səbəb ola bilər. Laklı fasadların təmizlənməsi
          üçün quru və yumşaq bezlə tərkibində cilalayıcı olan təmizlik
          maddələrindən istifadə etməyiniz tövsiyə olunur. Laklı fasad
          cilalayıcılarından da istifadə edə bilərsiniz, onlar eyni zamanda
          təmizləmə xüsusiyyətinə də malikdir.
        </p>
      </div>
    </div>
  );
};

export default GuaranteePage;
