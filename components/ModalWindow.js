import React, { useContext } from "react";
import {
  StyledModalWindowBackground,
  StyledModalWindow,
  StyledCross,
  StyledModalHeader,
  StyledSubmitBtn,
  StyledPaymentWrapper,
} from "./styled";
import OrderInfo from "./OrderInfo";
import AddPayment from "./AddPayment";
import Agreements from "./Agreements";
import { Context } from "../pages/index";
import SelectPayment from "./SelectPayment";

export default function ModalWindow({ isModalOpen, setIsModalOpen }) {
  const {
    cardNumber,
    expiryDate,
    cvc,
    paymentMethod,
    savePaymentInfo,
    isIReadTheAgreement,
    paypalEmail,
    setPaypalEmail,
  } = useContext(Context);

  const onSubmit = () => {
    console.group("Payment info");
    console.log("🧾 Payment method: " + paymentMethod);
    if (cardNumber) {
      console.log("💳 Card number: " + cardNumber);
      console.log("⌚ Card expiry date: " + expiryDate);
      console.log("🤐 Card CVC: " + cvc);
    } else if (paypalEmail) {
      console.log("💲 Paypal e-mail: " + paypalEmail);
    }
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
          {/* <AddPayment /> */}
          <SelectPayment />
          <Agreements />
          <StyledSubmitBtn onClick={onSubmit}>ОПЛАТИТЬ</StyledSubmitBtn>
        </StyledPaymentWrapper>
      </StyledModalWindow>
    </StyledModalWindowBackground>
  );
}
