import React from "react";
import "../stylesheets/components/Header.scss";

const Header = () => {
  return (
    <header className="site-header" role="banner">
      <nav className="site-nav">
        <div className="trigger d-flex">
          <a className="page-link" href="/">
            Julien Colombain
          </a>
          <a className="page-link" href="/education">
            Education
          </a>
          <a className="page-link" href="/work">
            Work
          </a>
          <a className="page-link" href="/projects">
            Projects
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
