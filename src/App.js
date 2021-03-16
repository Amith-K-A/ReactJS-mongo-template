import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/log-in/log-in";
import SignUp from "./pages/sign-up/sign-up";
import Home from "./pages/home/home";
import PrivateRoute from "./services/private-router/private-router";

const App = () => {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/login"]} component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
