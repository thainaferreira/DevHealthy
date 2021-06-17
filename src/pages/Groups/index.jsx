import Button from "../../components/Button";
import FullContainer from "../../components/FullContainer";
import Header from "../../components/Header";
import ContainerDashboard from "../../components/ContainerDashboard";
import AllGroups from "../../components/AllGroups";
import Form from "../../components/Form";
import Input from "../../components/Input";
import SelectInput from "../../components/SelectInput";
import ContainerCard from "../../components/ContainerCard";
import IconsGroups from "../../components/IconsGroups";
import GroupIcon from "@material-ui/icons/Group";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CloseIcon from "@material-ui/icons/Close";
import DoneIcon from "@material-ui/icons/Done";
import {
  ActivitiesContainer,
  Container,
  GoalsContainer,
  GroupContainer,
  ButtonContainer,
  GroupCardContainer,
  NothingToShow,
  StyledMenuItem,
  MembersList,
  MainContainer,
  useStyles,
  SearchGroups,
} from "./style";
import { Menu, MenuItem, Avatar, TextField } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../contexts/User";
import { useUserGroups } from "../../contexts/UserGroups";
import Loader from "../../components/Loader";
import FloatButton from "../../components/FloatButton";
import GoalCard from "../../components/GoalCard";
import ActivityCard from "../../components/ActivityCard";
import Backdrop from "../../components/Backdrop";

const Groups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(null);
  const [openOptions, setOpenOptions] = useState(null);
  const [confirmExit, setConfirmExit] = useState(false);
  const [showFormGoal, setShowFormGoal] = useState(false);
  const [showFormActivity, setShowFormActivity] = useState(false);
  const [showFormGroup, setShowFormGroup] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { token, userGroups, getGroups, getProfile, hasGroup } = useUser();
  const {
    createGroup,
    getAGroup,
    actualGroup,
    leaveGroup,
    addGoal,
    addActivity,
  } = useUserGroups();

  const classes = useStyles();

  const schema = yup.object().shape({
    name: yup.string().min(3, "Mínimo de 3 caracteres"),
    description: yup.string().min(6, "Mínimo de 6 caracteres"),
    category: yup.string(),
    goalTitle: yup.string().max(50, "Máximo de 50 caracteres"),
    difficulty: yup.string(),
    activityTitle: yup.string().max(50, "Máximo de 50 caracteres"),
    realization_time: yup
      .date()
      .min(new Date().toDateString(), "Data inválida"),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  useEffect(() => {
    if (token) {
      getProfile();
      getGroups();
      !!userGroups[0] && getAGroup(userGroups[0].id);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

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

  const categoryOptions = [
    {
      id: "DevHealthy-Saúde",
      label: "Saúde",
    },
    {
      id: "DevHealthy-Hobby",
      label: "Hobby",
    },
    {
      id: "DevHealthy-Estudo",
      label: "Estudo",
    },
    {
      id: "DevHealthy-Culinária",
      label: "Culinária",
    },
  ];

  const todayDate = new Date().toISOString();

  const handleToogle = (e) => {
    setIsOpened(e.currentTarget);
  };

  const handleOptions = (e) => {
    setOpenOptions(e.currentTarget);
  };

  const handleClose = (e) => {
    setIsOpened(null);
    setOpenOptions(null);
  };

  const selectGroup = (id) => {
    getAGroup(id);
    setIsOpened(null);
  };

  const handleConfirm = () => {
    setConfirmExit(!confirmExit);
    setOpenOptions(null);
  };

  const handleFormGoal = () => {
    reset();
    setShowFormGoal(!showFormGoal);
    setOpenOptions(null);
  };

  const submitGoal = (data) => {
    const goalData = {
      title: data.goalTitle,
      difficulty: data.difficulty,
      how_much_achieved: 0,
      group: actualGroup.id,
    };
    addGoal(goalData, actualGroup.id);
    handleFormGoal();
  };

  const handleFormActivity = () => {
    reset();
    setShowFormActivity(!showFormActivity);
    setOpenOptions(null);
  };

  const submitActivity = (data) => {
    const activityData = {
      title: data.activityTitle,
      realization_time: data.realization_time,
      group: actualGroup.id,
    };
    addActivity(activityData, actualGroup.id);
    handleFormActivity();
  };

  const handleFormGroup = () => {
    setShowFormGroup(!showFormGroup);
    setOpenOptions(null);
    reset();
  };

  const submitGroup = (data, e) => {
    const groupData = {
      name: data.name,
      description: data.description,
      category: data.category,
    };
    createGroup(groupData);
    handleFormGroup();
    e.target.reset();
  };

  const handleLeave = (id) => {
    leaveGroup(id);
    getAGroup(userGroups[0].id);
    getGroups();
    handleConfirm();
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
    setOpenOptions(null);
  };

  if (!token) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <FullContainer>
        <Header />
        <ContainerDashboard>
          {isLoading ? (
            <Loader />
          ) : hasGroup ? (
            <Container>
              <GroupContainer>
                <ButtonContainer>
                  <GroupCardContainer onClick={handleToogle}>
                    <IconsGroups
                      category={actualGroup.category}
                      alt={actualGroup.name}
                      modal
                    />
                    <p>{actualGroup.name}</p>
                    <ArrowDropDownIcon />
                  </GroupCardContainer>
                </ButtonContainer>

                <Menu
                  anchorEl={isOpened}
                  keepMounted
                  open={Boolean(isOpened)}
                  onClose={handleClose}
                >
                  {userGroups.map((group) => (
                    <StyledMenuItem
                      key={group.id}
                      onClick={() => selectGroup(group.id)}
                    >
                      <GroupIcon /> {group.name}
                    </StyledMenuItem>
                  ))}
                </Menu>

                <FloatButton
                  title="Opções"
                  icon={MenuIcon}
                  onClick={handleOptions}
                />

                <Menu
                  anchorEl={openOptions}
                  keepMounted
                  open={Boolean(openOptions)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleFormGoal}>
                    <AddCircleOutlineIcon /> Criar meta
                  </MenuItem>
                  <MenuItem onClick={handleFormActivity}>
                    <AddCircleOutlineIcon /> Criar atividade
                  </MenuItem>
                  <MenuItem onClick={handleConfirm}>
                    <ExitToAppIcon /> Sair do grupo
                  </MenuItem>
                  <MenuItem onClick={handleFormGroup}>
                    <AddCircleOutlineIcon /> Criar grupo
                  </MenuItem>
                  <MenuItem onClick={handleSearch}>
                    <SearchIcon /> Pesquisar grupos
                  </MenuItem>
                </Menu>
              </GroupContainer>
              <MainContainer>
                <ContainerCard title="Atividades" width="30%" maxHeigth="300">
                  {!!actualGroup?.activities[0] ? (
                    <ActivitiesContainer>
                      {actualGroup.activities
                        .filter(
                          (activity) => activity.realization_time >= todayDate
                        )
                        .map((activity) => (
                          <li key={activity.id}>
                            <ActivityCard activity={activity} />
                          </li>
                        ))}
                    </ActivitiesContainer>
                  ) : (
                    <NothingToShow>
                      <p>Sem atividades cadastradas</p>
                    </NothingToShow>
                  )}
                </ContainerCard>
                <ContainerCard title="Metas" width="40%" maxHeigth="300">
                  {!!actualGroup.goals[0] ? (
                    <GoalsContainer>
                      {actualGroup.goals
                        .filter((goal) => goal.achieved === false)
                        .map((goal) => (
                          <li key={goal.id}>
                            <GoalCard
                              goal={goal}
                              members={actualGroup.users_on_group.length}
                            />
                          </li>
                        ))}
                    </GoalsContainer>
                  ) : (
                    <NothingToShow>
                      <p>Sem metas cadastradas</p>
                    </NothingToShow>
                  )}
                </ContainerCard>
                <ContainerCard
                  title="Membros"
                  width="20%"
                  minHeigth="300"
                  maxHeigth="300"
                >
                  <MembersList>
                    {actualGroup.users_on_group.map((item) => (
                      <li key={item.id}>
                        {" "}
                        <Avatar>
                          {item.username.slice(0, 1).toUpperCase()}
                        </Avatar>{" "}
                        {item.username}
                      </li>
                    ))}
                  </MembersList>
                </ContainerCard>
              </MainContainer>
            </Container>
          ) : (
            <AllGroups />
          )}
        </ContainerDashboard>
      </FullContainer>

      <Backdrop
        open={confirmExit}
        simple
        text={`Tem certeza que deseja deixar o grupo: ${actualGroup.name}`}
      >
        <Button onClick={handleConfirm}>Não</Button>
        <Button color="secondary" onClick={() => handleLeave(actualGroup.id)}>
          Sim
        </Button>
      </Backdrop>

      <Backdrop open={showFormGoal}>
        <FormProvider {...methods}>
          <Form autoComplete="off" onSubmit={handleSubmit(submitGoal)}>
            <Input
              label="Título"
              isValidated
              pinkScheme
              name="goalTitle"
              register={register}
              error={!!errors.goalTitle}
              errorMsg={errors.goalTitle?.message}
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
                title="Cancelar"
                icon={CloseIcon}
                color="primary"
                greenIcon
                onClick={handleFormGoal}
                type="reset"
              />
              <FloatButton title="Criar Meta" icon={DoneIcon} type="submit" />
            </div>
          </Form>
        </FormProvider>
      </Backdrop>

      <Backdrop open={showFormActivity}>
        <Form autoComplete="off" onSubmit={handleSubmit(submitActivity)}>
          <Input
            label="Título"
            isValidated
            pinkScheme
            name="activityTitle"
            register={register}
            error={!!errors.activityTitle}
            errorMsg={errors.activityTitle?.message}
          />
          <TextField
            id="datetime-local"
            label="Data e hora da atividade"
            type="datetime-local"
            {...register("realization_time")}
            required
            error={!!errors.realization_time}
            helperText={errors.realization_time?.message}
            defaultValue=""
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div style={{ display: "flex", gap: 8 }}>
            <FloatButton
              title="Cancelar"
              icon={CloseIcon}
              color="primary"
              greenIcon
              onClick={handleFormActivity}
              type="reset"
            />
            <FloatButton
              title="Criar Atividade"
              icon={DoneIcon}
              type="submit"
            />
          </div>
        </Form>
      </Backdrop>

      <Backdrop open={showFormGroup}>
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(submitGroup)} autoComplete="off">
            <Input
              label="Título"
              register={register}
              name="name"
              error={!!errors.name}
              errorMsg={errors.name?.message}
              pinkScheme
              isValidated
            />

            <SelectInput
              name="category"
              title="Categoria"
              label="Categoria"
              options={categoryOptions}
              required
              style={{ width: 200 }}
            />

            <Input
              label="Descrição"
              register={register}
              name="description"
              error={!!errors.description}
              errorMsg={errors.description?.message}
              pinkScheme
              isValidated
            />
            <div style={{ display: "flex", gap: 8 }}>
              <FloatButton
                title="Cancelar"
                icon={CloseIcon}
                color="primary"
                greenIcon
                onClick={handleFormGroup}
                type="reset"
              />
              <FloatButton title="Criar Grupo" icon={DoneIcon} type="submit" />
            </div>
          </Form>
        </FormProvider>
      </Backdrop>

      <Backdrop open={showSearch}>
        <SearchGroups>
          <AllGroups hideButton />
        </SearchGroups>
        <Button onClick={handleSearch}>Fechar</Button>
      </Backdrop>
    </>
  );
};

export default Groups;
