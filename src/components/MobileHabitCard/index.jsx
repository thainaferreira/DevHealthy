import { useState } from "react";
import { MenuItem, Menu } from "@material-ui/core";
import { useUser } from "../../contexts/User";
import CheckIcon from "@material-ui/icons/Check";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import Backdrop from "../Backdrop";
import FloatButton from "../FloatButton";
import Button from "../Button";
import Graph from "../Graph";
import { Container } from "./style";

const MobileHabitCard = ({ habit }) => {
  const [isOpened, setIsOpened] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);

  const { deleteHabit, updateHabit } = useUser();

  const { title, how_much_achieved, id } = habit;

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
    deleteHabit(id);
    handleConfirm();
  };

  const handleUpdate = () => {
    const date = new Date().toDateString();

    updateHabit(id, date);
  };
  return (
    <>
      <Container>
        <MoreVertIcon onClick={handleToogle} className="habitMenu" />
        <Graph width="30px" progress={how_much_achieved} />
        <p>{title}</p>
        <FloatButton
          title="Completar"
          icon={CheckIcon}
          onClick={handleUpdate}
        />
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
        text={`Tem certeza que deseja excluir o hábito: ${title}?`}
      >
        <Button onClick={handleConfirm}>Não</Button>
        <Button onClick={() => handleDelete()} color="secondary">
          Sim
        </Button>
      </Backdrop>
    </>
  );
};

export default MobileHabitCard;
