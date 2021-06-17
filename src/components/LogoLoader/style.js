import styled, { keyframes } from "styled-components";

const blink = keyframes`
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
    margin: 0 auto;
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: rgba(226, 182, 207, 0.47);
`

export const ImageIcon = styled.img`
  height: 200px;
  opacity: 0.5;
  animation: ${blink} 0.4s linear alternate-reverse infinite;
`

