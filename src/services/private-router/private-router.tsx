// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from "react";
import AuthService from "../../services/auth-service";
import { Redirect, Route } from "react-router-dom";
import NavRouter from "../../services/private-router/nav-router";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    maxWidth: "unset",
  },
}));

const Wrapper = styled.div`
  display: flex;
`;

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line.
  const isLoggedIn = AuthService.getCurrentUser();
  const classes = useStyles();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Wrapper>
            <NavRouter />
            <main className={classes.content}>
              <Container className={classes.container}>
              <div className={classes.appBarSpacer} />
                <Component {...props} />
              </Container>
            </main>
          </Wrapper>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
