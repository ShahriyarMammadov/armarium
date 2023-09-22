import React from "react";
import "./index.scss";
import logo from "../../../assets/images/logo.png";
import userPhoto from "../../../assets/adminuser.png";

const AdminHeader = ({ data }) => {
  return (
    <div id="adminHeader">
      <div className="adminHeader">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>

        <div className="right">
          <div className="profilePhoto">
            <img src={userPhoto} alt="profilePhoto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
