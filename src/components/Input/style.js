import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  .message {
    width: 100%;
    height: 20px;
    color: #f44336;
  }
`;

export const InputStyled = styled(TextField)`
  background-color: ${(props) =>
    props.pinkScheme ? "rgba(226, 182, 207, 0.67)" : "#fafafa"};
  border-radius: 4px;

  label {
    color: ${(props) => (props.pinkScheme ? "#666666" : "#cccccc")};
  }

  .MuiInput-underline::before {
    border-color: transparent;
  }
`;
