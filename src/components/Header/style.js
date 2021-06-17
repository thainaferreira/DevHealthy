import styled, { keyframes } from "styled-components";
import headerBG from "../../assets/img/headerBG.svg";

const fadeIn = keyframes`
  to {
    opacity: 1;
  }

`;

export const Container = styled.header`
  width: 100%;
  height: 35%;
  max-height: 200px;
  padding: 0 10px;
  background-color: #8ecc8e;

  .header {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    color: #fafafa;

    @media (max-width: 620px) {
      width: 100%;
      font-size: 1rem;
    }

    @media (max-width: 360px) {
      font-size: 0.8rem;
    }

    div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 60px;

        @media (min-width: 768px) {
          width: 80px;
        }
      }

      svg {
        @media (min-width: 768px) {
          font-size: 2rem;
        }
      }
    }

    .userMenu {
      width: 100%;
      flex-grow: 1;
      display: flex;
      position: relative;

      .navTabs {
        width: 50%;
      }

      .navTabs,
      .welcomeWrapper {
        display: flex;
        flex-direction: column;
      }

      .welcomeWrapper {
        width: 100%;
        flex-grow: 1;
        padding: 0 0 40px 60px;
        align-items: flex-start;
        justify-content: center;
        opacity: 0;
        animation: ${fadeIn} 2s forwards 500ms;

        p:last-child {
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      .imageBG {
        background: url(${headerBG}) no-repeat center;
        background-size: contain;
        width: 50%;
      }
    }
  }
`;
