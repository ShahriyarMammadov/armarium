import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import AdminHeader from "../../../layouts/admin/header";
// import { useDispatch, useSelector } from "react-redux";

const AdminRoot = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  // const dispatch = useDispatch();
  // const userData = useSelector((state) => state.getAllUserDataReducer);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/");
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/checkAdmin",
          {},
          {
            withCredentials: true,
          }
        );

        if (!data?.success) {
          removeCookie("jwt");
          navigate("/");
          console.log(data?.message);
        } else {
          null;
        }
      }
    };

    verifyUser();
  }, [cookies, removeCookie, navigate]);

  return (
    <>
      <AdminHeader />
      <Outlet />
    </>
  );
};

export default AdminRoot;
