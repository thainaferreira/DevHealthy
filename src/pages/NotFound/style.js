import styled from "styled-components";
import bgImage from "../../assets/img/p404.png";
import logo from "../../assets/img/cursorLogo.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${bgImage}) ${({ move }) => move.x}px
      ${({ move }) => move.y}px,
    #8ecc8e;
  cursor: url(${logo}), auto;
`;

export const Content = styled.div`
  max-width: 600px;
  text-align: center;

  h2 {
    font-size: clamp(8rem, 18vw, 22rem);
    color: #fafafa;
    line-height: 1em;
  }

  div {
    width: 90%;
    margin: 0 auto;
  }

  h4 {
    font-size: clamp(1.5rem, 4vw, 3rem);
    color: #666666;
    background: #fafafa;
    font-weight: 500;
    padding: 10px 0;
  }

  p {
    font-size: clamp(0.8rem, 2vw, 1rem);
    margin: 20px 0;
  }
`;
