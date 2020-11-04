import React from "react";
import {
  StyledModalWindowBackground,
  StyledModalWindow,
  StyledCross,
} from "./styled";

export default function ModalWindow({ isModalOpen, setIsModalOpen }) {
  return (
    <StyledModalWindowBackground
      display={isModalOpen ? "flex" : "none"}
      data-modalwindow
      onClick={(e) => {
        console.log();
        if (e.target.dataset.modalwindow) {
          setIsModalOpen(false);
        }
      }}
    >
      <StyledModalWindow>
        {/* <span>&times;</span> */}
        <StyledCross onClick={() => setIsModalOpen(false)}>&times;</StyledCross>
        <h1>Some text</h1>
      </StyledModalWindow>
    </StyledModalWindowBackground>
  );
}
