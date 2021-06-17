import FullContainer from "../../components/FullContainer/index.jsx";
import Button from "../../components/Button/index.jsx";
import {
  ContainerStyled,
  InternContainer,
  ContainerLogo,
  ContainerControlers,
} from "./style";
import Logo_img from "../../assets/img/logo_img.svg";
import Logo_desc from "../../assets/img/logo_desc.svg";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { motion } from "framer-motion";

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
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
        <ContainerStyled>
          <InternContainer className="images">
            <div className="imagesBG"></div>
            <div className="imagesBG"></div>
          </InternContainer>
          <InternContainer className="controlers">
            <ContainerLogo>
              <figure>
                <img src={Logo_img} alt="Logo" />
              </figure>
              <figure>
                <img src={Logo_desc} alt="Description" />
              </figure>
              <div>
                <h3>Being healthy is being alive</h3>
              </div>
            </ContainerLogo>
            <ContainerControlers>
              <Button onClick={() => handleNavigation("/register")}>
                CRIAR CONTA
              </Button>
              <Button
                color="secondary"
                onClick={() => handleNavigation("/login")}
              >
                ENTRAR
              </Button>
            </ContainerControlers>
          </InternContainer>
        </ContainerStyled>
      </FullContainer>
    </motion.div>
  );
};

export default LandingPage;
