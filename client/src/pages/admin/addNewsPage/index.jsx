import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Form, Input, Popconfirm, message } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../../components/loading";

const AddNewsPage = () => {
  const { id } = useParams();
  const [name, setNewsName] = useState("");
  const [description, setNewsDescription] = useState("");
  const [cardDescription, setNewsCardDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [loading, setLoading] = useState(true);

  const [sliceCount, setSliceCount] = useState(5);

  const [news, setAllNews] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const getAllNews = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/news/allNews`);
      setAllNews(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  const deleteNews = async (name) => {
    try {
      setLoading(true);
      const deleteBlog = await axios.delete(
        `http://localhost:3000/news/deleteNewsByName/${name}`
      );
      message.success("Xəbər uğurla silindi");
      getAllNews();
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    message.error("SİLİNMƏDİ");
  };

  const addNews = async () => {
    try {
      if (
        name.length === 0 ||
        coverImage.length === 0 ||
        cardDescription.length === 0 ||
        description.length === 0
      ) {
        return message.error("Zəhmət olmasa xanaları tam doldurun!");
      }
      setLoading(true);
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("cardDescription", cardDescription);
      const addData = await axios.post(
        `http://localhost:3000/news/addNews/${id}`,
        formData
      );
      getAllNews();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="adminNews">
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <h4>BÜTÜN XƏBƏRLƏR</h4>
          {news.length === 0 ? (
            <>
              <h1>HEÇ BİR XƏBƏR PAYLAŞMAMISINIZ.</h1>
            </>
          ) : (
            <div className="cards">
              {news?.map((e, i) => {
                return (
                  <div className="card" key={i}>
                    <div className="image">
                      <img
                        src={`http://localhost:3000/images/${e?.coverImage}`}
                        alt={`${e?.name}`}
                      />
                    </div>
                    <div className="text">
                      <div
                        className="headerText"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <h5>{e?.name}</h5>
                        <Popconfirm
                          title="XƏBƏRLƏR"
                          description="Xəbər Həmişəlik Silinsin?"
                          onConfirm={() => {
                            deleteNews(e?._id);
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
                        </Popconfirm>
                      </div>
                      <div className="date">
                        <i className="fa-regular fa-calendar-days"></i>{" "}
                        {e?.date?.slice(0, 10)}
                      </div>
                      <hr />

                      <div className="detailTextSlice">
                        <p>
                          {" "}
                          {e?.description
                            ?.slice(0, 50)
                            ?.split("<br />")
                            ?.map((line, lineIndex) => (
                              <React.Fragment key={lineIndex}>
                                {line}. . .
                                <br />
                              </React.Fragment>
                            ))}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
        <Form.Item label="Xəbərin Adı:">
          <Input
            onChange={(e) => {
              setNewsName(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="Qısa Məlumat:">
          <Input
            onChange={(e) => {
              setNewsCardDescription(e.target.value);
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
            MƏLUMAT ƏLAVƏ EDƏRKƏN CÜMLƏNİN YENİ SƏTİRDƏN BAŞLAMASI ÜÇÜN ƏVVƏLKİ
            CÜMLƏNİN SONUNA {`<br />`} ƏLAVƏ EDİN
          </p>
        </Form.Item>
        <Form.Item label="Xəbər Məlumatı: ">
          <Input
            onChange={(e) => {
              setNewsDescription(e.target.value);
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

        <Form.Item label="Əlavə Edilsin?">
          <Button
            loading={loading}
            onClick={() => {
              addNews();
            }}
          >
            Əlavə Et
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNewsPage;
