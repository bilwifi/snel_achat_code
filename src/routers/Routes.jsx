import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

import Home from "../views/Home";
import FactureList from "../views/FactureList";
// import AchatFormulaire from "../views/AchatFormulaire";

const Routes = () => {
  return (
    <Switch>
      <Route   path="/home/factures">
        <FactureList />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      
    </Switch>
  );
};

export default Routes;
