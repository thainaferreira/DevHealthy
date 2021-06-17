import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  width: 280px;

  .habitMenu {
    font-size: 0.8rem;
    cursor: pointer;
  }

  Button,
  div:first-child {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
  }

  p {
    flex-grow: 1;
    line-break: loose;
    text-align: center;
    font-size: 0.8rem;
  }
`;
