import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CardContainerAllTeams from "./Pages/CardContainerAllTeams";
import URL from "./config/urlMap";
import "./App.css";
import CardContainerTeamDetails from "./Pages/CardContainerTeamDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <CardContainerAllTeams />
          </Route>
          <Route path="/teams/chennai-super-kings" exact>
            <CardContainerTeamDetails url={URL["chennai-super-kings"]} />
          </Route>
          <Route path="/teams/delhi-capitals" exact>
            <CardContainerTeamDetails url={URL["delhi-capitals"]} />
          </Route>
          <Route path="/teams/kings-xi-punjab" exact>
            <CardContainerTeamDetails url={URL["kings-xi-punjab"]} />
          </Route>
          <Route path="/teams/kolkata-knight-riders" exact>
            <CardContainerTeamDetails url={URL["kolkata-knight-riders"]} />
          </Route>
          <Route path="/teams/mumbai-indians" exact>
            <CardContainerTeamDetails url={URL["mumbai-indians"]} />
          </Route>
          <Route path="/teams/rajasthan-royals" exact>
            <CardContainerTeamDetails url={URL["rajasthan-royals"]} />
          </Route>
          <Route path="/teams/royal-challengers-bangalore" exact>
            <CardContainerTeamDetails
              url={URL["royal-challengers-bangalore"]}
            />
          </Route>
          <Route path="/teams/sunrisers-hyderabad" exact>
            <CardContainerTeamDetails url={URL["sunrisers-hyderabad"]} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
