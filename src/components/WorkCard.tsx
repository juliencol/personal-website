import React from "react";
import "../stylesheets/main.scss";
import WorkExperience from "../types/WorkExperience";

const WorkCard = (props: WorkExperience) => {
  return (
    <div className="container">
      <div className="work-card">
        <div className="work-card-title">
          <h3>
            {props.name}, {props.city}
          </h3>
        </div>
        <div className="work-card-infos">
          <div className="date">
            <p>
              <i>{props.role}</i>
            </p>
            <p>
              {props.date} ({props.duration})
            </p>
          </div>
          <p>{props.description}</p>
          <p>
            <strong>Technologies</strong>: {props.technologies}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
