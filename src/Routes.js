import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/index"
import Shop from "./pages/Shop"
import AnarchismPage from "./pages/AnarchismPage"
import HobgoblinPage from "./pages/HobgoblinPage"
import WrongHegelPage from "./pages/WrongHegelPage"



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/AnarchismPage" component={AnarchismPage} />
        <Route exact path="/HobgoblinPage" component={HobgoblinPage} />
        <Route exact path="/WrongHegelPage" component={WrongHegelPage} />


      </Switch>
    </BrowserRouter>
  );
};

export default Routes;