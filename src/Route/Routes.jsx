import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import AllTeams from "../Pages/AllTeams.jsx";
import TeamDetails from "../Pages/TeamDetails.jsx";

const Routes = (
    <Switch>
      <Route path="/" exact component={AllTeams}/>
      <Route path="/teams" exact component={AllTeams}/>
      <Route path="/teams/:url" exact component={TeamDetails}/>
      <Route path="/NotFound" component={NotFound}/>
    </Switch>
);
export default Routes;
