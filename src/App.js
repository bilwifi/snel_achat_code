import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Loader from "./components/Loader"
const loading = (
  <Loader/>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));
const AchatFormulaire = React.lazy(() => import("./views/AchatFormulaire"));
const Login = React.lazy(() => import("./views/Login"));
// Pages
// const Login = React.lazy(() => import('./views/pages/Login'));
// const Page404 = React.lazy(() => import('./views/pages/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/Page500'));

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} /> */}
            <Route exact path="/">
              <Login />
            </Route>
            <Route  path="/achat">
              <AchatFormulaire />
            </Route>
            
            <Route
              path="/home"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
