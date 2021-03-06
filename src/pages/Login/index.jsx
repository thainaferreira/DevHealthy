import { Redirect, useHistory } from "react-router-dom";
import { Container, ContainerForm, Text, LinkStyle } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/Auth";
import * as yup from "yup";
import FullContainer from "../../components/FullContainer";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { motion } from "framer-motion";

const Login = () => {
  const { isAuthenticated, login } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Mínimo de 3 caracteres")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 caracteres")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleLogin = (data) => {
    login(data, history);
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
        <Logo />
        <Container>
          <ContainerForm>
            <Form onSubmit={handleSubmit(handleLogin)}>
              <Input
                label="Usuário"
                icon={PersonIcon}
                register={register}
                name="username"
                error={!!errors.username}
                errorMsg={errors.username?.message}
                isValidated
              />
              <Input
                label="Senha"
                icon={LockIcon}
                type="password"
                register={register}
                name="password"
                error={!!errors.password}
                errorMsg={errors.password?.message}
                isValidated
              />
              <Button type="submit">Entrar</Button>
              <Text>
                Não é cadastrado?
                <LinkStyle to="/register"> Criar conta</LinkStyle>
              </Text>
            </Form>
          </ContainerForm>
        </Container>
      </FullContainer>
    </motion.div>
  );
};

export default Login;
