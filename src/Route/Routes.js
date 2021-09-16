import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import AllTeams from "../Pages/AllTeams.jsx";
import TeamDetails from "../Pages/TeamDetails.jsx";
import Loader from "../components/Loader.jsx";
import { useEffect, useState } from "react";
import { subscriber } from "../config/PubSub";
import { LoadingEvent } from "../config/LoadingEvent";

function Routes() {
  useEffect(() => {
    const handle = subscriber(LoadingEvent, (loadingState) => {
      return loadingState
    });
    return () => {
      handle.unsubscribe();
    };
  }, []);
  return (
    <Switch>
      <Route path="/" exact component={AllTeams} />
      <Route path="/loading" exact component={Loader} />
      <Route path="/teams" exact component={AllTeams} />
      <Route path="/teams/:url" exact component={TeamDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
