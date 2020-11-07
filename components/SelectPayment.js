import React, { useContext, useState } from "react";
import {
  StyledSelect,
  StyledLabel,
  StyledSelectRadio,
  StyledLabelAndInputContainer,
  StyledInfo,
  StyledWrapper,
} from "./styled";
import { Context } from "../pages/index";
import AddPayment from "./AddPayment";

export default function SelectCard() {
  const { paymentMethod, setPaymentMethod } = useContext(Context);

  const onChangeValue = (e) => {
    setPaymentMethod(e.target.value);
    // e.target = (
    //   <div>
    //     {e.target}
    //   </div>
    // );
  };

  const SiteRedirect = () => {
    return (
      paymentMethod !== "Кредитная/дебетовая карта" &&
      paymentMethod !== "PayPal" && (
        <StyledInfo margin="0 0 0 12px">
          Оплата на сайте {paymentMethod}
        </StyledInfo>
      )
    );
  };

  return (
    <>
      <StyledSelect
      // onChangeValue={(e) => {
      //   setPaymentMethod(e.target.value);
      //   // console.log(paymentMethod);
      // }}
      >
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.CARD}
              checked={paymentMethod === process.env.CARD}
              onChange={onChangeValue}
            />
            {process.env.CARD}
          </StyledLabel>
          {paymentMethod === process.env.CARD && <AddPayment />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.PAYPAL}
              checked={paymentMethod === process.env.PAYPAL}
              onChange={onChangeValue}
            />
            {process.env.PAYPAL}
          </StyledLabel>
          {paymentMethod === "PayPal" && <AddPayment />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.SEPA}
              checked={paymentMethod === process.env.SEPA}
              onChange={onChangeValue}
            />
            {process.env.SEPA}
          </StyledLabel>
          {paymentMethod === process.env.SEPA && <SiteRedirect />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.BANCONTACT}
              checked={paymentMethod === process.env.BANCONTACT}
              onChange={onChangeValue}
            />
            {process.env.BANCONTACT}
          </StyledLabel>
          {paymentMethod === process.env.BANCONTACT && <SiteRedirect />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.GIROPAY}
              checked={paymentMethod === process.env.GIROPAY}
              onChange={onChangeValue}
            />
            {process.env.GIROPAY}
          </StyledLabel>
          {paymentMethod === process.env.GIROPAY && <SiteRedirect />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.ESP}
              checked={paymentMethod === process.env.ESP}
              onChange={onChangeValue}
            />
            {process.env.ESP}
          </StyledLabel>
          {paymentMethod === process.env.ESP && <SiteRedirect />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.IDEAL}
              checked={paymentMethod === process.env.IDEAL}
              onChange={onChangeValue}
            />
            {process.env.IDEAL}
          </StyledLabel>
          {paymentMethod === process.env.IDEAL && <SiteRedirect />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.PRZELEWY}
              checked={paymentMethod === process.env.PRZELEWY}
              onChange={onChangeValue}
            />
            {process.env.PRZELEWY}
          </StyledLabel>
          {paymentMethod === process.env.PRZELEWY && <SiteRedirect />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.ALIPAY}
              checked={paymentMethod === process.env.ALIPAY}
              onChange={onChangeValue}
            />
            {process.env.ALIPAY}
          </StyledLabel>
          {paymentMethod === process.env.ALIPAY && <SiteRedirect />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.MULTICANCO}
              checked={paymentMethod === process.env.MULTICANCO}
              onChange={onChangeValue}
            />
            {process.env.MULTICANCO}
          </StyledLabel>
          {paymentMethod === process.env.MULTICANCO && <SiteRedirect />}
        </StyledWrapper>
        <StyledWrapper>
          <StyledLabel>
            <StyledSelectRadio
              value={process.env.BALANCE}
              checked={paymentMethod === process.env.BALANCE}
              onChange={onChangeValue}
            />
            {process.env.BALANCE}
          </StyledLabel>
        </StyledWrapper>
      </StyledSelect>
    </>
  );
}
