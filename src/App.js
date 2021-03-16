import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/log-in/log-in";
import SignUp from "./pages/sign-up/sign-up";
import Home from "./pages/home/home";
import PrivateRoute from "./services/private-router/private-router";
import GenericNotFound from "./pages/generic-not-found/generic-not-found";

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/login"]} component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/home" component={Home} />
          <Route path="/404" component={GenericNotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
  );
};

export default App;
