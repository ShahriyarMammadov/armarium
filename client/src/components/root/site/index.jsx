import React from "react";
import Header from "../../../layouts/header";
import Footer from "../../../layouts/footer";
import { Outlet } from "react-router-dom";

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRoot;
