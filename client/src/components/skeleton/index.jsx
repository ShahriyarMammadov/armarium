import React from "react";
import { Card, Skeleton } from "antd";
import "./index.scss";

const SkeletonComponent = () => {
  const { Meta } = Card;
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

      {/* <Card
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card> */}
    </>

    // <div>
    //   <Skeleton.Image active={true} />
    // </div>
  );
};

export default SkeletonComponent;
