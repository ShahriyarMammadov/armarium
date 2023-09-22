import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Form, Image, Input, Popconfirm, message } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingComponent from "../../../components/loading";

const AddDoorPage = () => {
  const [id, setId] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [sliceCount, setSliceCount] = useState(4);

  const [loading, setLoading] = useState(true);

  const [doors, setAllDoor] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const getAllDoor = async () => {
    try {
      const { data } = await axios.get(
        `https://armariumbackend-production.up.railway.app/door/allDoors`
      );
      setAllDoor(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllDoor();
  }, []);

  const deleteDoor = async (id) => {
    try {
      setLoading(true);
      const deleteDoor = await axios.delete(
        `https://armariumbackend-production.up.railway.app/door/deleteDoor/${id}`
      );
      message.success("Qapı uğurla silindi");
      getAllDoor();
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    message.error("SİLİNMƏDİ");
  };

  const addDoor = async () => {
    try {
      if (id.length === 0 || coverImage.length === 0) {
        return message.error("Zəhmət olmasa xanaları tam doldurun!");
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("id", id);

      const { data } = await axios.post(
        `https://armariumbackend-production.up.railway.app/door/addDoor`,
        formData
      );
      message.success(data.message);
      getAllDoor();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div id="addDoor">
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <h4>BÜTÜN QAPILAR</h4>
          {doors.length === 0 ? (
            <>
              <h1>HEÇ BİR QAPI PAYLAŞMAMIŞSINIZ.</h1>
            </>
          ) : (
            <div id="doorAdmin">
              <div className="imagesCards">
                <div className="grid-container container">
                  {doors?.slice(0, sliceCount).map((e, i) => {
                    return (
                      <>
                        <div className="grid-content">
                          <Image
                            key={4}
                            src={`https://armariumbackend-production.up.railway.app/images/${e?.coverImage}`}
                          />
                          <p>
                            {e?.id}{" "}
                            <Popconfirm
                              title="QAPILAR"
                              description="Qapı Həmişəlik Silinsin?"
                              onConfirm={() => {
                                deleteDoor(e?._id);
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
                                  fontSize: "20px",
                                  marginLeft: "15px",
                                }}
                              ></i>
                            </Popconfirm>
                          </p>
                        </div>
                      </>
                    );
                  })}
                </div>
                <button
                  onClick={() => {
                    setSliceCount(sliceCount + 12);
                  }}
                >
                  DAHA ÇOX
                </button>
              </div>
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
        size={"default"}
        style={{
          margin: "0 auto",
        }}
      >
        <Form.Item label="Qapının İD-si">
          <Input
            style={{
              padding: "10px",
              fontWeight: "700",
            }}
            onChange={(e) => {
              setId(e.target.value);
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
            ID Yalnız bir qapıya aid olmalıdır.
          </p>
        </Form.Item>
        <Form.Item label="Qapının Şəkli: ">
          <input type="file" name="coverImage" onChange={handleFileChange} />
        </Form.Item>
        <Form.Item label="Əlavə Edilsin?">
          <Button
            loading={loading}
            onClick={() => {
              addDoor();
            }}
          >
            Əlavə Et
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddDoorPage;
