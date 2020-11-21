import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";
import style from "styled-theming";
import Education from "./pages/Education";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import "./stylesheets/main.scss";

const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111",
});

const getForeground = style("mode", {
  light: "#111",
  dark: "#EEE",
});

const getFontSize = style("textZoom", {
  normal: "1em",
  magnify: "1.2em",
});

const GlobalStyle = createGlobalStyle`
body, i, strong, .page-title {
  background-color: ${getBackground};
  color: ${getForeground};
  font-size: ${getFontSize}
}
`;

const getInitialTheme = () => {
  const savedTheme = storage.getItem("them");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme());
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />

        <label className="theme-btn">
          <input
            type="checkbox"
            onClick={() => setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })}
          />
          <span className="slider round"></span>
        </label>

        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/education" exact component={Education} />
          <Route path="/work" exact component={Work} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/resume" exact component={Resume} />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
