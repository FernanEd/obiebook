import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Newsfeed from "./pages/Newsfeed";
import Userpage from "./pages/Userpage";

const user = React.createContext({ id: "", token: "", isLogged: false });
interface Props {}

const App: React.FunctionComponent<Props> = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/news" exact>
            <Newsfeed />
          </Route>
          <Route path="/users/:id" exact>
            <Userpage />
          </Route>
          <Route path="/login" exact>
            <Loginpage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
