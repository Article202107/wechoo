import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";
import SignIn from "routes/SignIn";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn ? <Navigation></Navigation> : ""}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Redirect from="/*" to="/" />
          </>
        ) : (
          <>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Redirect from="/*" to="/" />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
