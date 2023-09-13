import React from "react";
import { Skeleton } from "antd";
import "./index.scss";

const SkeletonComponent = () => {
  return (
    <>
      <div id="skeleton">
        <Skeleton.Image active={true} />
        <Skeleton.Image active={true} />
        <Skeleton.Image active={true} />
        <Skeleton.Image active={true} />
        <Skeleton.Image active={true} />
        <Skeleton.Image active={true} />
        <Skeleton.Image active={true} />
        <Skeleton.Image active={true} />
      </div>
    </>
  );
};

export default SkeletonComponent;
