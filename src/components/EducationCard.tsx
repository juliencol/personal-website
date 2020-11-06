import React from "react";
import EducationExperience from "../types/EducationExperience";

const EducationCard = (props: EducationExperience) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.duration}</p>
      <p>{props.role}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default EducationCard;
