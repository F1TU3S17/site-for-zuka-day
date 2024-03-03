/* eslint-disable react-hooks/rules-of-hooks */
import photo from "./photo.jpg";
import "./Main.css";
import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
export default function Main() {
  const [modalIsOpen, useModal] = useState(false);
  return (
    <main>
      <Modal isActive={modalIsOpen} useFunc={useModal}>
        100000%
        <br />
        Точно-точно!
      </Modal>
      <div className="mainTitleText">
        <h2>Этот раздел с информацией о самой милой девочке в мире</h2>
      </div>
      <section className="mainPhotoSection">
        <img className="bestGirl" src={photo} alt="best girl" />
        <div className="cuteText">
          <p>
            На этой фотографии представлена самая прекрасная кошечка{" "}
            <s>на планете</s> во вселенной
          </p>
        </div>
        <h3>Воть почему!</h3>
        <ol>
          <li>Она милашка :3</li>
          <li>Она очень красивая</li>
          <li>Она очень-очень умная</li>
          <li>Она та, кто Делает меня счатливым</li>
          <li>Просто посмотрите на её улбыку, это же...</li>
        </ol>
        <Button onClick={() => useModal(true)}>Узнать правда ли</Button>
      </section>
    </main>
  );
}
