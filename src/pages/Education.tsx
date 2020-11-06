import React from "react";
import { Component } from "react";
import "../stylesheets/main.scss";
import EducationExperience from "../types/EducationExperience";
import EducationExperiences from "../data/education_experiences.json";
import EducationCard from "../components/EducationCard";

class Education extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1 className="page-title">Education</h1>
          {EducationExperiences.map((experience: EducationExperience) => (
            <EducationCard
              name={experience.name}
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

export default Education;
