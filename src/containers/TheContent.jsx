import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Routes from "../routers/Routes";

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
        </Switch>
      </Suspense>
    </main>
  );
}

export default React.memo(TheContent);
