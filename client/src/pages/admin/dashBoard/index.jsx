import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const DashBoard = () => {
  const { Header, Content, Footer, Sider } = Layout;

  const [userData, setUserData] = useState([]);
  const [vacancy, setVacancy] = useState([]);
  const [blog, setBlog] = useState([]);
  const [news, setNews] = useState([]);
  const [decor, setDecor] = useState([]);
  const [references, setReferences] = useState([]);

  const [loading, setLoading] = useState(true);

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
      title: "Referans Əlavə Et",
      icon: <i className="fa-regular fa-building"></i>,
    },
  ]);

  // const items = [
  //   UserOutlined,
  //   VideoCameraOutlined,
  //   UploadOutlined,
  //   BarChartOutlined,
  //   CloudOutlined,
  //   AppstoreOutlined,
  //   TeamOutlined,
  //   ShopOutlined,
  // ].map((icon, index) => ({
  //   key: String(index + 1),
  //   icon: React.createElement(icon),
  //   label: `nav ${index + 1}`,
  // }));

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  const handleMenuClick = async (item) => {
    setSelectedMenuItem(item.key);

    if (item.key === "1") {
      const { data } = await axios.get(
        `http://localhost:3000/user/userDataById`
      );
      setUserData(data);
      console.log(data);
    }
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "1":
        return <p>İçerik 1</p>;
      case "2":
        return <p>İçerik 2</p>;
      case "3":
        return <p>İçerik 3</p>;
      case "4":
        return <p>İçerik 4</p>;
      case "5":
        return <p>İçerik 5</p>;
      case "6":
        return <p>İçerik 6</p>;
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
            top: 70,
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
          }}
        >
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div>salaam</div>
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
              backgroundColor: "red",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default DashBoard;
