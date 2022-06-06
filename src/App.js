import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './Component/Contact/Contact';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import Streaming from './Component/Streaming/Streaming';
import Admin from './Component/Admin/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/streaming">
            <Streaming />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
