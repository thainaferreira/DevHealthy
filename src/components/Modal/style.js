import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);

  .modal {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: center;
    background-color: #e2b6cf;
    position: relative;
    border-radius: 12px;

    button:first-child {
      margin-left: auto;
    }
  }
`;
