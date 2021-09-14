import React from "react";
import { Switch, Route } from "react-router-dom";
import CardContainerAllTeams from "../Pages/CardContainerAllTeams";
import URL from "../config/urlMap";
import CardContainerTeamDetails from "../Pages/CardContainerTeamDetails";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <CardContainerAllTeams />
        </Route>
        <Route path="/teams/chennai-super-kings" exact>
          <CardContainerTeamDetails
            url={URL["chennai-super-kings"]}
            teamName="chennai-super-kings"
          />
        </Route>
        <Route path="/teams/delhi-capitals" exact>
          <CardContainerTeamDetails
            url={URL["delhi-capitals"]}
            teamName="delhi-capitals"
          />
        </Route>
        <Route path="/teams/kings-xi-punjab" exact>
          <CardContainerTeamDetails
            url={URL["kings-xi-punjab"]}
            teamName="kings-xi-punjab"
          />
        </Route>
        <Route path="/teams/kolkata-knight-riders" exact>
          <CardContainerTeamDetails
            url={URL["kolkata-knight-riders"]}
            teamName="kolkata-knight-riders"
          />
        </Route>
        <Route path="/teams/mumbai-indians" exact>
          <CardContainerTeamDetails
            url={URL["mumbai-indians"]}
            teamName="mumbai-indians"
          />
        </Route>
        <Route path="/teams/rajasthan-royals" exact>
          <CardContainerTeamDetails
            url={URL["rajasthan-royals"]}
            teamName="rajasthan-royals"
          />
        </Route>
        <Route path="/teams/royal-challengers-bangalore" exact>
          <CardContainerTeamDetails
            url={URL["royal-challengers-bangalore"]}
            teamName="royal-challengers-bangalore"
          />
        </Route>
        <Route path="/teams/sunrisers-hyderabad" exact>
          <CardContainerTeamDetails
            url={URL["sunrisers-hyderabad"]}
            teamName="sunrisers-hyderabad"
          />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
