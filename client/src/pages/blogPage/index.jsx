import React from "react";
import "./index.scss";
import blogBackImage from "../../assets/images/blogBackImage.jpeg";

const BlogPage = () => {
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
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
