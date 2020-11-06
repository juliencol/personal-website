/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "../stylesheets/main.scss";
import profilePicture from "../assets/images/profile_picture.jpg";
import resume from "../assets/documents/resume.pdf";

class Home extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="profile-container">
            <img src={profilePicture} alt="profile picture"></img>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/julien-colombain/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/juliencol">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/JulienColombain">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="description-container">
            <p>
              Hi 👋, I'm Julien, a 21-year-old <strong>Computer Science student</strong> living in{" "}
              <strong>Paris</strong>.
            </p>
            <p>
              I am currently working at{" "}
              <a href="http://www.thedeepsense.co">
                <strong>Deepsense</strong>
              </a>{" "}
              in Paris as a <strong>Software Engineer Intern</strong>.
            </p>
          </div>
          <div className="call-to-action">
            <a href={resume} className="btn-cta">
              <strong>Resume</strong>
            </a>
            <a href="mailto:julien@colombain.com" className="btn-cta">
              <strong>Email</strong>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
