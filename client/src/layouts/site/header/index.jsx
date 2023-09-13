import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import NavBarDropdownComponent from "../../../components/dropdown/navbarDropdown";
import { Button, Drawer, Dropdown, Input, Modal, notification } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../../../locales/i18n";
import axios from "axios";
import { useCookies } from "react-cookie";

import en from "../../../assets/images/en.jpg";
import tr from "../../../assets/images/tr.jpg";
import az from "../../../assets/images/az.png";

const Header = () => {
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

  // COOKIE
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

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
            MÜŞTƏRİ XİDMƏTLƏRİ
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
            to={"/mebel/all_models"}
            className="drawerATeg"
            onClick={onClose}
          >
            BÜTÜN MODELLLƏR
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

  // LOGIN
  const navigate = useNavigate();

  const login = async () => {
    try {
      setLoading(true);
      let data = await axios.post(
        `http://localhost:3000/auth/signIn`,
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      setLoading(false);

      if (data?.data?.created) {
        if (data?.data?.data?.role === "admin") {
          openNotificationWithIcon(data?.data?.message, "success");
          navigate(`/admin/adminData/${data?.data?.data?._id}`);
        } else {
          openNotificationWithIcon("SIZ ADMIN DEYILSINIZ!!!", "warning");
          setOpenModal(false);
        }
      } else {
        openNotificationWithIcon(
          data?.data?.message?.email
            ? data?.data?.errors?.email
            : data?.data?.errors?.password,
          "error"
        );
      }
    } catch (error) {
      console.log("catch", error);
      openNotificationWithIcon("Server Error", "error");
      setLoading(false);
    }
  };

  const checkAdmin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:3000/checkAdmin",
        {},
        {
          withCredentials: true,
        }
      );
      if (!data?.success) {
        setOpenModal(false);
        removeCookie("jwt");
        openNotificationWithIcon(data?.message, "error");
      } else {
        navigate(`/admin/adminData/${data?.data?.id}`);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // NOTIFICATION
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (text, type) => {
    api[type]({
      message: "Armarium",
      description: text,
    });
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
        `http://localhost:3000/search/searchByName/${value.toLocaleLowerCase()}`
      );
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(searchResult);

  return (
    <header className={`${colorChange ? "colorChange" : ""}`}>
      {contextHolder}
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

              <h4>Nəticələr:</h4>
              <hr />
              {searchResult.length === 0 ? (
                <h3>Heç Bir Nəticə Tapılmadı</h3>
              ) : (
                searchResult?.map((e, i) => {
                  return (
                    <>
                      <div key={i} className="searchResult">
                        <p>Kateqoriya: {e?.category}</p>
                        {e?.results.map((e, i) => {
                          return (
                            <>
                              <div className="resultsDescription">
                                <Link to={`${e?.category}`}>
                                  <p>{e?.name}</p>
                                  {e?.coverImage ? (
                                    <img
                                      src={`http://localhost:3000/images/${e?.coverImage}`}
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

            {localStorage.getItem("role") == "admin" ? (
              <i
                className="fa-solid fa-right-to-bracket"
                onClick={() => {
                  cookies.jwt ? checkAdmin() : showModal();
                }}
              ></i>
            ) : null}
          </div>
        </div>

        {/* MODAL */}
        <Modal
          open={openModal}
          title="LOGIN"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              ÇIX
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={() => {
                login();
              }}
            >
              DAXIL OL
            </Button>,
          ]}
        >
          <Input
            placeholder="Email"
            prefix={<UserOutlined />}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <br />
          <Input.Password
            placeholder="Password"
            prefix={<i className="fa-solid fa-lock"></i>}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Modal>

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
