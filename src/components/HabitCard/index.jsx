import { useState } from "react";
import { motion } from "framer-motion";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import Cooking from "../../assets/img/cooking.svg";
import Health from "../../assets/img/health.svg";
import Hobby from "../../assets/img/hobbies.svg";
import Study from "../../assets/img/studies.svg";
import ProgressBar from "../ProgressBar";
import FloatButton from "../FloatButton";
import Backdrop from "../Backdrop";
import Button from "../Button";
import { useUser } from "../../contexts/User";
import {
  HabitCardStyled,
  Ball,
  CheckContainer,
  HeaderContainer,
  ProgressContainer,
  IconContainer,
  BodyContainer,
} from "./style";

const HabitCard = ({ habit }) => {
  const [open, setOpen] = useState(false);

  const { title, how_much_achieved, category, difficulty, id } = habit;

  const { deleteHabit, updateHabit } = useUser();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    deleteHabit(id);
    handleToggle();
  };

  const handleUpdate = () => {
    const date = new Date().toDateString();

    updateHabit(id, date);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ scale: 0.5 }}
      >
        <HabitCardStyled>
          <HeaderContainer>
            <Ball difficulty={difficulty} />
            <p>{title}</p>
          </HeaderContainer>
          <BodyContainer>
            <CheckContainer>
              <p>Completei hoje:</p>
              <FloatButton
                onClick={handleUpdate}
                title="Completar"
                icon={CheckIcon}
                color="secondary"
              />
            </CheckContainer>
            <ProgressContainer>
              <p>
                Progresso:
                <span> {how_much_achieved}%</span>
              </p>
              <ProgressBar progress={how_much_achieved} />
            </ProgressContainer>
          </BodyContainer>
          <IconContainer>
            <img
              src={
                category === "Saúde"
                  ? Health
                  : category === "Estudo"
                  ? Study
                  : category === "Culinária"
                  ? Cooking
                  : Hobby
              }
              alt="Categoria do hábito"
            />

            <FloatButton
              onClick={handleToggle}
              title="Excluir"
              icon={DeleteIcon}
              color="primary"
            />
          </IconContainer>
        </HabitCardStyled>
      </motion.div>

      <Backdrop
        simple
        open={open}
        text={`Tem certeza que deseja excluir o hábito: ${title}?`}
      >
        <Button onClick={handleToggle}>Não</Button>
        <Button onClick={() => handleDelete()} color="secondary">
          Sim
        </Button>
      </Backdrop>
    </>
  );
};
export default HabitCard;
