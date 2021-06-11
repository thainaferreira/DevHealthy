import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <ToastContainer />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
