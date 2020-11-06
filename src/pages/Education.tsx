import React from "react";
import { Component } from "react";
import "../stylesheets/pages/Education.scss";
import EducationExperience from "../types/EducationExperience";
import EducationExperiences from "../data/education.json";
import EducationCard from "../components/EducationCard";

class Education extends Component {
  render() {
    return (
      <>
        <h1>Education</h1>
        {EducationExperiences.map((experience: EducationExperience) => (
          <EducationCard
            name={experience.name}
            duration={experience.duration}
            role={experience.role}
            description={experience.description}
          />
        ))}
      </>
    );
  }
}

export default Education;
