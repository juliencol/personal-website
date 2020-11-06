import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./stylesheets/App.scss";

import Header from "./components/Header";

import Education from "./pages/Education";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/education" exact component={Education} />
        <Route path="/work" exact component={Work} />
        <Route path="/projects" exact component={Projects} />
      </Router>
    </div>
  );
};

export default App;
