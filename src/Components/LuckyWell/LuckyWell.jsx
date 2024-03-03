import React, { useState } from "react";
import "./LuckyWell.css";
import baraban from "./baraban_finel.png";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import arrow from "./arrow-outcome.svg";

export default function LuckyWell() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalText, setmodalText] = useState("Вы выиграли обнимашки и целовашки :3");

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setTimeout(() => {
        setModalIsOpen(true);
      }, 3000);
    }
    else{
        setmodalText("Вы уже забрали приз )))");
        console.log(modalText);
        setModalIsOpen(true);
    }
  };

  return (
    <section className="luckyWellSection">
      <Modal isActive={modalIsOpen} closeFunc={closeModal}>
        {modalText}
      </Modal>
      <div className="roullete">
        <img
          className={`baraban ${isSpinning ? "spin" : ""}`}
          src={baraban}
          alt="Well"
        />
        <img src={arrow} className="arrow" alt="Arrow" />
      </div>
      <Button onClick={handleSpin}>Крутануть</Button>
    </section>
  );
}
