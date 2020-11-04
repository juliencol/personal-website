import React from "react";
import Header from "./Header";
import "../stylesheets/components/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Education from "./Education";
import Work from "./Work";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="App">
      <Header />
      <h2>In construction...</h2>
      <Router>
        <Route path="/education" exact component={Education} />
        <Route path="/work" exact component={Work} />
        <Route path="/projects" exact component={Projects} />
      </Router>
    </div>
  );
};

export default App;
