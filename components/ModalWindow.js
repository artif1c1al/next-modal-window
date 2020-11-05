import React, { useContext } from "react";
import {
  StyledModalWindowBackground,
  StyledModalWindow,
  StyledCross,
  StyledModalHeader,
  StyledPayment,
  StyledSubmitBtn,
  StyledPaymentWrapper,
} from "./styled";
import OrderInfo from "./OrderInfo";
import AddCard from "./AddCard";
import Agreements from "./Agreements";
import { Context } from "../pages/index";

export default function ModalWindow({ isModalOpen, setIsModalOpen }) {
  const {
    cardNumber,
    expiryDate,
    cvc,
    paymentMethod,
    savePaymentInfo,
    isIReadTheAgreement,
  } = useContext(Context);

  const onSubmit = () => {
    console.group("Payment info");
    console.log("🧾 Payment method: " + paymentMethod);
    console.log("💳 Card number: " + cardNumber);
    console.log("⌚ Card expiry date: " + expiryDate);
    console.log("🤐 Card CVC: " + cvc);
    console.log(
      savePaymentInfo
        ? "😎 I want you to save my payment info"
        : "🛑 I don't want you to save my payment info"
    );
    console.log(
      isIReadTheAgreement
        ? "😎 I read the agreement"
        : "🛑 I didn't read the agreement"
    );
    console.groupEnd();
  };
  return (
    <StyledModalWindowBackground
      display={isModalOpen ? "block" : "none"}
      data-modalwindow
      onClick={(e) => {
        if (e.target.dataset.modalwindow) {
          setIsModalOpen(false);
        }
      }}
    >
      <StyledModalWindow>
        <StyledCross onClick={() => setIsModalOpen(false)} />
        <StyledModalHeader>Оформление участия</StyledModalHeader>
        <OrderInfo tovar={"Samsung Note 20"} poditog={"20,00"} itog={"20,00"} />
        <StyledPaymentWrapper>
          <AddCard />
          <Agreements />
          <StyledSubmitBtn onClick={onSubmit}>ОПЛАТИТЬ</StyledSubmitBtn>
        </StyledPaymentWrapper>
      </StyledModalWindow>
    </StyledModalWindowBackground>
  );
}
