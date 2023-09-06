import React from "react";
import "./index.scss";
import { Descriptions, Input } from "antd";

const UserDetailComponent = () => {
  const items = [
    {
      key: "1",
      label: "UserName",
      children: <Input placeholder="Basic usage" />,
    },
    {
      key: "2",
      label: "Telephone",
      children: <Input placeholder="Basic usage" />,
    },
    {
      key: "3",
      label: "Live",
      children: "Hangzhou, Zhejiang",
    },
    {
      key: "4",
      label: "Remark",
      children: <Input placeholder="Basic usage" />,
    },
    {
      key: "5",
      label: "Address",
      children: <Input placeholder="Basic usage" />,
    },
    {
      key: "6",
      label: "Address",
      children: <Input placeholder="Basic usage" />,
    },
    {
      key: "7",
      label: "Address",
      children: <Input placeholder="Basic usage" />,
    },
  ];

  return (
    <div id="userDetail">
      {/* <div className="userDetail">
        <Form.Item label="Success" hasFeedback validateStatus="success">
          <Input allowClear placeholder="with allowClear" />
        </Form.Item>
      </div> */}
      <Descriptions title="Info" items={items} />
    </div>
  );
};

export default UserDetailComponent;
