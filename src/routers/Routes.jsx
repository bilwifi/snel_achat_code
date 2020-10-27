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
import AchatFormulaire from "../views/AchatFormulaire";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/factures">
        <FactureList />
      </Route>
      <Route path="/achat">
        <AchatFormulaire />
      </Route>
    </Switch>
  );
};

export default Routes;
