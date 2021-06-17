import { Switch, Route, useLocation } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Habits from "../pages/Habits";
import Groups from "../pages/Groups";
import NotFound from "../pages/NotFound";
import { AnimatePresence } from "framer-motion";

const Routes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/dashboard/habits">
          <Habits />
        </Route>
        <Route path="/dashboard/groups">
          <Groups />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
