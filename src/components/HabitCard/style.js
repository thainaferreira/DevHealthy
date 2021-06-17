import styled from "styled-components";

export const HabitCardStyled = styled.div`
  background-color: rgba(226, 182, 207, 0.47);
  width: 250px;
  height: 200px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 8px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  p {
    flex-grow: 1;
    font-weight: bold;
    text-align: center;
    line-break: loose;
  }
`;

export const Ball = styled.div`
  background-color: ${(props) =>
    props.difficulty === "Fácil"
      ? "#61d261"
      : props.difficulty === "Média"
      ? "#eaea31"
      : props.difficulty === "Difícil"
      ? "orange"
      : "red"};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const CheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  svg {
    font-size: 2rem;
  }
`;

export const ProgressContainer = styled.div`
  width: 100%;
  margin: 0 10px;

  p {
    span {
      font-size: 1rem;
      font-style: italic;
      font-weight: 500;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  img {
    width: 30px;
  }
`;

export const BodyContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
