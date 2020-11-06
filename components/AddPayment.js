import React, { useContext } from "react";
import {
  StyledAddCard,
  StyledTextboxInfo,
  StyledSubmitBtn,
  StyledInfo,
  StyledError,
} from "./styled";
import SelectCard from "./SelectCard";
import { Context } from "../pages/index";
import CardForm from "./paymentMethods/CardForm";
import PaypalForm from "./paymentMethods/PaypalForm";

export default function AddPayment() {
  const { paymentMethod } = useContext(Context);

  const SiteRedirect = () => (
    <>
      <StyledTextboxInfo>Оплата на сайте {paymentMethod}</StyledTextboxInfo>
    </>
  );

  return (
    <StyledAddCard>
      {paymentMethod === "PayPal" ? (
        <PaypalForm />
      ) : paymentMethod === "Кредитная/дебетовая карта" ? (
        <CardForm />
      ) : (
        <SiteRedirect />
      )}
    </StyledAddCard>
  );
}
