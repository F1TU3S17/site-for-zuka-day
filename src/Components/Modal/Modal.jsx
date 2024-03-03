import React, { useRef, useEffect } from "react";
import "./Modal.css";

export default function Modal({ isActive, children, closeFunc}) {
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
    <dialog ref={dialogRef} className="modal"><button className="closeModal" onClick={closeFunc}>
          X
        </button>
      <div className="modalContent">
       
        <div>{children}</div>
      </div> 
    </dialog>
  );
}
