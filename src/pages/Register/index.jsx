import Input from "../../components/Input";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Logo from "../../components/Logo";
import FullContainer from "../../components/FullContainer";
import {
  BackgroundContainer,
  MainContainer,
  FormContainer,
  LinkStyle,
} from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { motion } from "framer-motion";

const Register = () => {
  const { signup, isAuthenticated } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Mínimo de 3 letras")
      .max(12, "máximo de 12 letras")
      .matches(
        "^(?=.{3,12}$)(?![_. ])(?!.*[_. ]{2})[a-z]+(?<![_. ])$",
        "Somente letras minúsculas"
      ),
    email: yup.string().email("E-mail inválido"),
    emailConfirm: yup
      .string()
      .oneOf([yup.ref("email")], "E-mail diferente do inserido"),
    password: yup.string().min(6, "Mínimo de 6 dígitos"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha diferente da inserida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunc = ({ username, email, password }) => {
    const user = { username, email, password };

    signup(user, history);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FullContainer>
        <MainContainer>
          <Logo />
          <BackgroundContainer>
            <FormContainer>
              <Form onSubmit={handleSubmit(submitFunc)}>
                <Input
                  label="Usuário"
                  register={register}
                  name="username"
                  error={!!errors.username}
                  errorMsg={errors.username?.message}
                  icon={PersonIcon}
                  isValidated
                />
                <Input
                  label="E-mail"
                  register={register}
                  name="email"
                  error={!!errors.email}
                  errorMsg={errors.email?.message}
                  icon={EmailIcon}
                  isValidated
                />
                <Input
                  label="Confirmar E-mail"
                  register={register}
                  name="emailConfirm"
                  error={!!errors.emailConfirm}
                  errorMsg={errors.emailConfirm?.message}
                  icon={EmailIcon}
                  isValidated
                />
                <Input
                  label="Senha"
                  register={register}
                  name="password"
                  error={!!errors.password}
                  errorMsg={errors.password?.message}
                  type="password"
                  icon={LockIcon}
                  isValidated
                />
                <Input
                  label="Confirmar Senha"
                  register={register}
                  name="passwordConfirm"
                  error={!!errors.passwordConfirm}
                  errorMsg={errors.passwordConfirm?.message}
                  type="password"
                  icon={LockIcon}
                  isValidated
                />
                <Button type="submit">Cadastrar</Button>
                <p>
                  Já está cadastrado?{" "}
                  <span>
                    <LinkStyle to="/login"> Entrar na Conta</LinkStyle>
                  </span>
                </p>
              </Form>
            </FormContainer>
          </BackgroundContainer>
        </MainContainer>
      </FullContainer>
    </motion.div>
  );
};

export default Register;
