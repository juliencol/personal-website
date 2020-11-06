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
          {projects.map((project: Project) => (
            <ProjectCard
              name={project.name}
              image_source={project.image_source}
              description={project.description}
              website={project.website}
              github={project.github}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
