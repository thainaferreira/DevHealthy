import { useEffect, useState } from "react";
import { MenuItem, Menu } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./style";
import { useAuth } from "../../contexts/Auth";
import { useUser } from "../../contexts/User";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import iconLogo from "../../assets/img/iconLogo.svg";
import FloatButton from "../FloatButton";
import Form from "../Form";
import Input from "../Input";
import NavBar from "../NavBar";
import { toast } from "react-toastify";
import Backdrop from "../Backdrop";

const Header = () => {
  const [isOpened, setIsOpened] = useState(null);
  const [greeting, setGreeting] = useState("");
  const [open, setOpen] = useState(false);

  const { logout } = useAuth();
  const { user, updateProfile } = useUser();

  useEffect(() => {
    const todayDate = new Date();
    const time = todayDate.getHours();

    if (time < 6) {
      return setGreeting("Boa madrugada");
    }
    if (time < 12) {
      return setGreeting("Bom dia");
    }
    if (time < 18) {
      return setGreeting("Boa tarde");
    }

    return setGreeting("Boa noite");
  }, []);

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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleToogle = (e) => {
    setIsOpened(e.currentTarget);
  };

  const handleClose = (e) => {
    setIsOpened(null);
  };

  const toogleMenuProfile = () => {
    setOpen(!open);
  };

  const openSettings = () => {
    reset();
    setIsOpened(null);
    toogleMenuProfile();
  };

  const onSubmit = (data) => {
    reset();
    if (data.username !== undefined || data.email !== undefined) {
      if (data.username === user.username) {
        return toast.warning("Digite um usuário diferente do atual!");
      } else if (data.email === user.email) {
        return toast.warning("Digite um e-mail diferente do atual!");
      }
    }

    if (data.username === undefined && data.email === undefined) {
      return toast.warning("Digite um novo usuário ou e-mail!");
    }

    updateProfile(data);
    toogleMenuProfile();
  };

  return (
    <>
      <Container>
        <div className="header">
          <div>
            <img src={iconLogo} alt="DevHealthy logo" />
            <FloatButton
              title="Menu"
              placement="left"
              onClick={handleToogle}
              icon={AccountCircleIcon}
            />
          </div>

          <div className="userMenu">
            <div className="navTabs">
              <div className="welcomeWrapper">
                <p>{greeting},</p>
                <p>{user.username}!</p>
              </div>
              <NavBar />
            </div>
            <div className="imageBG" />
          </div>
        </div>
      </Container>

      <Menu
        anchorEl={isOpened}
        keepMounted
        open={Boolean(isOpened)}
        onClose={handleClose}
      >
        <MenuItem onClick={openSettings}>
          <SettingsIcon />
          Minha conta
        </MenuItem>
        <MenuItem onClick={logout}>
          <ExitToAppIcon />
          Sair
        </MenuItem>
      </Menu>

      <Backdrop open={open} text="Meu Perfil">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            error={!!errors.username}
            errorMsg={errors.username?.message}
            label="Usuário"
            placeholder={user.username}
            register={register}
            name="username"
            icon={EditIcon}
            required={false}
            isValidated
            pinkScheme
          />
          <Input
            error={!!errors.email}
            errorMsg={errors.email?.message}
            label="E-mail"
            placeholder={user.email}
            register={register}
            name="email"
            icon={EditIcon}
            required={false}
            isValidated
            pinkScheme
          />
          <div style={{ display: "flex", gap: 8 }}>
            <FloatButton
              greenIcon
              onClick={toogleMenuProfile}
              color="primary"
              title="Cancelar"
              icon={CloseIcon}
            />
            <FloatButton type="submit" title="Atualizar" icon={DoneIcon} />
          </div>
        </Form>
      </Backdrop>
    </>
  );
};

export default Header;
