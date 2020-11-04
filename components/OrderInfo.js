import React from "react";
import { StyledOrder, StyledOrderHeader, StyledOrderItem } from "./styled";

export default function OrderInfo({ tovar, poditog, itog }) {
  return (
    <StyledOrder>
      <StyledOrderHeader>Ваш заказ</StyledOrderHeader>
      <StyledOrderItem>
        <b>Товар: </b>
        {tovar}
      </StyledOrderItem>
      <StyledOrderItem>
        <b>Подытог: $</b>
        {poditog}
      </StyledOrderItem>
      <StyledOrderItem>
        <b>Итог: $</b>
        {itog}
      </StyledOrderItem>
    </StyledOrder>
  );
}
