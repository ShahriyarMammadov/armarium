import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Form, Input, Popconfirm, message } from "antd";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../components/loading";

const addDecorPage = () => {
  const { id } = useParams();
  const [name, setDecorName] = useState("");
  const [description, setDecorDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [images, setİmages] = useState([]);

  const [selectedDecorName, setSelectedDecorName] = useState("");

  const [loading, setLoading] = useState(true);

  const [sliceCount, setSliceCount] = useState(5);

  const [decor, setAllDecor] = useState([]);

  const [selectedDecor, setSelectedDecor] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const handleImagesChange = (e) => {
    const selectedFiles = e.target.files;
    const newImages = Array.from(selectedFiles);
    setİmages([...images, ...newImages]);
  };

  const getAllDecor = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/decor/allDecor`);
      setAllDecor(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getSelectedDecor = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:3000/selectedDecor/getSelectedDecors`
      );
      setSelectedDecor(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addSelectedDecor = async () => {
    try {
      if (selectedDecorName.length === 0) {
        return message.warning("Dekor Adı Qeyd Edin!");
      }
      const { data } = await axios.post(
        `http://localhost:3000/selectedDecor/addNameToSelectedDecor`,
        { selectedNames: selectedDecorName }
      );
      console.log(data);

      message.success(data.message);

      getSelectedDecor();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSelectedDecor = async (name) => {
    try {
      console.log(name);
      const { data } = await axios.delete(
        `http://localhost:3000/selectedDecor/removeNameFromSelectedDecor?name=${name}`
      );
      getSelectedDecor();
      message.success(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDecor();
    getSelectedDecor();
  }, []);

  const deleteDecor = async (name) => {
    try {
      setLoading(true);
      const deleteDecor = await axios.delete(
        `http://localhost:3000/decor/deleteDecorByName/${name}`
      );
      message.success("Dekor uğurla silindi");
      getAllDecor();
      getSelectedDecor();
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    message.error("SİLİNMƏDİ");
  };

  const addDecor = async () => {
    try {
      if (
        name.length === 0 ||
        coverImage.length === 0 ||
        images.length === 0 ||
        description.length === 0
      ) {
        return message.error("Zəhmət olmasa xanaları tam doldurun!");
      } else if (images.length > 14) {
        return message.error("14-dən çox şəkil yükləmək olmaz!");
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("name", name);
      formData.append("description", description);
      images.forEach((image, index) => {
        formData.append("images", image);
      });

      const addData = await axios.post(
        `http://localhost:3000/decor/addDecor/${id}`,
        formData
      );
      getAllDecor();
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
          <h4>BÜTÜN DEKORLAR</h4>
          {decor.length === 0 ? (
            <>
              <h1>HEÇ BİR DEKOR PAYLAŞMAMISINIZ.</h1>
            </>
          ) : (
            <div id="decor">
              <>
                <div className="imagesCards">
                  {decor.slice(0, sliceCount).map((e, i) => {
                    // const imageUrls = e?.images.map(
                    //   (image) => `http://localhost:3000/images/${image}`
                    // );
                    return (
                      <>
                        <Link to={`#`} key={i}>
                          <img
                            src={`http://localhost:3000/images/${e?.coverImage}`}
                            alt={`${e?.name}`}
                          />
                          <div className="text hidden">
                            <p className="modelName">
                              <Popconfirm
                                title="DEKOR"
                                description="Dekor Həmişəlik Silinsin?"
                                onConfirm={() => {
                                  deleteDecor(e?._id);
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
                                  }}
                                ></i>
                              </Popconfirm>{" "}
                              {e?.name}
                            </p>

                            <p className="description hidden">
                              {e?.description?.slice(0, 37) + ". . ."}
                            </p>
                          </div>
                        </Link>
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
        <Form.Item label="Bloqun Adı:">
          <Input
            onChange={(e) => {
              setDecorName(e.target.value);
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
            BLOQ-UN ADININ SONUNA `. , ? !` VƏ S. ƏLAVƏ ETMƏYİN
          </p>
        </Form.Item>
        <Form.Item label="Bloq Məlumatı: ">
          <Input
            onChange={(e) => {
              setDecorDescription(e.target.value);
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
              addDecor();
            }}
          >
            Əlavə Et
          </Button>
        </Form.Item>
      </Form>

      <div className="selectedDecors">
        <h4>SEÇİLMİŞ DEKORLAR</h4>

        <div
          className="selectDecorName"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            overflow: "auto",
          }}
        >
          {selectedDecor?.name?.names?.map((e, i) => {
            return (
              <p
                style={{
                  backgroundColor: "white",
                  padding: "10px 20px",
                }}
              >
                {e}
                <Popconfirm
                  title="SEÇİLMİŞ DEKORLAR"
                  description={`${e} Adlı Seçilmiş Dekor Həmişəlik Silinsin?`}
                  onConfirm={() => {
                    deleteSelectedDecor(e);
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
                      marginLeft: "10px",
                    }}
                  ></i>
                </Popconfirm>
              </p>
            );
          })}
        </div>
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
          <Form.Item label="Seçilmiş Dekorun Adı:">
            <Input
              onChange={(e) => {
                setSelectedDecorName(e.target.value);
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
              BLOQ-UN ADININ SONUNA `. , ? !` VƏ S. ƏLAVƏ ETMƏYİN
            </p>
          </Form.Item>

          <Form.Item label="Əlavə Edilsin?">
            <Button
              loading={loading}
              onClick={() => {
                addSelectedDecor();
              }}
            >
              Seçilmiş Dekorlara Əlavə Et
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default addDecorPage;
