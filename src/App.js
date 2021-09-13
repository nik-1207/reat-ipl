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
    </Switch>
  </div>
</Router>
  );
}

export default App;
