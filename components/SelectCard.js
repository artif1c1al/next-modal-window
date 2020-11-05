import React, { useContext } from "react";
import { StyledSelect, StyledLabel, StyledRadioButton } from "./styled";
import { Context } from "../pages/index";

export default function SelectCard() {
  const { paymentMethod, setPaymentMethod } = useContext(Context);

  return (
    <>
      <StyledSelect
        onChange={(e) => {
          setPaymentMethod(e.target.value);
          // console.log(paymentMethod);
        }}
      >
        <StyledLabel>
          <StyledRadioButton
            type="radio"
            value="Кредитная/дебетовая карта"
            name="paymentMethod"
          />
          Кредитная/дебетовая карта (Stripe)
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton type="radio" value="PayPal" name="paymentMethod" />
          PayPal
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton
            type="radio"
            value="SEPA Direct Debit"
            name="paymentMethod"
          />
          SEPA Direct Debit
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton
            type="radio"
            value="Bancontact"
            name="paymentMethod"
          />
          Bancontact
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton
            type="radio"
            value="Giropay"
            name="paymentMethod"
          />
          Giropay
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton type="radio" value="EPS" name="paymentMethod" />
          EPS
        </StyledLabel>

        <StyledLabel>
          <StyledRadioButton type="radio" value="iDeal" name="paymentMethod" />
          iDeal
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton
            type="radio"
            value="Przelewy24 (24)"
            name="paymentMethod"
          />
          Przelewy24 (24)
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton type="radio" value="Alipay" name="paymentMethod" />
          Alipay
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton
            type="radio"
            value="Multicanco"
            name="paymentMethod"
          />
          Multibanco
        </StyledLabel>
        <StyledLabel>
          <StyledRadioButton
            type="radio"
            value="Баланс на аккаунте"
            name="paymentMethod"
          />
          Баланс на аккаунте
        </StyledLabel>
      </StyledSelect>
    </>
  );
}
