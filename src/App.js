import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Routes from "./Route/Routes";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
