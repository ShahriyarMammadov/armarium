import React, { useState } from "react";
import { FloatButton } from "antd";
import { Button, Modal, Input, Space, message } from "antd";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { Link } from "react-router-dom";

const FloatButtonComponent = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [firstNum, setFirstNum] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { t } = useTranslation();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: t("Təşəkkür Edirik, Qısa Zamanda Sizinlə Əlaqə Saxlayacıq."),
    });
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    try {
      setLoading(true);
      if (phoneNumber.trim().length !== 0) {
        const data = await axios.post(
          `https://armariumbackend-production.up.railway.app/contactMe/addContactMe`,
          { phoneNumber: firstNum + phoneNumber }
        );
        success();
        setOpen(false);
      } else {
        alert(t("Əlaqə Nömrəsi Qeyd Edin!"));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {contextHolder}
      <FloatButton.Group
        trigger="hover"
        type="success"
        style={{
          left: 24,
        }}
        icon={<i className="fa-solid fa-phone-volume"></i>}
      >
        <FloatButton
          tooltip={<div>{t("Bizə Yazın")}</div>}
          icon={
            <Link to={"/satis_noqteleri"} style={{ color: "black" }}>
              <i className="fa-regular fa-envelope fa-bounce"></i>
            </Link>
          }
        />
        <FloatButton
          onClick={showModal}
          icon={<i className="fa-solid fa-phone fa-shake"></i>}
          tooltip={<div>{t("Sizə Zəng Edək?")}</div>}
        />
      </FloatButton.Group>

      {/* contact Me Modal */}
      <Modal
        open={open}
        title={t(
          "Zəhmət Olmasa Əlaqə Nömrənizi Qeyd Edin, Ən Qısa Zamanda Sizinlə Əlaqə Saxlanılacaq"
        )}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            {t("Çıx")}
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            {t("Göndər")}
          </Button>,
        ]}
      >
        <Space.Compact>
          <Input
            style={{
              width: "20%",
            }}
            defaultValue="+994"
            onChange={(e) => {
              setFirstNum(e.target.value);
            }}
          />
          <Input
            style={{
              width: "80%",
            }}
            placeholder="555-55-55"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Space.Compact>
      </Modal>
    </>
  );
};

export default FloatButtonComponent;
