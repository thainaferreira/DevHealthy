import { useStyles, ButtonStyled } from "./style";

const Button = ({
  children,
  color = "primary",
  isLight = false,
  grayText = false,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <ButtonStyled
      className={isLight && classes.primaryLight}
      color={color}
      variant="contained"
      grayText={grayText}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
