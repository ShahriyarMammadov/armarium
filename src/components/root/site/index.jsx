import React from "react";
import Header from "../../../layouts/site/header";
import Footer from "../../../layouts/site/footer";
import { Outlet } from "react-router-dom";
import BackToTopComponent from "../../backToTop";
import FloatButtonComponent from "../../floatButton";

const MainRoot = () => {
  return (
    <>
{/*       <Header />
      <Outlet />
      <BackToTopComponent />
      <FloatButtonComponent />
      <Footer /> */}
      <h1>Sayt bağlıdır.</h1>
    </>
  );
};

export default MainRoot;
