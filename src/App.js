import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import CardContainer from './Pages/CardContainer';
import URL from './config/urlMap';
import './App.css';

function App() {
  return (
<Router>
  <Navbar/>
  <div className="App">
    <Switch>
      <Route path='/' exact>
        <CardContainer url={URL.default}/>
      </Route>
      <Route path='/teams/chennai-super-kings' exact>
        <CardContainer url={URL['chennai-super-kings']}/>
      </Route>      
      <Route path='/teams/delhi-capitals' exact>
        <CardContainer  url={URL['delhi-capitals']}/>
      </Route>      
      <Route path='/teams/kings-xi-punjab' exact>
        <CardContainer url={URL['kings-xi-punjab']} />
      </Route>      
      <Route path='/teams/kolkata-knight-riders' exact>
        <CardContainer url={URL['kolkata-knight-riders']} />
      </Route>
      <Route path='/teams/mumbai-indians' exact>
        <CardContainer url={URL['mumbai-indians']} />
      </Route>
      <Route path='/teams/rajasthan-royals' exact>
        <CardContainer url={URL['rajasthan-royals']} />
      </Route>
      <Route path='/teams/royal-challengers-bangalore' exact>
        <CardContainer url={URL['royal-challengers-bangalore']} />
      </Route>
      <Route path='/teams/sunrisers-hyderabad' exact>
        <CardContainer url={URL['sunrisers-hyderabad']} />
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
