import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
import axios from "axios";
import AdminHeader from "../../../layouts/admin/header";

const AdminRoot = () => {
  // const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      const userID = sessionStorage.getItem("id");

      if (!userID) {
        navigate("/");
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/checkAdmin",
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
