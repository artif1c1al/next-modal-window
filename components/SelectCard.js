import React, { useContext } from "react";
import { StyledSelect, StyledOption } from "./styled";
import { Context } from "../pages/index";

export default function SelectCard() {
  const { paymentMethod, setPaymentMethod } = useContext(Context);
  return (
    <StyledSelect
      value={paymentMethod}
      onChange={(e) => setPaymentMethod(e.target.value)}
    >
      <option value="PayPal">PayPal</option>
      <option value="SEPA">SEPA Direct Debit</option>
      <option value="Bancontact">Bancontact</option>
      <option value="Giropay">Giropay</option>
      <option value="EPS">EPS</option>
      <option value="iDeal">iDeal</option>
      <option value="Przelewy24">Przelewy24 (P24)</option>
      <option value="Alipay">Alipay</option>
      <option value="Multibanco">Multibanco</option>
      <option value="AccauntBalans">Баланс на аккаунте</option>
    </StyledSelect>
  );
}
