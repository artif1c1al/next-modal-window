import styled, { keyframes } from "styled-components";

export const StyledModalWindowBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  display: ${(props) => props.display || "none"};
  background-color: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const modalfall = keyframes`
  from {
    top: -400px;
    /* opacity: 0; */
  }
  to {
    top: 0;
    /* opacity: 1; */
  }
`;

export const StyledModalWindow = styled.div`
  max-width: 970px;
  min-height: 400px;
  background-color: whitesmoke;
  border-radius: 4px;
  padding: 30px 50px;
  position: relative;
  z-index: 2;
  animation: ${modalfall} 0.3s ease-in;
`;

export const StyledCross = styled.span`
  position: relative;
  width: 100%;
  top: -10px;
  /* left: 100%; */
  left: 100%;
  font-size: 30px;
`;
