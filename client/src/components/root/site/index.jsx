import React from "react";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";
import { Outlet } from "react-router-dom";
import BackToTopComponent from "../../backToTop";
import FloatButtonComponent from "../../floatButton";

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BackToTopComponent />
      <FloatButtonComponent />
      <Footer />
    </>
  );
};

export default MainRoot;
