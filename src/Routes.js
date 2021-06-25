import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/index"
import Shop from "./pages/Shop"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/Shop" component={Shop} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;