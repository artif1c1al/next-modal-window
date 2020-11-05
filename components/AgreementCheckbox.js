import React from "react";
import { StyledCheckbox, StyledAgreementCheckbox, StyledInfo } from "./styled";

export default function AgreementCheckbox({ text, checked, onClick }) {
  return (
    <StyledAgreementCheckbox as="label">
      <StyledCheckbox
        checked={checked}
        onChange={() => onClick(!checked)}
        id="checkbox"
        type="checkbox"
      />
      {text}
    </StyledAgreementCheckbox>
  );
}
