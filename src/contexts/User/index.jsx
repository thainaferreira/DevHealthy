import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../Auth";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Dev:token")) || "";
  const [id, setId] = useState(0);
  const [user, setUser] = useState({});
  const [userGroups, setUserGroups] = useState([]);
  const [hasGroup, setHasGroup] = useState(false);
  const [habits, setHabits] = useState([]);
  const { isAuthenticated } = useAuth();

  const getProfile = () => {
    const decoded = jwt_decode(token);
    localStorage.setItem("@Dev:token", JSON.stringify(token));
    setId(decoded.user_id);
    api
      .get(`users/${decoded.user_id}/`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  const getGroups = () => {
    api
      .get("groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserGroups(response.data);
        if (!!response.data[0]) {
          setHasGroup(true);
        } else {
          setHasGroup(false);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (isAuthenticated) {
      getGroups();
    }
  }, [isAuthenticated]);

  const updateProfile = (data) => {
    api
      .patch(`users/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getProfile())
      .catch((error) => toast.error("Usuário já existe."));
  };

  const getHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data))
      .catch((error) => console.log(error));
  };

  const createHabit = (data) => {
    api
      .post("habits/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        getHabits();
      })
      .catch((error) => console.log(error));
  };

  const updateHabit = (habitId, date) => {
    const habitsData = JSON.parse(localStorage.getItem("@Dev:habits")) || [];

    if (!habitsData.find((user) => user.user === id)) {
      habitsData.push({
        user: id,
        habits: [],
      });
    }

    const userHabits = habitsData.find((user) => user.user === id);

    if (!userHabits.habits.find((habit) => habit.id === habitId)) {
      userHabits.habits.push({ id: habitId, updatedDate: "", achieved: 0 });
    }
    const findHabit = userHabits.habits.find((habit) => habit.id === habitId);

    if (findHabit.updatedDate === date) {
      toast.warning("Você já completou esse hábito hoje :D");
    } else {
      findHabit.updatedDate = date;
      findHabit.achieved += 5;
      const achieved = findHabit.achieved;

      if (achieved === 100) {
        toast.success("Parabéns, você adquiriu um hábito!");
      }

      const data = {
        how_much_achieved: achieved,
        achieved: achieved === 100 ? true : false,
      };

      api
        .patch(`habits/${habitId}/`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => getHabits())
        .catch((error) => console.log(error));
    }

    localStorage.setItem("@Dev:habits", JSON.stringify(habitsData));
  };

  const deleteHabit = (habitId) => {
    api
      .delete(`habits/${habitId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getHabits())
      .catch((error) => console.log(error));
  };

  return (
    <UserContext.Provider
      value={{
        token,
        id,
        user,
        userGroups,
        getGroups,
        getProfile,
        updateProfile,
        habits,
        getHabits,
        createHabit,
        updateHabit,
        deleteHabit,
        hasGroup,
        setHasGroup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
