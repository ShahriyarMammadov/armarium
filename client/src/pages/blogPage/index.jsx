import React, { useState } from "react";
import "./index.scss";
import blogBackImage from "../../assets/images/blogBackImage.jpeg";
import { Modal, Input, Button } from "antd";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/blogImage1.jpg";
import image2 from "../../assets/images/blogImage2.jpg";
import image3 from "../../assets/images/blogImage3.jpg";
import image4 from "../../assets/images/blogImage4.jpg";

const BlogPage = () => {
  const { TextArea } = Input;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

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

  return (
    <div id="blogPage">
      <div className="backImage">
        <img src={blogBackImage} alt="" />
      </div>
      <div className="blogPage container">
        <div className="headerText">
          <h1>ARMARIUM BLOQ</h1>
        </div>
        <div className="navigation">
          <span>
            <Link to={"/"}>
              Home <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <Link to={"/xeberler"}>
              Xəbərlər <i className="fa-solid fa-caret-right"></i>{" "}
            </Link>
            <span>Bloq</span>
          </span>
        </div>

        <div className="blogs">
          <div className="blog">
            <img src={image1} alt="Blog" />

            <div className="rightText">
              <div className="blogHeaderText">
                <h2>Rahat və Funksional Mətbəxin 5 sirri</h2>
              </div>
              <div className="description">
                <p>
                  Rahat və funksional mətbəxin sirri bahalı mebel və təmirdə
                  deyil - burada əsas şey məkanı düzgün planlaşdırmaq və
                  prioritetləşdirməkdir. Mükəmməl nəticə əldə etməyin necə daha
                  asan olduğunun sirlərini Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Tenetur corrupti quam eum odit,
                  earum harum id eligendi consequatur quo recusandae. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  voluptas explicabo eius maxime nam obcaecati cum vero optio
                  esse nesciunt?
                </p>
              </div>

              <Link to={"/xeberler/blog/name"}>
                Ətraflı <i className="fa-solid fa-caret-right"></i>
              </Link>
            </div>
          </div>

          <div className="blog">
            <img src={image2} alt="Blog" />

            <div className="rightText">
              <div className="blogHeaderText">
                <h2>Rahat və Funksional Mətbəxin 5 sirri</h2>
              </div>
              <div className="description">
                <p>
                  Rahat və funksional mətbəxin sirri bahalı mebel və təmirdə
                  deyil - burada əsas şey məkanı düzgün planlaşdırmaq və
                  prioritetləşdirməkdir. Mükəmməl nəticə əldə etməyin necə daha
                  asan olduğunun sirlərini Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Tenetur corrupti quam eum odit,
                  earum harum id eligendi consequatur quo recusandae. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  voluptas explicabo eius maxime nam obcaecati cum vero optio
                  esse nesciunt?
                </p>
              </div>

              <Link to={"/xeberler/blog/name"}>
                Ətraflı <i className="fa-solid fa-caret-right"></i>
              </Link>
            </div>
          </div>

          <div className="blog">
            <img src={image3} alt="Blog" />

            <div className="rightText">
              <div className="blogHeaderText">
                <h2>Rahat və Funksional Mətbəxin 5 sirri</h2>
              </div>
              <div className="description">
                <p>
                  Rahat və funksional mətbəxin sirri bahalı mebel və təmirdə
                  deyil - burada əsas şey məkanı düzgün planlaşdırmaq və
                  prioritetləşdirməkdir. Mükəmməl nəticə əldə etməyin necə daha
                  asan olduğunun sirlərini Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Tenetur corrupti quam eum odit,
                  earum harum id eligendi consequatur quo recusandae. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  voluptas explicabo eius maxime nam obcaecati cum vero optio
                  esse nesciunt?
                </p>
              </div>

              <Link to={"/xeberler/blog/name"}>
                Ətraflı <i className="fa-solid fa-caret-right"></i>
              </Link>
            </div>
          </div>

          <div className="blog">
            <img src={image4} alt="Blog" />

            <div className="rightText">
              <div className="blogHeaderText">
                <h2>Rahat və Funksional Mətbəxin 5 sirri</h2>
              </div>
              <div className="description">
                <p>
                  Rahat və funksional mətbəxin sirri bahalı mebel və təmirdə
                  deyil - burada əsas şey məkanı düzgün planlaşdırmaq və
                  prioritetləşdirməkdir. Mükəmməl nəticə əldə etməyin necə daha
                  asan olduğunun sirlərini Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Tenetur corrupti quam eum odit,
                  earum harum id eligendi consequatur quo recusandae. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  voluptas explicabo eius maxime nam obcaecati cum vero optio
                  esse nesciunt?
                </p>
              </div>

              <Link to={"/xeberler/blog/name"}>
                Ətraflı <i className="fa-solid fa-caret-right"></i>
              </Link>
            </div>
          </div>
        </div>

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
