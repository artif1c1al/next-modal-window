import React from "react";
import { StyledEmailInput } from "../styled";

export default function PaypalForm() {
  return (
    <label htmlFor="">
      Введит ваш PayPal:
      <StyledEmailInput placeholder="e-mail" />
    </label>
  );
}
