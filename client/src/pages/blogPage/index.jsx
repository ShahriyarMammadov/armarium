import React, { useState } from "react";
import "./index.scss";
import blogBackImage from "../../assets/images/blogBackImage.jpeg";
import blogCard1 from "../../assets/images/blogCard1.jpeg";
import author from "../../assets/images/as.png";
import { Modal, Input, Button } from "antd";

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
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
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
          <h1>Armarium Blog</h1>
        </div>

        <div className="selectedBlogs"></div>

        <div className="allBlogs">
          <div className="card">
            <div className="image">
              <img src={blogCard1} alt="blog" />
            </div>

            <div className="categoryAndDate">
              <h6>Business, Travel</h6>
              {" - "}
              <p className="date">31 Avqust, 2023</p>
            </div>

            <div className="blogHeaderText">
              <h4>
                Your Meet unhappy customers are your greatest source of learning
              </h4>
            </div>

            {/* <hr /> */}

            <div className="description">
              <p>
                For the away, behind the wind mountains, for, from the countries
                Vakalla and Conr, Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="author">
              <div className="authorAbout">
                <div className="authorImage">
                  <img src={author} alt="Armarium" />
                </div>
                <div>
                  <p>Armarium</p>
                  <p className="position">CEO, Offer</p>
                </div>
              </div>

              <div className="comment">
                <i
                  className="fa-regular fa-comment-dots"
                  onClick={showModal}
                ></i>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={blogCard1} alt="blog" />
            </div>

            <div className="categoryAndDate">
              <h6>Business, Travel</h6>
              {" - "}
              <p className="date">31 Avqust, 2023</p>
            </div>

            <div className="blogHeaderText">
              <h4>
                Your Meet unhappy customers are your greatest source of learning
              </h4>
            </div>

            {/* <hr /> */}

            <div className="description">
              <p>
                For the away, behind the wind mountains, for, from the countries
                Vakalla and Conr, Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="author">
              <div className="authorAbout">
                <div className="authorImage">
                  <img src={author} alt="Armarium" />
                </div>
                <div>
                  <p>Armarium</p>
                  <p className="position">CEO, Offer</p>
                </div>
              </div>

              <div className="comment">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={blogCard1} alt="blog" />
            </div>

            <div className="categoryAndDate">
              <h6>Business, Travel</h6>
              {" - "}
              <p className="date">31 Avqust, 2023</p>
            </div>

            <div className="blogHeaderText">
              <h4>
                Your Meet unhappy customers are your greatest source of learning
              </h4>
            </div>

            {/* <hr /> */}

            <div className="description">
              <p>
                For the away, behind the wind mountains, for, from the countries
                Vakalla and Conr, Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="author">
              <div className="authorAbout">
                <div className="authorImage">
                  <img src={author} alt="Armarium" />
                </div>
                <div>
                  <p>Armarium</p>
                  <p className="position">CEO, Offer</p>
                </div>
              </div>

              <div className="comment">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={blogCard1} alt="blog" />
            </div>

            <div className="categoryAndDate">
              <h6>Business, Travel</h6>
              {" - "}
              <p className="date">31 Avqust, 2023</p>
            </div>

            <div className="blogHeaderText">
              <h4>
                Your Meet unhappy customers are your greatest source of learning
              </h4>
            </div>

            {/* <hr /> */}

            <div className="description">
              <p>
                For the away, behind the wind mountains, for, from the countries
                Vakalla and Conr, Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="author">
              <div className="authorAbout">
                <div className="authorImage">
                  <img src={author} alt="Armarium" />
                </div>
                <div>
                  <p>Armarium</p>
                  <p className="position">CEO, Offer</p>
                </div>
              </div>

              <div className="comment">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={blogCard1} alt="blog" />
            </div>

            <div className="categoryAndDate">
              <h6>Business, Travel</h6>
              {" - "}
              <p className="date">31 Avqust, 2023</p>
            </div>

            <div className="blogHeaderText">
              <h4>
                Your Meet unhappy customers are your greatest source of learning
              </h4>
            </div>

            {/* <hr /> */}

            <div className="description">
              <p>
                For the away, behind the wind mountains, for, from the countries
                Vakalla and Conr, Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="author">
              <div className="authorAbout">
                <div className="authorImage">
                  <img src={author} alt="Armarium" />
                </div>
                <div>
                  <p>Armarium</p>
                  <p className="position">CEO, Offer</p>
                </div>
              </div>

              <div className="comment">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={blogCard1} alt="blog" />
            </div>

            <div className="categoryAndDate">
              <h6>Business, Travel</h6>
              {" - "}
              <p className="date">31 Avqust, 2023</p>
            </div>

            <div className="blogHeaderText">
              <h4>
                Your Meet unhappy customers are your greatest source of learning
              </h4>
            </div>

            {/* <hr /> */}

            <div className="description">
              <p>
                For the away, behind the wind mountains, for, from the countries
                Vakalla and Conr, Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="author">
              <div className="authorAbout">
                <div className="authorImage">
                  <img src={author} alt="Armarium" />
                </div>
                <div>
                  <p>Armarium</p>
                  <p className="position">CEO, Offer</p>
                </div>
              </div>

              <div className="comment">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src={blogCard1} alt="blog" />
            </div>

            <div className="categoryAndDate">
              <h6>Business, Travel</h6>
              {" - "}
              <p className="date">31 Avqust, 2023</p>
            </div>

            <div className="blogHeaderText">
              <h4>
                Your Meet unhappy customers are your greatest source of learning
              </h4>
            </div>

            {/* <hr /> */}

            <div className="description">
              <p>
                For the away, behind the wind mountains, for, from the countries
                Vakalla and Conr, Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="author">
              <div className="authorAbout">
                <div className="authorImage">
                  <img src={author} alt="Armarium" />
                </div>
                <div>
                  <p>Armarium</p>
                  <p className="position">CEO, Offer</p>
                </div>
              </div>

              <div className="comment">
                <i className="fa-regular fa-comment-dots"></i>
              </div>
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
              Return
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
