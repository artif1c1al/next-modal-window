import styled, { keyframes } from "styled-components";

const modalfall = keyframes`
  from {
    top: -800px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
`;

export const ButtonShow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 200px;
  height: 50px;
  outline: none;
  border: none;
  background-color: #1197bf;
  color: white;
`;

export const StyledModalWindowBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  top: 0;
  left: 0;
  overflow: auto;
  display: ${(props) => props.display || "none"};
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const StyledModalWindow = styled.div`
  width: 970px;
  margin-top: 100px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px 80px;
  position: relative;
  z-index: 2;
  animation: ${modalfall} 0.3s ease-in;
  @media screen and (max-width: 800px) {
    padding: 20px 40px;
  }
`;

export const StyledCross = styled.span`
  position: relative;
  width: 100%;
  top: -10px;
  left: 100%;
  font-size: 30px;
  cursor: pointer;
`;

export const StyledError = styled.span`
  color: red;
`;

export const StyledModalHeader = styled.h1`
  text-align: center;
  font-weight: 200;
`;

export const StyledOrder = styled.div`
  margin: 30px 0 40px;
`;

export const StyledOrderHeader = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin: 0px 0 40px;
`;

export const StyledOrderItem = styled.p`
  margin: 20px 0;
`;

export const StyledCardInput = styled.input`
  padding: 20px;
  margin-top: 7px;
  border-radius: 8px;
  border: 1px solid #aaa;
  width: 100%;
`;

export const StyledCardNumberGroup = styled.div`
  grid-area: cardNumber;
`;
export const StyledCardExpiryGroup = styled.div`
  grid-area: cardExpiry;
`;
export const StyledCardCvcGroup = styled.div`
  grid-area: cardCvc;
`;
export const StyledCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 25px;
  grid-template-areas:
    "cardNumber cardNumber"
    "cardExpiry cardCvc";
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "cardNumber"
      "cardExpiry"
      "cardCvc";
  }
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  display: block;
`;

export const StyledCheckbox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

export const StyledInfo = styled.div`
  color: #444;
`;

export const StyledAgreementCheckbox = styled(StyledInfo)`
  display: flex;
  align-items: center;
`;

export const StyledTextboxInfo = styled(StyledInfo)`
  margin: 30px 0 15px;
`;

export const StyledSubmitBtn = styled.button`
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1197bf;
  outline: none;
  border: none;
  border-radius: 3px;
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 20px;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 700;
  outline: none;
  cursor: pointer;
`;

export const StyledAgreements = styled.div`
  margin-bottom: 30px;
`;

export const StyledPaymentWrapper = styled.div`
  margin: 0 100px;
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
