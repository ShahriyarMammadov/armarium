import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Collapse, Form, Input, Popconfirm, message } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../../components/loading";

const AddVacancyPage = () => {
  const { id } = useParams();
  const [name, setVacancyName] = useState("");
  const [description, setVacancyDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const [allVacancies, setAllVacancies] = useState([]);

  const getAllVacancies = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/vacancy/allVacancy`
      );
      setAllVacancies(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllVacancies();
  }, []);

  const vacancyDelete = async (name) => {
    try {
      console.log(name);
      const deleteVacancy = await axios.delete(
        `http://localhost:3000/vacancy/deleteVacancyByName/${name}`
      );
      message.success("vakansiya uğurla silindi");
      getAllVacancies();
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    message.error("SİLİNMƏDİ");
  };

  const addVacancy = async () => {
    try {
      setLoading(true);
      const addData = await axios.post(
        `http://localhost:3000/vacancy/addVacancy/${id}`,
        {
          name,
          description,
        }
      );
      getAllVacancies();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const items = allVacancies?.map((data) => ({
    key: data?.id?.toString(),
    label: (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {data?.name}
          <Popconfirm
            title="Vakansiya"
            description="Vakansiya Həmişəlik Silinsin?"
            onConfirm={() => {
              vacancyDelete(data?.name);
            }}
            onCancel={cancel}
            okText="SİL"
            cancelText="BAĞLA"
          >
            {/* <Button danger>Delete</Button> */}
            <i
              className="fa-regular fa-trash-can"
              style={{ color: "red" }}
              // onClick={() => {
              //   vacancyDelete(data?.name);
              // }}
            ></i>
          </Popconfirm>
        </div>
      </>
    ),
    children: (
      <>
        <p>
          {data?.description?.split("<br />").map((line, lineIndex) => (
            <React.Fragment key={lineIndex}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </>
    ),
  }));

  console.log("items", items);

  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="activeVacancies">
          <h4>BÜTÜN VAKANSİYALAR</h4>
          {allVacancies.length === 0 ? (
            <h1>HEÇ BİR VAKANSİYA YOXDUR.</h1>
          ) : (
            <Collapse
              // defaultActiveKey={["1"]}
              accordion
              items={items}
              size="large"
            />
          )}
        </div>
      )}

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="vertical"
        initialValues={{
          size: "default",
        }}
        // onValuesChange={onFormLayoutChange}
        size={"default"}
        style={{
          margin: "0 auto",
        }}
      >
        <Form.Item label="Vakansiyanın Adı:">
          <Input
            onChange={(e) => {
              setVacancyName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Tələblər: ">
          <Input
            onChange={(e) => {
              setVacancyDescription(e.target.value);
            }}
          />
          <p
            style={{
              color: "red",
              fontSize: "12px",
              margin: "0",
              fontWeight: "900",
            }}
          >
            TƏLƏBLƏR ƏLAVƏ EDƏRKƏN CÜMLƏNİN YENİ SƏTİRDƏN BAŞLAMASI ÜÇÜN ƏVVƏLKİ
            CÜMLƏNİN SONUNA {`<br />`} ƏLAVƏ EDİN
          </p>
        </Form.Item>

        <Form.Item label="Əlavə Edilsin?">
          <Button
            loading={loading}
            onClick={() => {
              addVacancy();
            }}
          >
            Əlavə Et
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddVacancyPage;
