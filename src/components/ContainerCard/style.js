import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width};
  height: 80%;
  min-height: ${({ minHeigth }) => minHeigth}px;
  max-height: ${({ maxHeigth }) => maxHeigth}px;
  background-color: rgba(226, 182, 207, 0.46);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin: 8px auto;

  h3 {
    text-align: center;
    color: #666666;
  }

  @media (max-width: 600px) {
    width: 80%;
    max-height: 300px;
  }
`;
