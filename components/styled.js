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
  display: ${(props) => props.display || "none"};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

export const StyledModalWindow = styled.div`
  max-width: 970px;
  position: relative;
  margin: 200px auto;
  background-color: #aaa;
  border-radius: 10px;
  padding: 30px 80px 100px;
  position: relative;
  z-index: 2;
  animation: ${modalfall} 0.3s ease-in;
  @media screen and (max-width: 800px) {
    margin: auto;
    padding: 20px 40px;
  }
`;

export const StyledCross = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const StyledArrow = styled.a`
  position: absolute;
  top: 22px;
  right: 25px;
  border: solid #777;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;

  transform: rotate(45deg);
`;

export const StyledError = styled.span`
  color: red;
`;

export const StyledModalHeader = styled.h1`
  text-align: center;
  font-weight: 200;
  margin-top: 50px;
`;

export const StyledOrder = styled.div`
  margin: 30px 0 70px;
`;

export const StyledOrderHeader = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin: 0px 0 40px;
`;

export const StyledOrderItem = styled.p`
  margin: 20px 0;
`;

export const StyledCardInput = styled.input`
  padding: 20px;
  margin-top: 13px;
  border-radius: 8px;
  border: 1px solid #dadada;
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
  display: ${(props) => (props.visability ? "grid" : "none")};
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
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
  display: block;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: 15px;
`;

export const StyledRadioButton = styled.input`
  margin-right: 15px;
  transform: scale(1.3);
`;

export const StyledCardLabel = styled.label`
  display: block;
  font-weight: 600;
`;

export const StyledCheckbox = styled.input`
  margin-right: 5px;
  transform: scale(1.3);
  /* outline: 1px solid #fff; */
`;

export const StyledInfo = styled.div`
  color: #777;
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

export const StyledSelect = styled.div`
  display: ${(props) => (props.visability ? "block" : "none")};
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

export const StyledSelectHeader = styled(StyledSelect)`
  display: block;
  position: relative;
  margin-bottom: 2px;
  padding-left: 30px;
`;

export const StyledAgreements = styled.div`
  margin-bottom: 40px;
`;

export const StyledPaymentWrapper = styled.div`
  margin: 0 100px;
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const StyledAddCard = styled.div``;
