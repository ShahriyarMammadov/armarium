import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import SiteDetailCardsComponent from "../../../components/admin/siteDetailCard";
import UserDetailComponent from "../../../components/admin/userDetail";
import CalendarComponent from "../../../components/admin/calendar";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddVacancyPage from "../addvacancyPage";
import LoadingComponent from "../../../components/loading";
import AddBlogPage from "../addBlogPage";
import AddNewsPage from "../addNewsPage";
import AddDecorPage from "../addDecorPage";
import AddReferencePage from "../addReferencePage";
import AdminHeader from "../../../layouts/admin/header";
import ContactPage from "../contactPage";
import AddDoorPage from "../addDoorPage";

const DashBoard = () => {
  const { Header, Content, Footer, Sider } = Layout;

  const [userData, setUserData] = useState([]);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const [menuItems, setMenuItems] = useState([
    { key: "1", title: "DashBoard", icon: <UserOutlined /> },
    {
      key: "2",
      title: "Vakansiya Əlavə Et",
      icon: <i className="fa-solid fa-briefcase"></i>,
    },
    {
      key: "3",
      title: "Blog Əlavə Et",
      icon: <i className="fa-solid fa-layer-group"></i>,
    },
    {
      key: "4",
      title: "Xəbər Əlavə Et",
      icon: <i className="fa-solid fa-newspaper"></i>,
    },
    {
      key: "5",
      title: "Dekor Əlavə Et",
      icon: <i className="fa-regular fa-images"></i>,
    },
    {
      key: "6",
      title: "Qapı Əlavə Et",
      icon: <i className="fa-solid fa-door-open"></i>,
    },
    {
      key: "7",
      title: "Referans Əlavə Et",
      icon: <i className="fa-regular fa-building"></i>,
    },
    {
      key: "8",
      title: "Əlaqə",
      icon: <i className="fa-regular fa-id-badge"></i>,
    },
  ]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  const getUserData = async () => {
    const { data } = await axios.get(
      `https://armariumbackend-production.up.railway.app/user/userDataById/${id}`,
      { withCredentials: true }
    );
    setLoading(false);
    setUserData(data);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleMenuClick = async (item) => {
    setSelectedMenuItem(item.key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "1":
        return (
          <>
            {loading ? (
              <LoadingComponent />
            ) : (
              <>
                <SiteDetailCardsComponent data={userData} />
                <UserDetailComponent data={userData} />
                <CalendarComponent />
              </>
            )}
          </>
        );
      case "2":
        return <AddVacancyPage />;
      case "3":
        return <AddBlogPage />;
      case "4":
        return <AddNewsPage />;
      case "5":
        return <AddDecorPage />;
      case "6":
        return <AddDoorPage />;
      case "7":
        return <AddReferencePage />;
      case "8":
        return <ContactPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 115,
            bottom: 0,
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={handleMenuClick}
            // items={items}
          >
            {menuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.title}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
            backgroundColor: "#F3F2F7",
          }}
        >
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <AdminHeader data={userData?.user} />
          </Header>
          <Content
            style={{
              margin: "80px 16px 40px 16px",
              overflow: "initial",
            }}
          >
            {renderContent()}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            ARMARİUM
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DashBoard;
