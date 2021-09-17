import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import AllTeams from "../Pages/AllTeams.jsx";
import TeamDetails from "../Pages/TeamDetails.jsx";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={AllTeams} />
      <Route path="/teams" exact component={AllTeams} />
      <Route path={`/teams/:a`} exact component={TeamDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}
