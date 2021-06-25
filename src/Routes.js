import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import WelcomePage from "./pages/index"
import Shop from "./pages/Shop"
import AnarchismPage from "./pages/AnarchismPage"
import HobgoblinPage from "./pages/HobgoblinPage"
import WrongHegelPage from "./pages/WrongHegelPage"
import MadMarxPage from "./pages/MadMarxPage"
import MadMarxBlackPage from "./pages/MadMarxBlackPage"
import MarxLemonPage from "./pages/MarxLemonPage"




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
        <Route exact path="/MadMarxPage" component={MadMarxPage} />
        <Route exact path="/MadMarxBlackPage" component={MadMarxBlackPage} />
        <Route exact path="/MarxLemonPage" component={MarxLemonPage} />


      </Switch>
    </BrowserRouter>
  );
};

export default Routes;