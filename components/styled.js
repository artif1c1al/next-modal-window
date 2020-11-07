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
  margin: 120px auto 200px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 80px 100px;
  position: relative;
  z-index: 2;
  animation: ${modalfall} 0.3s ease-in;
  @media screen and (max-width: 800px) {
    margin: 40px 20px;
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

export const StyledWrapper = styled.div`
  margin: ${(props) => props.margin || 0};
`;

export const StyledOrderHeader = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  margin: 0px 0 40px;
`;

export const StyledCardInput = styled.input`
  padding: 20px;
  margin-top: 13px;
  border-radius: 8px;
  border: 1px solid #dadada;
  width: 100%;
`;

export const StyledEmailInput = styled(StyledCardInput)`
  font-size: 24px;
  padding: 12px;
  margin-bottom: 20px;
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
  display: block;
`;

export const StyledCardLabel = styled.label`
  display: block;
  font-weight: 600;
`;

export const StyledLabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
`;

export const StyledCheckbox = styled.input`
  margin-right: 5px;
  transform: scale(1.3);
`;

export const StyledInfo = styled.div`
  color: #777;
  margin: ${(props) => props.margin || 0};
`;

export const StyledAgreementCheckbox = styled(StyledInfo)`
  display: flex;
  align-items: center;
`;

export const StyledSubmitBtn = styled.button`
  width: 100%;
  height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(17, 150, 191, 1);
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.15s;

  &:hover {
    transform: translateY(-1px);
    background-color: rgb(17, 150, 191, 0.9);
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const StyledSelect = styled.div`
  display: "block";
  width: 100%;
  padding: 20px;
  background-color: #eee;
  border: none;
  border-radius: 4px;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 700;
  outline: none;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const StyledSelectHeader = styled(StyledSelect)`
  display: block;
  position: relative;
  margin-bottom: 2px;
  padding-left: 30px;
`;

export const StyledPaymentWrapper = styled(StyledWrapper)`
  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;

export const StyledAddCard = styled.div``;
