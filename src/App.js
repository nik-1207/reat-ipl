import './App.css';
import Navbar from './components/Navbar';
import CardContainer from './Pages/CardContainer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
<Router>
  <Navbar/>
  <div className="App">
    <Switch>
      <Route path='/' exact>
        <CardContainer/>
      </Route>
      <Route path='/teams/chennai-super-kings' exact>
        CSK
      </Route>      
      <Route path='/teams/delhi-capitals' exact>
        DC
      </Route>      
      <Route path='/teams/kings-xi-punjab' exact>
        KXIP
      </Route>      
      <Route path='/teams/kolkata-knight-riders' exact>
        KKR
      </Route>
      <Route path='/teams/mumbai-indians' exact>
        MI
      </Route>
      <Route path='teams/rajasthan-royals' exact>
        RR
      </Route>
      <Route path='/teams/"royal-challengers-bangalore"' exact>
        RCB
      </Route>
      <Route path='/teams/sunrisers-hyderabad' exact>
        SRH
      </Route>
      <Route>
        <div>
          Not found
        </div>
      </Route>


    </Switch>
  </div>
</Router>
  );
}

export default App;
