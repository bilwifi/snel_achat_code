import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Routes from "../routers/Routes";
import { Container } from "react-bootstrap";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
function TheContent() {
  return (
    <main className="main-content ">
      {/* <Container fluid> */}
        <Suspense fallback={loading}>
          <Switch>
            <Routes />
            {/* <Redirect from="/" to="/dashboard" /> */}
          </Switch>
        </Suspense>
      {/* </Container> */}
    </main>
  );
}

export default React.memo(TheContent);
