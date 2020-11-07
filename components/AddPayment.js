import React, { useContext } from "react";
import { StyledAddCard } from "./styled";
import SelectPayment from "./SelectPayment";
import { Context } from "../pages/index";
import CardForm from "./paymentMethods/CardForm";
import PaypalForm from "./paymentMethods/PaypalForm";

export default function AddPayment() {
  const { paymentMethod } = useContext(Context);

  return (
    <StyledAddCard>
      {paymentMethod === "PayPal" ? <PaypalForm /> : <CardForm />}
    </StyledAddCard>
  );
}
