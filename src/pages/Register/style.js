import styled from "styled-components";
import bg from "../../assets/img/bg.svg";
import { Link } from "react-router-dom";

export const BackgroundContainer = styled.div`
  @media (min-width: 768px) {
    background: url(${bg}) no-repeat center;
    background-size: contain;
  }
  width: 100%;
  height: 80vh;
`;

export const MainContainer = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  form {
    p {
      padding-top: 10px;
      font-family: "Roboto", sans-serif;
      font-size: 0.7rem;
      color: black;
    }
    span {
      font-weight: 700;
    }
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bolder;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
