import React from "react";
import { Skeleton } from "antd";
import "./index.scss";

const SkeletonComponent = () => {
  return (
    <>
      <div id="skeleton">
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
        <div className="image-skeleton"></div>
      </div>
    </>
    // <div>
    //   <Skeleton.Image active={true} />
    // </div>
  );
};

export default SkeletonComponent;
