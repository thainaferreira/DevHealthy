import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 200px;
  height: 100px;
  padding: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  cursor: pointer;
  border-radius: 10px;
  transition: background 300ms ease-in-out;

  figure {
    width: 30%;
    max-width: 30px;
    height: 30px;
  }

  h4 {
    min-width: 70%;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 400;
  }

  p {
    font-size: 0.8rem;
    flex-grow: 1;
    text-align: center;
  }

  :hover {
    background-color: #e9c9d9;
  }
`;
