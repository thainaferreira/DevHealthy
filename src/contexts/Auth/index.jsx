import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Dev:token"));
    if (token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const signup = (data, history) => {
    api
      .post("users/", data)
      .then((response) => {
        toast.success("Sucesso ao criar a conta! Faça seu login :D");
        history.push("/login");
      })
      .catch((error) => toast.error("Usuário já existe."));
  };

  const login = (data, history) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.removeItem("@Dev:token");
        localStorage.setItem(
          "@Dev:token",
          JSON.stringify(response.data.access)
        );
        setIsAuthenticated(true);
        history.push("/dashboard");
      })
      .catch((error) => toast.error("Usuário ou senha inválidos."));
  };

  const logout = () => {
    localStorage.removeItem("@Dev:token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
