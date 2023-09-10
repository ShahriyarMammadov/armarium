import React, { useEffect, useState } from "react";
import "./index.scss";
import blogBackImage from "../../../assets/backgroundImages/blog.png";
import { Modal, Input, Button } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingComponent from "../../../components/loading";

const BlogPage = () => {
  const { TextArea } = Input;
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    console.log(name, comment);
    setConfirmLoading(true);
    setOpen(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const getAllBlog = async () => {
    try {
      const data = await axios.get("http://localhost:3000/blog/getAllBlog");
      setBlogs(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBlog();
  }, []);

  return (
    <div id="blogPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Bloq</title>
      </Helmet>
      <div className="backImage">
        <img src={blogBackImage} alt="backImage" />
      </div>
      <div className="blogPage container">
        <div className="headerText">
          <h1>ARMARIUM BLOQ</h1>
        </div>
        <div className="navigation">
          <span>
            <Link to={"/"}>
              HOME <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler"}>
              XƏBƏRLƏR <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>BLOQ</span>
          </span>
        </div>

        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="blogs">
            {blogs.length == 0 ? (
              <h3>Bloq Yoxdur.</h3>
            ) : (
              blogs.map((e, i) => {
                return (
                  <div className="blog" key={i}>
                    <img
                      src={`http://localhost:3000/images/${e?.coverImage}`}
                      alt={`${e?.name}`}
                    />

                    <div className="rightText">
                      <div className="blogHeaderText">
                        <h2>{e?.name}</h2>
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

                      <Link to={`/xeberler/blog/${e?.name}`}>
                        Ətraflı <i className="fa-solid fa-caret-right"></i>
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {/* COMMENT MODAL */}
        <Modal
          title="Şərh Bildirin"
          open={open}
          // onOk={handleOk}
          // confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Submit
            </Button>,
          ]}
        >
          <Input
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextArea
            rows={4}
            placeholder="Comment"
            maxLength={40}
            onChange={(e) => setComment(e.target.value)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default BlogPage;
