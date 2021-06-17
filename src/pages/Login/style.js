import styled from "styled-components";
import background from "../../assets/img/image-login.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: calc(100% - 65px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    background-image: unset;
  }
`;

export const ContainerForm = styled.div`
  margin-left: 22vw;
  margin-bottom: 15vh;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Text = styled.span`
  font-size: 0.7rem;
  color: black;
  padding-top: 10px;
`;

export const LinkStyle = styled(Link)`
  color: black;
  font-weight: bolder;
  transition: color 300ms ease-in-out;

  &:hover {
    color: #397f39;
  }
`;
