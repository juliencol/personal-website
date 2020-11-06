import React, { Component } from "react";
import "../stylesheets/pages/Work.scss";
import workExperiences from "../data/work.json";
import WorkCard from "../components/WorkCard";

class Work extends Component {
  render() {
    return (
      <>
        <h1>Work</h1>
        {workExperiences.map((workExperience: any) => (
          <WorkCard
            name={workExperience.name}
            city={workExperience.city}
            date={workExperience.date}
            duration={workExperience.duration}
            role={workExperience.role}
            description={workExperience.description}
          />
        ))}
      </>
    );
  }
}

export default Work;
