import React, { Component } from "react";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import "../stylesheets/main.scss";
import Project from "../types/Project";

class Projects extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1 className="page-title">Projects</h1>
          <div className="project-cards-container">
            {projects.map((project: Project) => (
              <a href={project.website}>
                <ProjectCard
                  name={project.name}
                  image_source={project.image_source}
                  description={project.description}
                  website={project.website}
                />
              </a>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
