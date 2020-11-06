import React from "react";
import Header from "./Header";
import "../stylesheets/components/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Education from "../pages/Education";
import Work from "../pages/Work";
import Projects from "../pages/Projects";
import About from "../pages/About";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={About} />
        <Route path="/education" exact component={Education} />
        <Route path="/work" exact component={Work} />
        <Route path="/projects" exact component={Projects} />
      </Router>
    </div>
  );
};

export default App;
