import ModalWindow from "../components/ModalWindow";
import { useState } from "react";
import { ButtonShow } from "../components/styled";

export const Context = React.createContext();
export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvs] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [savePaymentInfo, setSavePaymentInfo] = useState(false);
  const [isIReadTheAgreement, setIsIReadTheAgreement] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  return (
    <Context.Provider
      value={{
        cardNumber,
        setCardNumber,
        expiryDate,
        setExpiryDate,
        cvc,
        setCvs,
        paymentMethod,
        setPaymentMethod,
        savePaymentInfo,
        setSavePaymentInfo,
        isIReadTheAgreement,
        setIsIReadTheAgreement,
        isDropdownOpen,
        setIsDropdownOpen,
        paypalEmail,
        setPaypalEmail,
      }}
    >
      <div className="App">
        <ButtonShow onClick={() => setIsModalOpen(true)}>
          Open Modal Window
        </ButtonShow>
        <ModalWindow
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </Context.Provider>
  );
}
