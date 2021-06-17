import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Hidden } from "@material-ui/core";
import { useUser } from "../../contexts/User";
import { Container, HabitContainer, NoHabits } from "./style";
import * as yup from "yup";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import StarRateIcon from "@material-ui/icons/StarRate";
import FullContainer from "../../components/FullContainer";
import Header from "../../components/Header";
import ContainerDashboard from "../../components/ContainerDashboard";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import Backdrop from "../../components/Backdrop";
import Form from "../../components/Form";
import FloatButton from "../../components/FloatButton";
import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import Button from "../../components/Button";
import HabitCard from "../../components/HabitCard";
import MobileHabitCard from "../../components/MobileHabitCard";
import Loader from "../../components/Loader";

const Habits = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id, createHabit, getHabits, habits, token, getProfile } = useUser();

  useEffect(() => {
    if (token) {
      getHabits();
      getProfile();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  const schema = yup.object().shape({
    title: yup.string().max(50, "Máximo de 50 caracteres"),
    category: yup.string(),
    difficulty: yup.string(),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const categoryOptions = [
    {
      id: "Saúde",
      label: "Saúde",
    },
    {
      id: "Hobby",
      label: "Hobby",
    },
    {
      id: "Estudo",
      label: "Estudo",
    },
    {
      id: "Culinária",
      label: "Culinária",
    },
  ];

  const difficultyOptions = [
    {
      id: "Fácil",
      label: "Fácil",
      qtd: [1],
    },
    {
      id: "Média",
      label: "Média",
      qtd: [1, 2],
    },
    {
      id: "Difícil",
      label: "Difícil",
      qtd: [1, 2, 3],
    },
    {
      id: "Muito Difícil",
      label: "Muito Difícil",
      qtd: [1, 2, 3, 4],
    },
  ];

  const handleToogle = () => {
    setOpen(!open);
    reset();
  };

  const onSubmit = (data) => {
    const habitData = {
      title: data.title,
      category: data.category,
      difficulty: data.difficulty,
      frequency: "Diária",
      achieved: false,
      how_much_achieved: 0,
      user: id,
    };
    createHabit(habitData);
    handleToogle();
    reset();
  };

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <FullContainer>
      <Header />
      <ContainerDashboard>
        <Container>
          <Button
            onClick={handleToogle}
            startIcon={<AddCircleIcon />}
            className="btnAddHabit"
          >
            Adicionar Hábito
          </Button>

          {isLoading ? (
            <Loader />
          ) : !!habits[0] ? (
            <>
              <p className="habitsTitle">Complete seus hábitos diariamente.</p>
              <HabitContainer>
                {habits
                  .filter((habit) => habit.achieved === false)
                  .map((habit) => (
                    <li key={habit.id}>
                      <Hidden only="xs">
                        <HabitCard habit={habit} />
                      </Hidden>
                      <Hidden smUp>
                        <MobileHabitCard habit={habit} />
                      </Hidden>
                    </li>
                  ))}
              </HabitContainer>
            </>
          ) : (
            <NoHabits>
              <p>Nenhum hábito cadastrado</p>
            </NoHabits>
          )}
        </Container>
      </ContainerDashboard>

      <Backdrop open={open}>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Input
              label="Título"
              register={register}
              error={!!errors.title}
              errorMsg={errors.title?.message}
              name="title"
              isValidated
              pinkScheme
            />

            <SelectInput
              name="category"
              title="Categoria"
              label="Categoria"
              options={categoryOptions}
              required
              style={{ width: 200 }}
            />
            <SelectInput
              name="difficulty"
              title="Dificuldade"
              icon={StarRateIcon}
              label="Dificuldade"
              options={difficultyOptions}
              required
              style={{ width: 200 }}
            />

            <div style={{ display: "flex", gap: 8 }}>
              <FloatButton
                greenIcon
                onClick={handleToogle}
                color="primary"
                title="Cancelar"
                icon={CloseIcon}
              />
              <FloatButton type="submit" title="Adicionar" icon={DoneIcon} />
            </div>
          </Form>
        </FormProvider>
      </Backdrop>
    </FullContainer>
  );
};

export default Habits;
