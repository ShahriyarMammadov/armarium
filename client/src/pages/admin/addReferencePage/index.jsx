import React, { useEffect, useState } from "react";
import "./index.scss";
import {
  Button,
  Form,
  Input,
  Popconfirm,
  message,
  Image,
  Typography,
} from "antd";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../components/loading";

const addReferencePage = () => {
  const { id } = useParams();
  const [name, setReferenceName] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [images, setİmages] = useState([]);
  const [loading, setLoading] = useState(true);

  const { Text } = Typography;

  const [sliceCount, setSliceCount] = useState(5);

  const [reference, setAllReference] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const handleImagesChange = (e) => {
    const selectedFiles = e.target.files;
    const newImages = Array.from(selectedFiles);
    setİmages([...images, ...newImages]);
  };

  const getAllReference = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/reference/allReferences`
      );
      setAllReference(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllReference();
  }, []);

  const deleteReference = async (name) => {
    try {
      setLoading(true);
      const deleteDecor = await axios.delete(
        `http://localhost:3000/reference/deleteReferanceByName/${name}`
      );
      message.success("Dekor uğurla silindi");
      getAllReference();
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    message.error("SİLİNMƏDİ");
  };

  const addReference = async () => {
    try {
      if (name.length === 0 || coverImage.length === 0 || images.length === 0) {
        return message.error("Zəhmət olmasa xanaları tam doldurun!");
      } else if (images.length > 14) {
        return message.error("14-dən çox şəkil yükləmək olmaz!");
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("name", name);
      images.forEach((image, index) => {
        formData.append("images", image);
      });

      const addData = await axios.post(
        `http://localhost:3000/reference/addReference/${id}`,
        formData
      );
      getAllReference();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="adminDecor">
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <h4>BÜTÜN REFERANSLAR</h4>
          {reference.length === 0 ? (
            <>
              <h1>HEÇ BİR REFERANS PAYLAŞMAMISINIZ.</h1>
            </>
          ) : (
            <div id="reference">
              <>
                <div className="grid-container container">
                  {reference?.map((e, i) => {
                    const imageUrls = e?.images.map(
                      (image) => `http://localhost:3000/images/${image}`
                    );
                    return (
                      <>
                        <div style={{ position: "relative" }} key={i}>
                          <Image.PreviewGroup items={imageUrls} key={i}>
                            <Image
                              src={`http://localhost:3000/images/${e?.coverImage}`}
                            />
                          </Image.PreviewGroup>
                          <Text
                            style={{
                              position: "absolute",
                              top: "20px",
                              right: "20px",
                              color: "white",
                              fontWeight: "bold",
                              backgroundColor: "rgba(0, 0, 0, 0.5)",
                              padding: "6px 10px",
                            }}
                          >
                            <Popconfirm
                              title="REFERANS"
                              description="Referans Həmişəlik Silinsin?"
                              onConfirm={() => {
                                deleteReference(e?._id);
                              }}
                              onCancel={cancel}
                              okText="SİL"
                              cancelText="BAĞLA"
                            >
                              <i
                                className="fa-regular fa-trash-can"
                                style={{
                                  color: "red",
                                  cursor: "pointer",
                                  fontSize: "24px",
                                  marginRight: "20px",
                                }}
                              ></i>
                            </Popconfirm>
                            {e?.name}
                          </Text>
                        </div>
                      </>
                    );
                  })}
                </div>
                <div className="sliceBtn">
                  <button
                    onClick={() => {
                      setSliceCount(sliceCount + 5);
                    }}
                  >
                    DAHA ÇOX
                  </button>
                </div>
              </>
            </div>
          )}
        </>
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
        <Form.Item label="Referansın Adı:">
          <Input
            onChange={(e) => {
              setReferenceName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Örtük Şəkli: ">
          <input type="file" name="coverImage" onChange={handleFileChange} />
        </Form.Item>
        <Form.Item label="Şəklillər: ">
          <input
            type="file"
            name="images"
            onChange={handleImagesChange}
            multiple
          />
          <p
            style={{
              color: "red",
              fontSize: "12px",
              margin: "0",
              fontWeight: "900",
            }}
          >
            BİR DƏFƏYƏ MAKSİMUM 14 ƏDƏD ŞƏKİL YÜKLƏMƏK MÜMKÜNDÜR
          </p>
        </Form.Item>

        <Form.Item label="Əlavə Edilsin?">
          <Button
            loading={loading}
            onClick={() => {
              addReference();
            }}
          >
            Əlavə Et
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default addReferencePage;
