import { useEffect, useState } from "react";
import { useUser } from "../../contexts/User";
import { Redirect, useHistory } from "react-router-dom";
import {
  ArrowIcon,
  SeeMore,
  List,
  Content,
  LevelDifficulty,
  Goals,
  NameGroup,
  ProgressStyle,
  TitleGoal,
  LinkStyle,
  NullGoals,
  MainContainer,
} from "./style";
import FullContainer from "../../components/FullContainer";
import ContainerDashboard from "../../components/ContainerDashboard";
import Header from "../../components/Header";
import ContainerCard from "../../components/ContainerCard";
import arrowImg from "../../assets/img/seta.svg";
import habitIcon from "../../assets/img/habitIcon.svg";
import Loader from "../../components/Loader";
import IconsGroups from "../../components/IconsGroups";

const Dashboard = () => {
  const { token, getProfile, userGroups, getGroups, habits, getHabits } =
    useUser();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getHabits();
      getProfile();
      getGroups();
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <FullContainer>
      <Header />
      <ContainerDashboard>
        {isLoading ? (
          <Loader />
        ) : (
          <MainContainer>
            <ContainerCard title="Grupos" width="22%">
              {!!userGroups[0] ? (
                <>
                  <List>
                    {userGroups.map((groups) => (
                      <Content key={groups.id}>
                        <IconsGroups category={groups.category} />
                        <div>{groups.name}</div>
                      </Content>
                    ))}
                  </List>
                  <SeeMore onClick={() => history.push("/dashboard/groups")}>
                    <span>ver mais</span>
                    <ArrowIcon src={arrowImg} alt="Seta" />
                  </SeeMore>
                </>
              ) : (
                <div>
                  Você não participa de nenhum grupo,{" "}
                  <LinkStyle to="/dashboard/groups">clique aqui</LinkStyle> para
                  ver a lista completa dos grupos!
                </div>
              )}
            </ContainerCard>
            <ContainerCard title="Metas" width="50%">
              {!!userGroups[0] &&
              userGroups.map((group) =>
                group.goals.reduce((goal, acc) => goal.length + acc, 0)
              ) ? (
                <List>
                  {userGroups.map((groups) =>
                    groups.goals
                      .filter((goal) => goal.achieved === false)
                      .map((goal) => (
                        <Content key={goal.id}>
                          <Goals>
                            <TitleGoal>{goal.title}</TitleGoal>
                            <LevelDifficulty difficulty={goal.difficulty} />
                            <NameGroup>grupo: {groups.name}</NameGroup>
                            <ProgressStyle progress={goal.how_much_achieved}>
                              Progresso atual:{" "}
                              <span>{goal.how_much_achieved}%</span>
                            </ProgressStyle>
                          </Goals>
                        </Content>
                      ))
                  )}
                </List>
              ) : (
                <NullGoals>
                  <p>Sem metas cadastradas</p>
                </NullGoals>
              )}
            </ContainerCard>
            <ContainerCard title="Hábitos" width="22%">
              {!!habits[0] ? (
                <>
                  <List>
                    {habits.map((habit) => (
                      <Content key={habit.id}>
                        <img src={habitIcon} alt="Ícone hábitos" />
                        <div>{habit.title}</div>
                      </Content>
                    ))}
                  </List>
                  <SeeMore onClick={() => history.push("/dashboard/habits")}>
                    <span>ver mais</span>
                    <ArrowIcon src={arrowImg} alt="Seta" />
                  </SeeMore>
                </>
              ) : (
                <div>
                  <LinkStyle to="/dashboard/habits">Clique aqui</LinkStyle> para
                  cadastrar um novo hábito.
                </div>
              )}
            </ContainerCard>
          </MainContainer>
        )}
      </ContainerDashboard>
    </FullContainer>
  );
};

export default Dashboard;
