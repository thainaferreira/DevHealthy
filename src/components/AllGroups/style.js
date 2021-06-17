import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 3rem;
  }
`;

export const ContainerGroups = styled.div`
  width: 80%;
  height: 100%;
  max-height: 285px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

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

export const InternContainer = styled.div`
  .Header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;

    figure {
      width: 60px;

      margin-right: 10px;
      img {
        width: 100%;
      }
    }

    h4 {
      font-size: 1.3rem;
      width: 80%;
      text-align: center;
    }
  }

  .Body {
    padding: 5px;
    span {
      margin-right: 5px;
      font-weight: 600;
    }
  }
`;

export const ContainerControlers = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 8px 0;

  Button {
    font-size: 1rem;
  }
`;

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9c9d9;
  padding: 5px;
  border-radius: 10px;
  font-size: 1rem;
  color: white;

  icon {
    color: white;
  }

  input {
    background-color: transparent;
    color: #5c5959;
    border: none;
    padding: 5px;
    outline: none;
    font-size: 1rem;
  }
`;

export const Container = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 8px 36px;
`;

export const FilterContainer = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    li {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      margin: 0 2px;
      background-color: #e9c9d9;
      font-size: 0.8rem;
      padding: 4px;
      text-align: center;
      transition: background 300ms ease-in-out;

      :hover {
        background-color: #8ecc8e;
      }

      a {
        width: 100%;
        height: 100%;
        border-radius: 10px;

        color: #938e8e;

        display: flex;
        justify-content: center;
        align-items: center;

        :focus {
          color: #fafafa;
          text-shadow: 0.5px 0.5px #666666;
        }
      }
    }
  }
`;
