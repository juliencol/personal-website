import React, { Component } from "react";
import workExperiences from "../data/work_experiences.json";
import WorkCard from "../components/WorkCard";
import "../stylesheets/main.scss";
import WorkExperience from "../types/WorkExperience";

class Work extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1 className="page-title ">Work Experiences</h1>
          {workExperiences.map((experience: WorkExperience) => (
            <WorkCard
              name={experience.name}
              city={experience.city}
              date={experience.date}
              duration={experience.duration}
              role={experience.role}
              description={experience.description}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Work;
