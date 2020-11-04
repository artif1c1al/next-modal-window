import React, { useState, useContext } from "react";
import {
  StyledAddCard,
  StyledCardInput,
  StyledCardNumberGroup,
  StyledCardCvcGroup,
  StyledCardExpiryGroup,
  StyledCardGroup,
  StyledLabel,
  StyledTextboxInfo,
  StyledSubmitBtn,
  StyledInfo,
  StyledError,
} from "./styled";
import AgreementCheckbox from "./AgreementCheckbox";
import SelectCard from "./SelectCard";
import { usePaymentInputs } from "react-payment-inputs";
import { Context } from "../pages/index";

export default function AddCard() {
  // const [cardNumber, setCardNumber] = useState("");
  // const [expiryDate, setExpiryDate] = useState("");
  // const [cvc, setCvs] = useState("");

  const {
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvc,
    setCvs,
  } = useContext(Context);

  const handleChangeCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const handleChangeExpiryDate = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleChangeCVC = (e) => {
    setCvs(e.target.value);
  };

  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  return (
    <>
      <SelectCard />
      <StyledTextboxInfo>
        Оплата кредитной картой MasterCard с помощью системы Stripe
      </StyledTextboxInfo>
      <StyledCardGroup>
        <StyledCardNumberGroup>
          <StyledLabel htmlFor="cardNum">Номер карты*</StyledLabel>
          <StyledCardInput
            {...getCardNumberProps({ onChange: handleChangeCardNumber })}
            placeholder="4234 4342 4234 3342"
            value={cardNumber}
            id="cardNum"
          />
          {meta.isTouched && meta.error && (
            <StyledError>Error: {meta.error}</StyledError>
          )}
        </StyledCardNumberGroup>
        <StyledCardExpiryGroup>
          <StyledLabel htmlFor="cardExpiry">Срок действия*</StyledLabel>
          <StyledCardInput
            {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
            value={expiryDate}
            id="cardExpiry"
          />
        </StyledCardExpiryGroup>
        <StyledCardCvcGroup>
          <StyledLabel htmlFor="cardCvc">CVC код*</StyledLabel>
          <StyledCardInput
            {...getCVCProps({ onChange: handleChangeCVC })}
            value={cvc}
            id="cardCvc"
          />
        </StyledCardCvcGroup>
      </StyledCardGroup>
    </>
  );
}
