import React, { Component } from "react";
import "../stylesheets/main.scss";
import resumePdf from "../assets/documents/resume.pdf";
import resumeImage from "../assets/images/resume.png";

class Projects extends Component {
  render() {
    return (
      <>
        <div className="container resume-container">
          <h1 className="page-title">Resume</h1>
          <a href={resumePdf} download="julien_colombain_resume.pdf">
            Download pdf
          </a>{" "}
          <img className="resume-image" src={resumeImage} alt="" />
        </div>
      </>
    );
  }
}

export default Projects;
