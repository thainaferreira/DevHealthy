import styled from "styled-components";
import bgImage from "../../assets/img/nothing-registered.svg";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 767px) {
    padding: 8px;
  }

  .btnAddHabit {
    width: fit-content;
    align-self: flex-end;
  }

  .habitsTitle {
    font-size: 1.2rem;
    text-shadow: 1px 1px #e396df;
    font-weight: bold;
    text-align: center;

    @media (max-width: 359px) {
      font-size: 1rem;
    }
  }
`;

export const HabitContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e2b6cf;
  }
`;

export const NoHabits = styled.div`
  height: 100%;
  padding-top: 16px;
  min-height: 300px;
  max-height: 360px;
  flex-grow: 1;
  background: url(${bgImage}) no-repeat center;
  background-size: contain;
  text-align: center;

  p {
    font-size: 1.5rem;
    text-shadow: 1px 1px #e396df;
    font-weight: bold;
  }
`;
