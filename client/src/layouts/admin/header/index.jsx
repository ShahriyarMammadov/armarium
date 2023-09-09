import React from "react";
import "./index.scss";
import logo from "../../../assets/images/logo.png";

const AdminHeader = ({ data }) => {
  console.log(data);
  return (
    <div id="header">
      <div className="header">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>

        <div className="right">
          {/* <Badge count={8}>
            <i
              className="fa-regular fa-bell"
              style={{ fontSize: "30px", cursor: "pointer" }}
            ></i>
          </Badge> */}

          <div className="profilePhoto">
            <img
              // src={`http://localhost:3000/images/${data?.profilePhoto}`}
              src={logo}
              alt="profilePhoto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
