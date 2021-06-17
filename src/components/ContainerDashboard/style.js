import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerContent = styled.div`
  height: 100%;
  width: 80%;
  padding: 16px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
