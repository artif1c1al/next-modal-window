import React, { useContext } from "react";
import { StyledTextboxInfo, StyledSubmitBtn, StyledAgreements } from "./styled";
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
    <StyledAgreements>
      <AgreementCheckbox
        checked={savePaymentInfo}
        onClick={setSavePaymentInfo}
        text={saveInfo}
      />
      <StyledTextboxInfo>
        Ваши личные данные будут использоваться для обработки ваших заказов,
        упращения вашей работы с сайтом и других целей, описанных в нашей
        Политике конфиденциальности.
      </StyledTextboxInfo>
      <AgreementCheckbox
        checked={isIReadTheAgreement}
        onClick={setIsIReadTheAgreement}
        text={readRules}
      />
    </StyledAgreements>
  );
}
