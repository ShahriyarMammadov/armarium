import React from "react";
import { Dropdown, Space } from "antd";
import en from "../../assets/images/en.png";
import tr from "../../assets/images/tr.png";
import az from "../../assets/images/az.png";

const DropdownComponent = () => {
  const items = [
    {
      key: "1",
      label: `EN`,
      icon: <img src={en} width="18px" height="12px" />,
    },
    {
      key: "2",
      label: "TR",
      icon: <img src={tr} width="18px" height="12px" />,
    },
    {
      key: "3",
      label: "AZ",
      icon: <img src={az} width="18px" height="12px" />,
    },
  ];

  const handleLanguageChange = (e) => {
    e.preventDefault();
  };

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        defaultSelectedKeys: ["1"],
      }}
    >
      <a onClick={(e) => handleLanguageChange(e)}>
        <Space>
          <img src={az} alt="language" width={"30px"} height={"22px"} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownComponent;
