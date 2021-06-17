import styled from "styled-components";

export const Container = styled.div`
  p:first-child {
    font-weight: bold;
    line-break: loose;
  }

  p:last-child {
    font-size: 0.8rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .activityMenu {
    cursor: pointer;
  }
`;
