import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const AdminRoot = () => {
  //   const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  // const userData = useSelector((state) => state.getAllUserDataReducer);

  //   useEffect(() => {
  //     const verifyUser = async () => {
  //       if (!cookies.jwt) {
  //         navigate("/login");
  //       } else {
  //         const { data } = await axios.post(
  //           "http://localhost:3000/",
  //           {},
  //           {
  //             withCredentials: true,
  //           }
  //         );

  //         if (!data?.status) {
  //           removeCookie("jwt");
  //           navigate("/login");
  //         } else {
  //           // if (userData?.data?.position === "admin") {
  //           //   navigate("/admin/adminPanel");
  //           // console.log(userData.data.position);
  //           // }
  //           //   await dispatch(getUserAllDataAction(data.data));
  //           // dispatch(getAllcountryAction());
  //         }
  //       }
  //     };

  //     verifyUser();
  //   }, [cookies, removeCookie, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminRoot;
