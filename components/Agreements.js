import React, { useContext } from "react";
import { StyledInfo } from "./styled";
import AgreementCheckbox from "./AgreementCheckbox";
import { Context } from "../pages/index";

export default function Agreements() {
  const saveInfo =
    "Сохранить информацию об оплате на мой счем для будущих покупок";
  const readRules = "Я прочитал(а) и соглашаюсь с правилами сайта";
  const {
    savePaymentInfo,
    setSavePaymentInfo,
    isIReadTheAgreement,
    setIsIReadTheAgreement,
  } = useContext(Context);
  return (
    <StyledInfo margin="0 0 40px 0">
      <AgreementCheckbox
        checked={savePaymentInfo}
        onClick={setSavePaymentInfo}
        text={saveInfo}
      />
      <StyledInfo margin="30px 0 15px">
        Ваши личные данные будут использоваться для обработки ваших заказов,
        упращения вашей работы с сайтом и других целей, описанных в нашей
        Политике конфиденциальности.
      </StyledInfo>
      <AgreementCheckbox
        checked={isIReadTheAgreement}
        onClick={setIsIReadTheAgreement}
        text={readRules}
      />
    </StyledInfo>
  );
}
