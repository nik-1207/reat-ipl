import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import AllTeams from "../Pages/AllTeams.jsx";
import TeamDetails from "../Pages/TeamDetails.jsx";

const Routes = (
  <>
    <Switch>
      <Route path="/" exact>
        <AllTeams />
      </Route>
      <Route path="/teams" exact>
        <AllTeams />
      </Route>
      <Route path="/teams/:url" exact>
        <TeamDetails />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </>
);
export default Routes;
