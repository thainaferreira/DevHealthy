import { AuthProvider } from "./Auth";

const ContextProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextProvider;
