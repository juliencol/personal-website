import React, { Component } from "react";
import "../stylesheets/pages/Home.scss";
import profilePicture from '../assets/profile_picture.jpg'

class Home extends Component {
  render() {
    return (
      <>
        <div className="main-container">
          <div className="profile-container">
            <img src={profilePicture} alt="profile picture">
            </img>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/julien-colombain/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/juliencol" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/JulienColombain" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="description-container">
            <p>
              Hi 👋, I'm Julien, a 21-year-old <strong>Computer Science student</strong> living in <strong>Paris</strong>.
            </p>
            <p>
              I am currently working at <a href="http://www.thedeepsense.co" target="_blank" rel="noreferrer"><strong>Deepsense</strong></a> in Paris as a <strong>Software Engineer Intern</strong>.
            </p>
          </div>
          <div className="call-to-action">
            <a href="../assets/resume.pdf" target="_blank" rel="noreferrer" className="btn-cta">
              Resume
            </a>
            <a href="mailto:julien@colombain.com" target="_blank" rel="noreferrer" className="btn-cta">
              Email
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
