import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Project from "./Components/Project";
import About from "./Components/About";
import Skills from "./Components/Skills";
// import { keepTheme } from "./Components/theme";
// import { useEffect } from "react/cjs/react.development";

function App() {
  //   useEffect(() => {
  //     keepTheme();
  //   });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Project} path="/project" />
        <Route component={Skills} path="/skills" />
        <Route path="/about">
          <About />
        </Route>
        <Route component={Home} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
