/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import "../stylesheets/main.scss";
import profilePicture from "../assets/images/profile_picture.jpg";
import resumePdf from "../assets/documents/resume.pdf";

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
              👋 Hi, I'm Julien, a french 21-year-old <strong>Computer Science student</strong> living in{" "}
              <strong>Paris</strong>. 🇫🇷
            </p>
            <p>
              I am currently working as a <strong>Software Engineer Intern</strong> at{" "}
              <a href="http://www.thedeepsense.co">
                <strong>Deepsense</strong>
              </a>
              . 🤓
            </p>
            <p>
              Highly interested in <strong>Deeptech</strong> and <strong>Fintech</strong>, I aim to work
              internationally as a <strong>Software Engineer</strong>. 👨‍💻
            </p>
            <p>
              I will graduate from{" "}
              <a href="https://www.isep.fr/">
                <strong>ISEP</strong>
              </a>{" "}
              in 2022. 🎓
            </p>
            <p>Feel free to reach out to grab a coffee. ☕</p>
          </div>
          <div className="call-to-action">
            <a href={resumePdf} className="btn-cta" download="JulienColombainResume.pdf">
              <strong>Resume</strong>
            </a>{" "}
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
