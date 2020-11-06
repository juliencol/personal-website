/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../stylesheets/main.scss";

const Header = () => {
  return (
    <div className="site-header">
      <a href="/" className=".page-link">
        Julien Colombain
      </a>
      <div>
        <a href="/work" className=".page-link">
          Work
        </a>
        <a href="/education" className=".page-link">
          Education
        </a>
        <a href="/projects" className=".page-link">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Header;
