import React from "react";
import "./index.scss";
import backImage from "../../assets/images/1.jpg";
import blogImage from "../../assets/images/blogImage1.jpg";

const BlogDetailPage = () => {
  return (
    <div id="blogDetail">
      <div className="backImage">
        <img src={backImage} alt="image" />
      </div>
      <div className="blogDetail container">
        <div className="text">
          <p>
            Rahat və funksional mətbəxin sirri bahalı mebel və təmirdə deyil -
            burada əsas şey məkanı düzgün planlaşdırmaq və
            prioritetləşdirməkdir. Mükəmməl nəticə əldə etməyin necə daha asan
            olduğunun sirlərini açırıq. <br />
            <br />
            1. Maksimum fayda Məkana qənaət və mövcud kvadrat metrdən səmərəli
            istifadə, gələcək mətbəxin layihəsinin əsasını təşkil etməli olan
            fikirdir. Quraşdırılmış məişət texnikası, əlavə hündürlükdə divar
            blokları, aralıq rəflər, bölücülər və qapıların daxili səthindən
            istifadə edərək daxili saxlama optimallaşdırılması - bu həllər sizə
            mətbəx məkanınızı ağıllı şəkildə idarə etməyə kömək edəcək. <br />
            <br />
            2. Rahat işləyən üçbucaq İş səthi, soyuducu və lavabonun arasında
            olan boşluq da artan diqqət tələb edir. Erqonomika qaydalarına
            əsasən, mətbəxi təchiz etmək lazımdır ki, işçi üçbucağın
            tərəflərinin cəmi üç ilə yeddi metr arasında qalsın. <br />
            <br />
            3. İş sahəsi Rahat hündürlükdə iş masası mətbəxdə sürətli işin
            açarıdır. Çaydan, mikrodalğalı soba, qarışdırıcı, yavaş soba və s.
            zəruri əşyalardır, lakin onlar iş sahəsinin böyük bir hissəsini
            tutaraq, narahatlıq yarada bilər. Planlaşdırma mərhələsində, iş
            səthini mümkün qədər boşaltmaq üçün hansı kiçik məişət cihazlarının
            təzgahın üstündəki modulların üst sırasına və ya ayrı bir ara rəfə
            qaldırıla biləcəyinizi düşünün. İşləmək üçün kifayət qədər yer
            olmadıqda, mətbəxdə bir bar sayğacını təchiz edə və ya pəncərə
            silləsini korpusa bağlaya, gücləndirib təzgahla əvəz edə bilərsiniz.{" "}
            <br />
            <br />
            4. Mətbəx üçün praktik önlük Bunun üçün ucuz panellərdən istifadə
            edərək mətbəxin arxa səthinə qənaət etmək şübhəli bir qərardır,
            bununla da mətbəx görünüşünü və dayanıqlığını əhəmiyyətli dərəcədə
            itirəcəkdir. Burada keramik plitələr və ya şüşə seçmək daha yaxşıdır
            - təmizləmək asandır, onlar divarı qoruyacaq və mətbəxin ümumi
            görünüşünü yaxşılaşdıracaq. <br />
            <br />
          </p>
        </div>
        <img src={blogImage} alt="blofs" className="blogImage" />
      </div>
    </div>
  );
};

export default BlogDetailPage;
