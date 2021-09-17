import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Routes from "./Route/Routes.jsx";
import CustomLoader from "./components/CustomLoader";
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      <CustomLoader />
      <ErrorBoundry>
        <div className="App"><Routes/></div>
      </ErrorBoundry>
    </Router>
  );
}

export default App;
