import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "./index.scss";
import coverImage from "../../assets/images/101.jpg";
import image1 from "../../assets/images/100.jpg";
import image2 from "../../assets/images/102.jpg";
import image3 from "../../assets/images/103.jpg";
import image4 from "../../assets/images/104.jpg";
import image5 from "../../assets/images/105.jpg";
import image6 from "../../assets/images/106.jpg";
import image7 from "../../assets/images/107.jpg";
import image8 from "../../assets/images/108.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

const ModelsDetailPage = () => {
  const [decorData, setDecorData] = useState([]);
  const { id } = useParams();

  const getDecorData = async () => {
    try {
      const data = await axios.get(
        `http://localhost:3000/decor/decorByName/${id}`
      );
      console.log(data);
      setDecorData(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDecorData();
  }, []);

  return (
    <main>
      <section id="detailPage">
        <div className="coverImage">
          <img
            src={`http://localhost:3000/images/${decorData[0]?.coverImage}`}
            alt="coverImage"
          />
        </div>

        <div className="aboutText container">
          <h5>{decorData[0]?.name}</h5>
          <div className="headText">
            <p>Maskülen ve derin…</p>
          </div>
          <p>{decorData[0]?.description}</p>
        </div>

        <div className="grid-container container">
          <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            {decorData[0]?.images?.map((e, i) => {
              return (
                <Image key={i} src={`http://localhost:3000/images/${e}`} />
              );
            })}
            {/* <Image src={image1} />
            <Image src={image2} />
            <Image src={image3} />
            <Image src={image4} />
            <Image src={image5} />
            <Image src={image6} />
            <Image src={image7} />
            <Image src={image8} /> */}
          </Image.PreviewGroup>

          {/* <div className="gallery" key={1}>
            <Zoom>
              <img src={image1} alt={`image`} />
            </Zoom>
          </div>
          <div className="gallery" key={1}>
            <Zoom>
              <img src={image2} alt={`image`} />
            </Zoom>
          </div>
          <div className="gallery" key={1}>
            <Zoom>
              <img src={image3} alt={`image`} />
            </Zoom>
          </div>
          <div className="gallery" key={1}>
            <Zoom>
              <img src={image4} alt={`image`} />
            </Zoom>
          </div>
          <div className="gallery" key={1}>
            <Zoom>
              <img src={image5} alt={`image`} />
            </Zoom>
          </div>
          <div className="gallery" key={1}>
            <Zoom>
              <img src={image6} alt={`image`} />
            </Zoom>
          </div>
          <div className="gallery" key={1}>
            <Zoom>
              <img src={image7} alt={`image`} />
            </Zoom>
          </div>
          <div className="gallery" key={1}>
            <Zoom>
              <img src={image8} alt={`image`} />
            </Zoom>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default ModelsDetailPage;
