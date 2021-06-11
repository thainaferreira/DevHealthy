import styled from "styled-components";
import DevWoman from "../../assets/img/landing_page_woman.svg";
import DevBoy from "../../assets/img/landing_page_boy.svg";

export const ContainerStyled = styled.div`
  width: 80%;
  height: 100%;

  margin: 0 auto;
  padding: 20px 0;
  display: flex;

  @media (max-width: 768px) {
    .images {
      display: none;
    }

    .controlers {
      width: 80%;
      margin: 0 auto;
      h3 {
        font-size: 1rem;
      }
      figure:first-child {
        transform: translateY(10px);
      }
    }
  }
`;

export const InternContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .imagesBG {
    width: 100%;
    height: 50%;
  }

  .imagesBG:first-child {
    background: url(${DevBoy}) no-repeat center;
    background-size: contain;
  }

  .imagesBG:last-child {
    background: url(${DevWoman}) no-repeat center;
    background-size: contain;
  }

  figure {
    width: 70%;

    img {
      width: 100%;
    }
  }
`;

export const ContainerLogo = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding-left: 50px;

  figure {
    width: 30%;

    img {
      width: 100%;
    }

    :nth-child(2) {
      width: 90%;
    }
  }

  figure:first-child {
    transform: translateY(30px);
  }

  div {
    h3 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;

export const ContainerControlers = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  

  Button{
    font-size: 1.5rem;
  }

  Button:first-child {
    margin-top: 40px;
  }

  Button:last-child {
    margin-top: 20px;
  }
`;
