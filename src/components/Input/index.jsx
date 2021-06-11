import InputAdornment from "@material-ui/core/InputAdornment";
import { Container, InputStyled } from "./style";

const Input = ({
  label,
  icon: Icon,
  register,
  name,
  errorMsg = "",
  required = true,
  pinkScheme = false,
  ...rest
}) => {
  return (
    <Container>
      <InputStyled
        {...register(name)}
        label={label}
        InputProps={
          Icon && {
            startAdornment: (
              <InputAdornment position="start">
                <Icon />
              </InputAdornment>
            ),
          }
        }
        placeholder={label}
        variant="standard"
        color="primary"
        {...rest}
        required={required}
        size="small"
        pinkScheme={pinkScheme}
      />
      <div className="message"> {!!errorMsg && <span>{errorMsg}</span>}</div>
    </Container>
  );
};

export default Input;
