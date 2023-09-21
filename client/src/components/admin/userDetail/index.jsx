import React from "react";
import "./index.scss";
import { Descriptions, Image } from "antd";
// import axios from "axios";

const UserDetailComponent = ({ data }) => {
  const items = [
    {
      key: "1",
      label: "AD: ",
      children: data?.user?.name,
    },
    {
      key: "2",
      label: "SOYAD: ",
      children: data?.user?.surname,
    },
    {
      key: "3",
      label: "EMAIL: ",
      children: data?.user?.email,
    },
    {
      key: "4",
      label: "ŞƏXSİ EMAIL: ",
      children: data?.user?.personalEmail,
    },
    {
      key: "5",
      label: "ROL: ",
      children: data?.user?.role,
    },
    {
      key: "6",
      label: "YARADILMA: ",
      children: data?.user?.createdAt,
    },
    {
      key: "7",
      label: "SON YENİLƏNMƏ: ",
      children: data?.user?.updatedAt,
    },
    {
      key: "8",
      label: "PROFİL FOTOSU:",
      children: (
        <>
          <Image
            width={100}
            height={100}
            src={`https://armariumbackend-production.up.railway.app/images/${data?.user?.profilePhoto}`}
            alt={`${data?.name}`}
          />
        </>
      ),
    },
  ];

  // const updateUserData = async () => {
  //   try {
  //     if (!profilePhoto) {
  //       alert("Lütfen bir resim dosyası seçin.");
  //       return;
  //     }
  // const formData = new FormData();
  // formData.append("image", selectedFile);
  // formData.append("name", name);
  // formData.append("surname", surname);
  // formData.append("email", email);
  // formData.append("personalEmail", personalEmail);

  //     const salam = await axios.put(
  //       `http://localhost:3000/user/editUserData/${data?._id}`,
  //       { name, surname, email, personalEmail, profilePhoto }
  //     );
  //     console.log(salam);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div id="userDetail">
      <Descriptions title="MƏLUMATLARINIZ" items={items} />
    </div>
  );
};

export default UserDetailComponent;
