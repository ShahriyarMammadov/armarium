import React from "react";
import { Button, Result } from "antd";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div id="notFound">
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 | Səhifə Tapılmadı</title>
      </Helmet>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFoundPage;
