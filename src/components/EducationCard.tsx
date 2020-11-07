import React from "react";
import EducationExperience from "../types/EducationExperience";
import "../stylesheets/main.scss";

const EducationCard = (props: EducationExperience) => {
  return (
    <div className="">
      <h3>{props.name}</h3>
      <p>{props.date} ({props.duration})</p>
      <p><i>{props.role}</i></p>
      <p>{props.description}</p>
    </div>
  );
};

export default EducationCard;
