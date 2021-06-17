import { Image } from "./style";
import Hobby from "../../assets/img/IconeHobby.png";
import Culinaria from "../../assets/img/IconeCulinaria.png";
import Estudo from "../../assets/img/IconeEstudos.png";
import Saude from "../../assets/img/IconeSaude.png";
import Padrao from "../../assets/img/image_group.svg";

const IconsGroups = ({ category, modal }) => {
  const Icons = {
    "DevHealthy-Culinária": Culinaria,
    "DevHealthy-Estudo": Estudo,
    "DevHealthy-Hobby": Hobby,
    "DevHealthy-Saúde": Saude,
  };
  return <Image src={Icons[category] || Padrao} modal={modal} />;
};

export default IconsGroups;
