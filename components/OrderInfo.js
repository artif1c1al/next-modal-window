import React from "react";
import { StyledOrderHeader, StyledWrapper } from "./styled";

export default function OrderInfo({ tovar, poditog, itog }) {
  return (
    <StyledWrapper margin="30px 0 70px">
      <StyledOrderHeader>Ваш заказ</StyledOrderHeader>
      <StyledWrapper margin="20px 0">
        <b>Товар: </b>
        {tovar}
      </StyledWrapper>
      <StyledWrapper margin="20px 0">
        <b>Подытог: $</b>
        {poditog}
      </StyledWrapper>
      <StyledWrapper margin="20px 0">
        <b>Итог: $</b>
        {itog}
      </StyledWrapper>
    </StyledWrapper>
  );
}
