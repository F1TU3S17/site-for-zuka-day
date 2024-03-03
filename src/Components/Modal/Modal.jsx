import React, { useRef, useEffect } from "react";
import Button from "../Button/Button";
import "./Modal.css";

export default function Modal({ isActive, children, useFunc }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (dialogNode) {
      if (isActive) {
        dialogNode.showModal();
      } else {
        dialogNode.close();
      }
    }
  }, [isActive]);

  return (
    <dialog ref={dialogRef} className="modal"><button className="closeModal" onClick={() => useFunc(false)}>
          X
        </button>
      <div className="modalContent">
       
        <div>{children}</div>
      </div> 
    </dialog>
  );
}
