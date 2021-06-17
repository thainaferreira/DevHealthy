import iconLogo from "../../assets/img/iconLogo.svg";
import { Container, ImageIcon } from "./style";

const LogoLoader = () => {
  return (
    <Container>
      <ImageIcon src={iconLogo} alt="Ícone Logo Dev Healthy"></ImageIcon>
    </Container>
  );
};
export default LogoLoader;
