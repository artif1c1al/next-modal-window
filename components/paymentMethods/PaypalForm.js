import React, { useContext } from "react";
import { StyledEmailInput } from "../styled";
import { Context } from "../../pages/index";

export default function PaypalForm() {
  const { paypalEmail, setPaypalEmail } = useContext(Context);
  const onChange = (e) => {
    setPaypalEmail(e.target.value);
  };
  return (
    <label htmlFor="">
      Введит ваш PayPal:
      <StyledEmailInput
        value={paypalEmail}
        onChange={onChange}
        placeholder="e-mail"
      />
    </label>
  );
}
