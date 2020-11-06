import React, { useContext } from "react";
import {
  StyledSelect,
  StyledLabel,
  StyledRadioButton,
  StyledLabelAndInputContainer,
  StyledTextboxInfo,
  StyledInfo,
  StyledRedirectInfo,
} from "./styled";
import { Context } from "../pages/index";
import AddPayment from "./AddPayment";

export default function SelectCard() {
  const { paymentMethod, setPaymentMethod } = useContext(Context);
  const onChangeValue = (e) => {
    setPaymentMethod(e.target.value);
  };

  const SiteRedirect = () => {
    if (
      paymentMethod !== "Кредитная/дебетовая карта" &&
      paymentMethod !== "PayPal"
    ) {
      return (
        <StyledRedirectInfo>Оплата на сайте {paymentMethod}</StyledRedirectInfo>
      );
    }
    return null;
  };

  return (
    <>
      <StyledSelect
      // onChangeValue={(e) => {
      //   setPaymentMethod(e.target.value);
      //   // console.log(paymentMethod);
      // }}
      >
        <StyledLabelAndInputContainer>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="Кредитная/дебетовая карта"
              checked={paymentMethod === "Кредитная/дебетовая карта"}
              onChange={onChangeValue}
              name="paymentMethod"
            />
            Кредитная/дебетовая карта (Stripe)
          </StyledLabel>
          {paymentMethod === "Кредитная/дебетовая карта" && <AddPayment />}
        </StyledLabelAndInputContainer>
        <StyledLabelAndInputContainer>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="PayPal"
              name="paymentMethod"
              checked={paymentMethod === "PayPal"}
              onChange={onChangeValue}
            />
            PayPal
          </StyledLabel>
          {paymentMethod === "PayPal" && <AddPayment />}
        </StyledLabelAndInputContainer>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="SEPA Direct Debit"
              name="paymentMethod"
              checked={paymentMethod === "SEPA Direct Debit"}
              onChange={onChangeValue}
            />
            SEPA Direct Debit
          </StyledLabel>
          {paymentMethod === "SEPA Direct Debit" && <SiteRedirect />}
        </div>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="Bancontact"
              name="paymentMethod"
              checked={paymentMethod === "Bancontact"}
              onChange={onChangeValue}
            />
            Bancontact
          </StyledLabel>
          {paymentMethod === "Bancontact" && <SiteRedirect />}
        </div>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="Giropay"
              name="paymentMethod"
              checked={paymentMethod === "Giropay"}
              onChange={onChangeValue}
            />
            Giropay
          </StyledLabel>
          {paymentMethod === "Giropay" && <SiteRedirect />}
        </div>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="EPS"
              name="paymentMethod"
              checked={paymentMethod === "EPS"}
              onChange={onChangeValue}
            />
            EPS
          </StyledLabel>
          {paymentMethod === "EPS" && <SiteRedirect />}
        </div>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="iDeal"
              name="paymentMethod"
              checked={paymentMethod === "iDeal"}
              onChange={onChangeValue}
            />
            iDeal
          </StyledLabel>
          {paymentMethod === "iDeal" && <SiteRedirect />}
        </div>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="Przelewy24 (24)"
              name="paymentMethod"
              checked={paymentMethod === "Przelewy24 (24)"}
              onChange={onChangeValue}
            />
            Przelewy24 (24)
          </StyledLabel>
          {paymentMethod === "Przelewy24 (24)" && <SiteRedirect />}
        </div>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="Alipay"
              name="paymentMethod"
              checked={paymentMethod === "Alipay"}
              onChange={onChangeValue}
            />
            Alipay
          </StyledLabel>
          {paymentMethod === "Alipay" && <SiteRedirect />}
        </div>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="Multicanco"
              name="paymentMethod"
              checked={paymentMethod === "Multicanco"}
              onChange={onChangeValue}
            />
            Multibanco
          </StyledLabel>
          {paymentMethod === "Multicanco" && <SiteRedirect />}
        </div>
        <div>
          <StyledLabel>
            <StyledRadioButton
              type="radio"
              value="Баланс на аккаунте"
              name="paymentMethod"
              checked={paymentMethod === "Баланс на аккаунте"}
              onChange={onChangeValue}
            />
            Баланс на аккаунте
          </StyledLabel>
        </div>
      </StyledSelect>
    </>
  );
}
