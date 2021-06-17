import { useState } from "react";
import { MenuItem, Menu } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import Backdrop from "../Backdrop";
import Button from "../Button";
import { useUserGroups } from "../../contexts/UserGroups";
import { Container, Header } from "./style";

const ActivityCard = ({ activity }) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [isOpened, setIsOpened] = useState(null);
  const { title, realization_time, id, group } = activity;

  const { deleteActivity } = useUserGroups();

  const handleToogle = (e) => {
    setIsOpened(e.currentTarget);
  };

  const handleClose = (e) => {
    setIsOpened(null);
  };

  const handleConfirm = () => {
    setIsOpened(null);
    setOpenConfirm(!openConfirm);
  };

  const handleDelete = () => {
    deleteActivity(id, group);
    handleConfirm();
  };

  return (
    <>
    <Container>
      <Header>
      <p>{title}</p>
      <MoreVertIcon onClick={handleToogle} className="activityMenu" />
      </Header>
      <p>
        Realização: {realization_time.slice(8, 10)}/
        {realization_time.slice(5, 7)}/{realization_time.slice(0, 4)} -{" "}
        {realization_time.slice(11, 16)}
      </p>
    </Container>

    <Menu
        anchorEl={isOpened}
        keepMounted
        open={Boolean(isOpened)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleConfirm}>
          <DeleteIcon /> Excluir
        </MenuItem>
      </Menu>

      <Backdrop
        simple
        open={openConfirm}
        text={`Tem certeza que deseja excluir a atividade: ${title}?`}
      >
        <Button onClick={handleConfirm}>Não</Button>
        <Button onClick={() => handleDelete()} color="secondary">
          Sim
        </Button>
      </Backdrop>
    </>
  );
};

export default ActivityCard;
