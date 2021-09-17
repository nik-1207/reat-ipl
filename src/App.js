import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Routes from "./Route/Routes.jsx";
import CustomLoader from "./components/CustomLoader";


function App() {
  return (
    <Router>
      <Navbar />
      <CustomLoader/>
      <div className="App">
        {Routes}
      </div>
    </Router>
  );
}

export default App;
