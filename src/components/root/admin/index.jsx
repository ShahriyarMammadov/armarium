import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminHeader from "../../../layouts/admin/header";

const AdminRoot = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      const userID = sessionStorage.getItem("id");

      if (!userID) {
        navigate("/404-notfound");
      } else {
        const { data } = await axios.post(
          "https://armariumbackend-production.up.railway.app/checkAdmin",
          {
            userID: userID,
          },
          {
            withCredentials: true,
          }
        );

        console.log(data?.success);

        if (!data?.success) {
          sessionStorage.removeItem("id");
          console.log(data?.message);
          navigate("/");
        } else {
          null;
        }
      }
    };

    verifyUser();
  }, [navigate]);

  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminRoot;
