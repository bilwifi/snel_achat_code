import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("./containers/TheLayout"));
const AchatFormulaire = React.lazy(() => import("./views/AchatFormulaire"));
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
            <Route exact path="/achat">
              <AchatFormulaire />
            </Route>
            <Route
              path="/"
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
