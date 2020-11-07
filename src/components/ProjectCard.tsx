/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../stylesheets/components/ProjectCard.scss";
import Project from "../types/Project";

const ProjectCard = (props: Project) => {
  return (
    <div className="project-card">
      <img src={props.image_source} />
      <div className="project-card-infos">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
