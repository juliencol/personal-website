import React from "react";
import "../stylesheets/components/ProjectCard.scss";

const ProjectCard = (props: any) => {
  return (
    <div className="project-card">
      <img src={props.image_source} alt="" />
      <div className="project-card-infos">
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <a href={props.website}>Website</a>
          <a href={props.github}>Github</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
