import { useState } from "react";
import { MenuItem, Menu } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import ProgressBar from "../ProgressBar";
import FloatButton from "../FloatButton";
import Backdrop from "../Backdrop";
import Button from "../Button";
import { useUserGroups } from "../../contexts/UserGroups";
import { Container, HeaderContainer, Ball, ProgressContainer } from "./style";

const GoalCard = ({ goal, members }) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [isOpened, setIsOpened] = useState(null);
  const { title, difficulty, how_much_achieved, id, group } = goal;

  const { deleteGoal, updateGoal } = useUserGroups();

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
    deleteGoal(id, group);
    handleConfirm();
  };

  const handleUpdate = () => {
    updateGoal(id, group, members, how_much_achieved);
  };

  return (
    <>
      <Container>
        <HeaderContainer>
          <Ball difficulty={difficulty} />
          <MoreVertIcon onClick={handleToogle} className="goalMenu" />
          <p>{title}</p>
          <FloatButton
            title="Completar"
            icon={CheckIcon}
            onClick={handleUpdate}
          />
        </HeaderContainer>

        <ProgressContainer>
          <p>
            Progresso:
            <span> {how_much_achieved}%</span>
          </p>
          <ProgressBar progress={how_much_achieved} />
        </ProgressContainer>
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
        text={`Tem certeza que deseja excluir a meta: ${title}?`}
      >
        <Button onClick={handleConfirm}>Não</Button>
        <Button onClick={() => handleDelete()} color="secondary">
          Sim
        </Button>
      </Backdrop>
    </>
  );
};

export default GoalCard;
