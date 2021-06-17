import styled from "styled-components";
import { Link } from "react-router-dom";
import bgImage from "../../assets/img/nothing-registered.svg";

export const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 8px;

  overflow-y: scroll;

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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  flex-grow: 1;

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

export const Content = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 4px;
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bolder;
  transition: color 300ms ease-in-out;

  &:hover {
    color: #397f39;
  }
`;

export const NullGoals = styled.div`
  height: 90%;
  min-height: 250px;
  max-height: 360px;
  background: url(${bgImage}) no-repeat center;
  background-size: contain;
  text-align: center;

  p {
    font-size: 1.2rem;
    text-shadow: 1px 1px #e396df;
    font-weight: bold;
  }
`;

export const Goals = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const TitleGoal = styled.h4`
  font-weight: 500;
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LevelDifficulty = styled.div`
  width: 100px;
  height: 5px;
  margin: 8px 0;
  background-color: ${({ difficulty }) =>
    difficulty === "Fácil"
      ? "#95FF95"
      : difficulty === "Média"
      ? "#FFFB95"
      : difficulty === "Difícil"
      ? "#FFA500"
      : "#FF0000"};
`;

export const NameGroup = styled.span`
  text-transform: uppercase;
  font-style: italic;
  font-size: 0.7rem;
`;

export const ProgressStyle = styled.span`
  span {
    font-weight: bolder;
    font-size: 1.1rem;
    text-shadow: 2px 2px 2px pink;
    color: ${({ progress }) =>
      progress <= 30 ? "#FF61DC" : progress <= 70 ? "#A055FF" : "#617AFF"};
  }
`;

export const SeeMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    cursor: pointer;
  }
`;

export const ArrowIcon = styled.img`
  width: 20px;
  cursor: pointer;
`;
