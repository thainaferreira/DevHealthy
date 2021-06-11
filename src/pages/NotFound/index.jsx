import { useState } from "react";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Button from "../../components/Button";
import { useAuth } from "../../contexts/Auth";
import { Container, Content } from "./style";

const NotFound = () => {
  const history = useHistory();
  const { isAuthenticated } = useAuth();
  const [move, setMove] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMove({ x: e.clientX / 5, y: e.clientY / 5 });
  };

  const redirectToHome = () => {
    if (isAuthenticated) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  };

  return (
    <Container onMouseMove={handleMouseMove} move={move}>
      <Content>
        <h2>404</h2>
        <div>
          <h4>OPS! Página não encontrada</h4>
          <p>
            A página que você estava procurando não existe. Você pode ter
            digitado incorretamente o endereço ou a página pode ter sido movida.
          </p>
        </div>
        <Button onClick={redirectToHome} size="large" startIcon={<HomeIcon />}>
          Voltar ao início
        </Button>
      </Content>
    </Container>
  );
};

export default NotFound;
