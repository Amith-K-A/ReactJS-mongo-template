import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/log-in/log-in";
import SignUp from "./pages/sign-up/sign-up";
import PrivateRoute from "./services/private-router/private-router";
import GenericNotFound from "./pages/generic-not-found/generic-not-found";
import Dashboard from "./pages/dashboard/Dashboard";
import Project from "./pages/project/project";
import { BrowserRouter } from "react-router-dom";

const App = ({ location }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/", "/login"]} component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/project" component={Project} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
