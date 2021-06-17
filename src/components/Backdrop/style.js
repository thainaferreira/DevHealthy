import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fafafa",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    textAlign: "center",

    "& p": {
      fontSize: "1.2rem",
      fontWeight: "bold",
      textAlign: "center",
      padding: 8,
      lineBreak: "loose",
    },
  },
  simplePopUp: {
    display: "flex",
    gap: 8,
  },
}));
