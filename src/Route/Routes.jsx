import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import AllTeams from "../Pages/AllTeams.jsx";
import TeamDetails from "../Pages/TeamDetails.jsx";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={AllTeams} />
      <Route path="/teams" exact component={AllTeams} />
      <Route path={`/teams/chennai-super-kings`} exact component={TeamDetails} />
      <Route path={`/teams/delhi-capitals`} exact component={TeamDetails} />
      <Route path={`/teams/kings-xi-punjab`} exact component={TeamDetails} />
      <Route path={`/teams/kolkata-knight-riders`} exact component={TeamDetails} />
      <Route path={`/teams/mumbai-indians`} exact component={TeamDetails} />
      <Route path={`/teams/rajasthan-royals`} exact component={TeamDetails} />
      <Route path={`/teams/royal-challengers-bangalore`} exact component={TeamDetails} />
      <Route path={`/teams/sunrisers-hyderabad`} exact component={TeamDetails} />

      <Route component={NotFound} />
    </Switch>
  );
}
