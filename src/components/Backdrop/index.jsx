import { Backdrop as BackdropStyled } from "@material-ui/core";
import { useStyles } from "./style";

const Backdrop = ({ text, simple = false, children, ...rest }) => {
  const classes = useStyles();
  return (
    <BackdropStyled className={classes.backdrop} {...rest}>
      <p>{text}</p>
      <div className={simple ? classes.simplePopUp : ""}>{children}</div>
    </BackdropStyled>
  );
};

export default Backdrop;
