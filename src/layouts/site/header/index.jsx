import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import NavBarDropdownComponent from "../../../components/dropdown/navbarDropdown";
import { Button, Drawer, Dropdown, Input, Modal } from "antd";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../../../locales/i18n";
import axios from "axios";

import en from "../../../assets/images/en.jpg";
import tr from "../../../assets/images/tr.jpg";
import az from "../../../assets/images/az.png";

const Header = () => {
  let location = useLocation();

  // SCROLL
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const { Search } = Input;

  // HEADER COLOR CHANGE
  const [colorChange, setColorChange] = useState(false);

  const [searchModal, setsearchModal] = useState(false);

  const showSearchModal = () => {
    setsearchModal(true);
  };

  // DRAWER OPEN, CLOSE
  const [toggle, setToggle] = useState(false);

  // MODAL PASSWORD INPUT
  const [visible, setVisible] = useState(true);

  // PASSWORD AND EMAIL SEND TO BACKEND
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // LANGUAGE
  const { t } = useTranslation();

  // HEADERTOP VISIBLE
  const threshold = 50;
  const scrollThreshold = 150;

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

  // MODAL
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenModal(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };

  const items = [
    {
      key: "1",
      label: (
        <img
          src={az}
          alt="AZ"
          title="AZ"
          width={"28px"}
          height={"20px"}
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
          width={"28px"}
          height={"20px"}
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
          width={"28px"}
          height={"20px"}
          onClick={() => handleChange("en")}
        />
      ),
    },
  ];

  const items1 = [
    {
      key: "1",
      label: "HAQQIMIZDA",
      children: (
        <>
          <Link to={"/haqqimizda"} className="drawerATeg" onClick={onClose}>
            HAQQIMIZDA
          </Link>
          <Link
            to={"/haqqimizda/zemanet"}
            className="drawerATeg"
            onClick={onClose}
          >
            ZƏMANƏT
          </Link>
          <Link
            to={"/haqqimizda/musteri_xidmeti"}
            className="drawerATeg"
            onClick={onClose}
          >
            MISSIYA
          </Link>
          <Link
            to={"/haqqimizda/terminler"}
            className="drawerATeg"
            onClick={onClose}
          >
            TERMİNLƏR
          </Link>
        </>
      ),
    },
    {
      key: "2",
      label: "MEBEL",
      children: (
        <>
          <Link
            to={"/mebeller/all_models"}
            className="drawerATeg"
            onClick={onClose}
          >
            BÜTÜN MODELLƏR
          </Link>
          <Link
            to={"/mebeller/qapilar"}
            className="drawerATeg"
            onClick={onClose}
          >
            QAPILAR
          </Link>
        </>
      ),
    },
    {
      key: "3",
      label: "VAKANSİYALAR",
      children: (
        <>
          <Link to={"/vakansiyalar"} className="drawerATeg" onClick={onClose}>
            VAKANSİYALAR
          </Link>
        </>
      ),
    },
    {
      key: "4",
      label: "REFERANSLAR",
      children: (
        <>
          <Link to={"/referanslar"} className="drawerATeg" onClick={onClose}>
            REFERANSLAR
          </Link>
        </>
      ),
    },
    {
      key: "5",
      label: "SATIŞ NÖQTƏLƏRİ",
      children: (
        <>
          <Link
            to={"/satis_noqteleri"}
            className="drawerATeg"
            onClick={onClose}
          >
            SATIŞ NÖQTƏLƏRİ
          </Link>
        </>
      ),
    },
    {
      key: "6",
      label: "XƏBƏRLƏR",
      children: (
        <>
          <Link to={"/xeberler"} className="drawerATeg" onClick={onClose}>
            XƏBƏRLƏR
          </Link>
          <Link to={"/xeberler/blog"} className="drawerATeg" onClick={onClose}>
            BLOQ
          </Link>
        </>
      ),
    },
  ];

  const onChange = (key) => {
    // console.log(key);
  };

  // SEARCH
  const handleSearchOk = () => {
    setLoading(true);
  };

  const handleSearchCancel = () => {
    setsearchModal(false);
  };

  const [searchResult, setSearchResult] = useState([]);

  const onSearch = async (value, _e) => {
    try {
      const { data } = await axios.post(
        `https://armariumbackend-production.up.railway.app/search/searchByName/${value.toLocaleLowerCase()}`
      );
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header
      style={
        location.pathname === "/satis_noqteleri"
          ? { backgroundColor: "#1b1b1b" }
          : {}
      }
      className={`${colorChange ? "colorChange" : ""}`}
      id={`${visible ? "" : "resize"}`}
    >
      <div id="header" className="container">
        <div className={`${visible ? "active" : "inactive"} headerTop`}>
          <div className="left">
            <div className="icon">
              <a
                href="https://www.instagram.com/armariumkitchendoor/"
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
              <a href="tel:+994512908127">
                {t("ƏLAQƏ")}: <span>+99451 290 8127</span>
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
            <div className="search" onClick={showSearchModal}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <Modal
              open={searchModal}
              title={t("AXTARIŞ")}
              onOk={handleSearchOk}
              onCancel={handleSearchCancel}
              footer={[
                <Button key="back" onClick={handleSearchCancel}>
                  ÇIX
                </Button>,
              ]}
            >
              <Search
                placeholder={t("Axtarış edin")}
                onSearch={onSearch}
                style={{
                  width: "100%",
                }}
              />

              {searchResult.length === 0 ? (
                <h4>Nəticə Tapılmadı</h4>
              ) : (
                searchResult?.map((e, i) => {
                  return (
                    <>
                      <div key={i} className="searchResult">
                        <p>Kateqoriya: {e?.category}</p>
                        {e?.results.map((e, i) => {
                          return (
                            <>
                              <div className="resultsDescription" key={i}>
                                <Link to={`${e?.name}`}>
                                  <p>{e?.name}</p>
                                  {e?.coverImage ? (
                                    <img
                                      src={`https://armariumbackend-production.up.railway.app/images/${e?.coverImage}`}
                                      alt="error"
                                    />
                                  ) : null}
                                </Link>
                              </div>
                              <hr />
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })
              )}
            </Modal>
          </div>
        </div>

        <hr className={`${visible ? "active" : "inactive"}`} />

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
                <p className="slogan">Xəyallarınızı Armarium ilə süsləyin</p>
              </div>
              <div className="right about">
                <div className="contact">
                  <a href="tel:+99512908127" className="telephoneNumber">
                    {t("Telefon")}: +99451 290 8127
                  </a>
                  <br />
                  <a href="mailto:armarium@armarium.az" className="email">
                    Email: armarium@armarium.az
                  </a>
                </div>
                <address>Sumqayıt şossesi, döngə 1, n50</address>
                <a
                  href="https://www.google.com/maps/place/40%C2%B026'43.9%22N+49%C2%B046'39.9%22E/@40.4455163,49.7752114,17.05z/data=!4m4!3m3!8m2!3d40.4455261!4d49.7777519?entry=ttu"
                  className="googleMaps"
                  target="_blank"
                >
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {t("Google Xəritədə aç")}
                </a>
                <div className="icon">
                  <a
                    href="https://www.instagram.com/armariumkitchendoor/"
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

        {/* RESPONSIVE DRAWER*/}
        <Drawer title="ARMARIUM" placement="left" onClose={onClose} open={open}>
          <Collapse
            items={items1}
            // defaultActiveKey={["1"]}
            onChange={onChange}
          />
          <div className="drawerContent">
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

            <div className="search" onClick={showSearchModal}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
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
