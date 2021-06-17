import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  item: {
    display: "flex",
    justifyContent: "space-between",
    "& svg": {
      color: "#E365C1",
    },
  },
  container: {
    "& svg": {
      color: "#E365C1",
    },
  },
});
