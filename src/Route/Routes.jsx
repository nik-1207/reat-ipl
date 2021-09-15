import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import CardContainerAllTeams from "../Pages/CardContainerAllTeams";
import CardContainerTeamDetails from "../Pages/CardContainerTeamDetails";

const Routes = (
  <div>
    <Switch>
      <Route path="/" exact>
        <CardContainerAllTeams />
      </Route>
      <Route path="/teams" exact>
        <CardContainerAllTeams />
      </Route>      
      <Route path="/teams/:url" exact>
        <CardContainerTeamDetails />
      </Route>
      <Route>{NotFound}</Route>
    </Switch>
  </div>
);
export default Routes;
