import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  primaryLight: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: "rgba(176, 120, 164, 1)",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
    },
  },
}));

export const ButtonStyled = styled(Button)`
  color: ${(props) => (props.grayText ? "#666666" : "#fafafa")};
  min-width: 120px;
`;
