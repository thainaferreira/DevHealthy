import { useUser } from "../User";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const UserGroupsContext = createContext();

export const UserGroupsProvider = ({ children }) => {
  const { token, getGroups, setHasGroup, id } = useUser();
  const [actualGroup, setActualGroup] = useState({});

  const createGroup = (data) => {
    api
      .post("groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHasGroup(true);
        getGroups();
      })
      .catch((error) => console.log(error));
  };

  const getAGroup = (groupId) => {
    api
      .get(`/groups/${groupId}/`)
      .then((response) => setActualGroup(response.data))
      .catch((error) => console.log(error));
  };

  const leaveGroup = (groupId) => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getGroups())
      .catch((error) => console.log(error));
  };

  const addGoal = (data, groupId) => {
    api
      .post("goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getAGroup(groupId))
      .catch((error) => console.log(error));
  };

  const deleteGoal = (goalId, groupId) => {
    api
      .delete(`/goals/${goalId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getAGroup(groupId))
      .catch((error) => console.log(error));
  };

  const addActivity = (data, groupId) => {
    api
      .post("activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getAGroup(groupId))
      .catch((error) => console.log(error));
  };

  const deleteActivity = (activityId, groupId) => {
    api
      .delete(`/activities/${activityId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getAGroup(groupId))
      .catch((error) => console.log(error));
  };

  const updateGoal = (goalId, groupId, members, howMuch) => {
    const goalsData = JSON.parse(localStorage.getItem("@Dev:goals")) || [];

    if (!goalsData.find((user) => user.user === id)) {
      goalsData.push({
        user: id,
        goals: [],
      });
    }

    const userGoals = goalsData.find((user) => user.user === id);

    if (!userGoals.goals.find((goal) => goal.id === goalId)) {
      userGoals.goals.push({ id: goalId, completed: false });
    }
    const findGoal = userGoals.goals.find((goal) => goal.id === goalId);

    if (findGoal.completed === true) {
      toast.warning("Você já fez sua parte! Agora é com os outros membros :D");
    } else {
      findGoal.completed = true;
      const achieved = howMuch + Math.ceil(100 / members);

      if (achieved >= 100) {
        toast.success("Muito bem, meta alcançada!");
      }

      const data = {
        how_much_achieved: achieved,
        achieved: achieved >= 100 ? true : false,
      };

      api
        .patch(`goals/${goalId}/`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => getAGroup(groupId))
        .catch((error) => console.log(error));
    }

    localStorage.setItem("@Dev:goals", JSON.stringify(goalsData));
  };

  return (
    <UserGroupsContext.Provider
      value={{
        createGroup,
        getAGroup,
        actualGroup,
        leaveGroup,
        addGoal,
        addActivity,
        deleteGoal,
        deleteActivity,
        updateGoal,
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};

export const useUserGroups = () => useContext(UserGroupsContext);
