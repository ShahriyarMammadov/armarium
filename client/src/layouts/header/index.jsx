import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NavBarDropdownComponent from "../../components/dropdown/navbarDropdown";
import { Drawer, Dropdown } from "antd";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18n";

import en from "../../assets/images/en.png";
import tr from "../../assets/images/tr.png";
import az from "../../assets/images/az.png";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [colorChange, setColorChange] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(true);

  const { t } = useTranslation();

  const threshold = 50;
  const scrollThreshold = 400;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos < threshold;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);

      if (currentScrollPos >= scrollThreshold) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // LANGUAGE
  const handleChange = (value) => {
    i18n.changeLanguage(value);
    localStorage.setItem("lang", value);
  };

  let language;

  if (typeof localStorage !== "undefined") {
    language =
      localStorage.getItem("lang") !== null
        ? localStorage.getItem("lang")
        : localStorage.getItem("defaultLang");
  } else {
    language = i18n.language || "az";
  }

  // DRAWER
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setToggle(false);
    setOpen(false);
  };

  const items = [
    {
      key: "1",
      label: (
        <img
          src={az}
          alt="AZ"
          title="AZ"
          width={"25px"}
          height={"15px"}
          onClick={() => handleChange("az")}
        />
      ),
    },
    {
      key: "2",
      label: (
        <img
          src={tr}
          alt="TR"
          title="TR"
          width={"25px"}
          height={"15px"}
          onClick={() => handleChange("tr")}
        />
      ),
    },
    {
      key: "3",
      label: (
        <img
          src={en}
          alt="EN"
          title="EN"
          width={"25px"}
          height={"15px"}
          onClick={() => handleChange("en")}
        />
      ),
    },
  ];

  console.log(language);

  const items1 = [
    {
      key: "1",
      label: "HAQQIMIZDA",
      children: <p>asdasf</p>,
    },
    {
      key: "2",
      label: "MEBEL",
      children: <p>salam</p>,
    },
    {
      key: "3",
      label: "VAKANSİYALAR",
      children: <p>sdg</p>,
    },
    {
      key: "4",
      label: "REFERANSLAR",
      children: <p>sdg</p>,
    },
    {
      key: "5",
      label: "SATIŞ NÖQTƏLƏRİ",
      children: <p>sdg</p>,
    },
    {
      key: "6",
      label: "XƏBƏRLƏR",
      children: <p>sdg</p>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <header className={`${colorChange ? "colorChange" : ""}`}>
      <div id="header" className={`container ${visible ? "" : "resize"}`}>
        <div className={`${visible ? "active" : "inactive"} headerTop`}>
          <div className="left">
            <div className="icon">
              <a
                href="https://www.linkedin.com/company/armarium-kitchen-doors/"
                target="_blank"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094702263939&mibextid=b06tZ0"
                target="_blank"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/armarium-kitchen-doors/"
                target="_blank"
                title="Linkedin"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://youtube.com/@ArmariumKitchenDoor?si=j7Qwq0W9UVI8LdtA"
                target="_blank"
                title="YouTube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href="https://www.tiktok.com/@armarium.kitchen.doors?_t=8f8MaT1soIk&_r=1"
                target="_blank"
                title="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <div className="telephoneNumber">
              <a href="tel:+994503134473">
                {t("ƏLAQƏ")}: <span>+99450 313 4473</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="language">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottom"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <img
                  src={language === "az" ? az : language === "tr" ? tr : en}
                  alt="AZ"
                />
              </Dropdown>
            </div>

            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <hr className={`${visible ? "active" : "inactive"} headerTop`} />

        <div className="headerBottom container">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="Armarium" />
            </Link>
            <div className="card">
              <div className="left cardLogo">
                <div className="cardImg">
                  <img src={logo} alt="Armarium" />
                </div>
                <p className="slogan">Lorem ipsum dolor sit amet. (Slogan)</p>
              </div>
              <div className="right about">
                <div className="contact">
                  <a href="tel:+994503134473" className="telephoneNumber">
                    {t("Telefon")}: +99450 313 4473
                  </a>
                  <br />
                  <a href="mailto:armarium@armarium.az" className="email">
                    Email: armarium@armarium.az
                  </a>
                </div>
                <address>
                  İnterpak Ahşap ve Ürünleri San. Tic. Ltd. Şti. Atatürk
                  Olimpiyat Parkı Yolu E6 Gişeler Yanı MASKO Mobilya Kenti 2-B
                  Blok No:22-24 İkitelli / İSTANBUL , TÜRKİYE
                </address>
                <a
                  href="https://www.google.com/maps/place/X%C4%B1rdalan+dair%D3%99si/@40.4409891,49.7703011,17z/data=!3m1!4b1!4m6!3m5!1s0x4030866c1ef7474d:0x7c7d8e76b0d5768b!8m2!3d40.440985!4d49.772876!16s%2Fg%2F11b5yvnbd3?entry=ttu"
                  className="googleMaps"
                  target="_blank"
                >
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {t("Google Xəritədə aç")}
                </a>
                <div className="icon">
                  <a
                    href="https://www.linkedin.com/company/armarium-kitchen-doors/"
                    target="_blank"
                    title="Instagram"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100094702263939&mibextid=b06tZ0"
                    target="_blank"
                    title="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/armarium-kitchen-doors/"
                    target="_blank"
                    title="Linkedin"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://youtube.com/@ArmariumKitchenDoor?si=j7Qwq0W9UVI8LdtA"
                    target="_blank"
                    title="YouTube"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@armarium.kitchen.doors?_t=8f8MaT1soIk&_r=1"
                    target="_blank"
                    title="TikTok"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <NavBarDropdownComponent />
          </nav>
        </div>

        {/* RESPONSIVE */}
        {/* <Button type="primary" onClick={showDrawer}>
          Open
        </Button> */}
        <Drawer
          title="Basic Drawer"
          placement="left"
          onClose={onClose}
          open={open}
        >
          <Collapse
            items={items1}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
          ;
        </Drawer>
        <div
          id="btn"
          className={`${toggle ? "on" : ""}`}
          onClick={() => {
            setToggle(!toggle);
            showDrawer();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
