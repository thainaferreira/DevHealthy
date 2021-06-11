import { Header, Figure, Image, ImageIcon } from "./style";
import iconLogo from "../../assets/img/iconLogo.svg";
import logo from "../../assets/img/textLogo.svg";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory();

  return (
    <Header>
      <Figure onClick={() => history.push('/')}>
        <ImageIcon src={iconLogo} alt="Ícone Logo Dev Healthy" />
        <Image src={logo} alt="Logo Dev Healthy" />
      </Figure>
    </Header>
  );
};

export default Logo;
