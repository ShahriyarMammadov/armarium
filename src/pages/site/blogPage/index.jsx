import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { Modal, Input, Button, Empty, List } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingComponent from "../../../components/loading";
import { useTranslation } from "react-i18next";

const BlogPage = () => {
  const { TextArea } = Input;
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setOpen(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const getAllBlog = async () => {
    try {
      const data = await axios.get("");
      setBlogs(data?.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const backgroundRef = useRef(null);

  const getBackImage = async () => {
    try {
      let { data } = await axios.get(`""/backImage/getBackImageByPage/Bloq`);
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundImage = `url(""/images/${data?.image?.coverImage})`;
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllBlog();
    getBackImage();
  }, []);

  const [position, setPosition] = useState("bottom");
  const [align, setAlign] = useState("center");

  return (
    <div id="blogPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Armarium | Bloq</title>
        <meta property="og:image" content="../../../../public/favicon.png" />
        <meta
          name="description"
          content="Armarium | Xəyallarınızı Armarium ilə süsləyin"
        />
        <meta
          name="keywords"
          content="Müasir Mebellər, Armarium az, armarium, Mebel Mağazası, qapı, Dekorlar, Mebel Dükkanı, Mebel Firması, Xəyallarınızı Armarium ilə süsləyin"
        ></meta>
      </Helmet>
      <div className="backImage" ref={backgroundRef}></div>
      <div className="blogPage container">
        <div className="headerText">
          <h1>{t("ARMARIUM BLOQ")}</h1>
        </div>
        <div className="navigation">
          <span>
            <Link to={"/"}>
              {t("ƏSAS SƏHİFƏ")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler"}>
              {t("XƏBƏRLƏR")} <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>{t("BLOQ")}</span>
          </span>
        </div>

        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="blogs">
            {blogs.length == 0 ? (
              <Empty
                description={false}
                style={{
                  display: "block",
                  width: "80vw",
                }}
              />
            ) : (
              <List
                pagination={{
                  position,
                  align,
                }}
                dataSource={blogs}
                renderItem={(e, i) => (
                  <>
                    <div className="blog">
                      <img
                        src={`""/images/${e?.coverImage}`}
                        alt={`${e?.name}`}
                      />

                      <div className="rightText">
                        <div className="blogHeaderText">
                          <h2>{e?.name}</h2>
                        </div>
                        <div
                          className="description"
                          dangerouslySetInnerHTML={{
                            __html: e?.description?.slice(0, 250),
                          }}
                        ></div>

                        <Link to={`/xeberler/blog/${e?.name}`}>
                          Ətraflı <i className="fa-solid fa-caret-right"></i>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              />
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
