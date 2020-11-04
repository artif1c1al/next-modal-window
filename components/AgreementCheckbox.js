import React from "react";
import { StyledCheckbox, StyledAgreementCheckbox, StyledInfo } from "./styled";

export default function AgreementCheckbox({ text, checked, onClick }) {
  return (
    <StyledAgreementCheckbox>
      <StyledCheckbox
        checked={checked}
        onChange={() => onClick(!checked)}
        id="checkbox"
        type="checkbox"
      />{" "}
      <lable htmlFor="checkbox">{text}</lable>
    </StyledAgreementCheckbox>
  );
}
