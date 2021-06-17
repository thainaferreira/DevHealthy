import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding-top: 16px;
  max-height: 65px;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

export const Figure = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const ImageIcon = styled.img`
  width: 90px;
  @media (max-width: 700px) {
    width: 70px;
  }
  @media (max-width: 425px) {
    width: 60px;
  }
`;
export const Image = styled.img`
  width: 280px;
  @media (max-width: 700px) {
    width: 220px;
  }
  @media (max-width: 425px) {
    width: 180px;
  }
`;
