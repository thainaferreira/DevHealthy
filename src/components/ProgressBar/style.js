import styled from "styled-components";

export const Container = styled.div`
  width: 184px;
  height: 20px;
  background: #fafafa;
  border-radius: 15px;
`;

export const Progress = styled.div`
  width: ${({ progress }) => progress}%;
  background: ${({ progress }) =>
    progress <= 20 ? "#FF8585" : progress <= 70 ? "#FFFB95" : "#95FF95"};
  height: 100%;
  border-radius: 15px;
`;
