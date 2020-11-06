import React, { useContext } from "react";
import {
  StyledCardInput,
  StyledCardNumberGroup,
  StyledCardCvcGroup,
  StyledCardExpiryGroup,
  StyledCardGroup,
  StyledCardLabel,
  StyledError,
} from "../styled";

import { usePaymentInputs } from "react-payment-inputs";
import { Context } from "../../pages/index";

export default function CardForm() {
  const {
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cvc,
    setCvs,
  } = useContext(Context);

  const handleChangeCardNumber = (e) => {
    e.preventDefault();
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
    <StyledCardGroup>
      <StyledCardNumberGroup>
        <StyledCardLabel htmlFor="cardNum">Номер карты*</StyledCardLabel>
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
        <StyledCardLabel htmlFor="cardExpiry">Срок действия*</StyledCardLabel>
        <StyledCardInput
          {...getExpiryDateProps({ onChange: handleChangeExpiryDate })}
          value={expiryDate}
          id="cardExpiry"
        />
      </StyledCardExpiryGroup>
      <StyledCardCvcGroup>
        <StyledCardLabel htmlFor="cardCvc">CVC код*</StyledCardLabel>
        <StyledCardInput
          {...getCVCProps({ onChange: handleChangeCVC })}
          value={cvc}
          id="cardCvc"
        />
      </StyledCardCvcGroup>
    </StyledCardGroup>
  );
}
