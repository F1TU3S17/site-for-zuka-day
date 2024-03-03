/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./PhotoZone.css";
import photo1 from "./photo2.jpg";
import photo2 from "./photo.jpg";
import photo3 from "./photo3.jpg";
import photo4 from "./photo4.jpg";
import photo5 from "./photo5.jpg";
import photo6 from "./photo6.jpg";
import photo7 from "./photo7.jpg";
import photo8 from "./photo8.jpg";
import photo9 from "./photo9.jpg";
import photo10 from "./photo10.jpg";
import photo11 from "./photo11.jpg";
import photo12 from "./photo12.jpg";
import photo13 from "./photo13.jpg";
import photo14 from "./photo14.jpg";
import photo15 from "./photo15.jpg";
import photo16 from "./photo16.jpg";
import photo17 from "./photo17.jpg";
import photo18 from "./photo18.jpg";
import photo19 from "./photo19.jpg";
import photo20 from "./photo20.jpg";
import photo21 from "./photo21.jpg";
import photo22 from "./photo22.jpg";
import photo23 from "./photo23.jpg";
import camera from "./camera.png";

export default function PhotoZone() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo22,
    photo23
  ];

  const nextPhoto = () => {
    setPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  };

  return (
    <section className="photoZone">
      <div className="camera">
        <button className="next" onClick={nextPhoto}></button>
        <img className="cameraImg" src={camera} alt="Camera" />
        <button className="prev" onClick={prevPhoto}></button>
        <div className="photoContainer">
          <img src={photos[photoIndex]} alt="Photo" />
        </div>
      </div>
    </section>
  );
}
