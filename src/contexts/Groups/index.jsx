import { useState, useEffect, createContext, useContext } from "react";
import api from "../../services/api.js";
import { useUser } from "../User/index.jsx";
import { useUserGroups } from "../UserGroups/index.jsx";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [url] = useState("groups/?page=1&category=DevHealthy");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const { setHasGroup, getGroups: getUserGroups } = useUser();
  const { getAGroup } = useUserGroups();

  const getGroups = (url) => {
    api
      .get(url)
      .then((res) => {
        setGroups(res.data.results);
        setNext(res.data.next);
        setPrevious(res.data.previous);
      })
      .catch((err) => console.log(err));
  };

  const conEnterGroup = (id) => {
    const token = JSON.parse(localStorage.getItem("@Dev:token"));
    api
      .post(`https://kabit-api.herokuapp.com/groups/${id}/subscribe/`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        getUserGroups();
        setHasGroup(true);
      })
      .then(() => getAGroup(id))
      .catch((err) => console.log(err));
  };

  const getGroupsByCategory = (category) => {
    api
      .get(`groups/?page=1&category=${category}`)
      .then((res) => {
        setGroups(res.data.results);
        setNext(res.data.next);
        setPrevious(res.data.previous);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroups(url);
  }, []);

  const handleNext = () => {
    if (next !== null) {
      getGroups(next);
    }
  };

  const handlePrev = () => {
    if (previous !== null) {
      getGroups(previous);
    }
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        handleNext,
        handlePrev,
        previous,
        next,
        conEnterGroup,
        inputSearch,
        setInputSearch,
        getGroupsByCategory,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
