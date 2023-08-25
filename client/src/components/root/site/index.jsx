import React from "react";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";
import { Outlet } from "react-router-dom";
import BackToTopComponent from "../../backToTop";

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BackToTopComponent />
      <Footer />
    </>
  );
};

export default MainRoot;
