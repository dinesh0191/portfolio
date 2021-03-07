import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Project} path="/project" />
        <Route component={Skills} path="/skills" />
        <Route component={About} path="/about" />
        <Route component={Home} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
