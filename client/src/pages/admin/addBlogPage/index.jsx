import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Collapse, Form, Input, Popconfirm, message } from "antd";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../components/loading";

const AddBlogPage = () => {
  const { id } = useParams();
  const [name, setBlogName] = useState("");
  const [description, setBlogDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [loading, setLoading] = useState(true);

  const [sliceCount, setSliceCount] = useState(5);

  const [blogs, setAllBlog] = useState([]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
  };

  const getAllBlog = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/blog/getAllBlog`);
      setAllBlog(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  const vacancyDelete = async (name) => {
    try {
      console.log(name);
      const deleteBlog = await axios.delete(
        `http://localhost:3000/blog/deleteBlogByName/${name}`
      );
      message.success("vakansiya uğurla silindi");
      //   getAllBlog();
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    message.error("SİLİNMƏDİ");
  };

  const addBlog = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("name", name);
      formData.append("description", description);
      const addData = await axios.post(
        `http://localhost:3000/blog/addBlog/${id}`,
        formData
      );
      getAllBlog();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="adminBlog">
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="blogs">
            <h1>BÜTÜN BLOQLAR</h1>
            {blogs.slice(0, sliceCount).map((e, i) => {
              return (
                <div className="blog" key={i}>
                  <img
                    src={`http://localhost:3000/images/${e?.coverImage}`}
                    alt={`${e?.name}`}
                  />

                  <div className="rightText" style={{ width: "100%" }}>
                    <div
                      className="blogHeaderText"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h2>{e?.name}</h2>
                      <i
                        className="fa-regular fa-trash-can"
                        style={{
                          color: "red",
                          cursor: "pointer",
                          fontSize: "24px",
                        }}
                      ></i>
                    </div>
                    <div className="description">
                      <p>
                        {e?.description
                          ?.slice(0, 250)
                          ?.split("<br />")
                          ?.map((line, lineIndex) => (
                            <React.Fragment key={lineIndex}>
                              {line}. . .
                              <br />
                            </React.Fragment>
                          ))}
                      </p>
                    </div>
                    {/* 
                    <Link to={`/xeberler/blog/${e?.name}`}>
                      Ətraflı <i className="fa-solid fa-caret-right"></i>
                    </Link> */}
                  </div>
                </div>
              );
            })}
            <div className="sliceBtn">
              <button
                onClick={() => {
                  setSliceCount(sliceCount + 5);
                }}
              >
                DAHA ÇOX
              </button>
            </div>
          </div>
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
              setBlogName(e.target.value);
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
              setBlogDescription(e.target.value);
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
              addBlog();
            }}
          >
            Əlavə Et
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddBlogPage;
