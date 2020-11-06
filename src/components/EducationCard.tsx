import React from "react";
import EducationExperience from "../types/EducationExperience";
import "../stylesheets/main.scss";

const EducationCard = (props: EducationExperience) => {
  return (
    <div className="">
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      <p>{props.duration}</p>
      <p>{props.role}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default EducationCard;
