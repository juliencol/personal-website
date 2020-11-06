import React, { Component } from "react";
import "../stylesheets/pages/Projects.scss";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";

class Projects extends Component {
  render() {
    return (
      <>
        <h1>Projects</h1>
        {projects.map((project: any) => (
          <ProjectCard
            name={project.name}
            image_source={project.image_source}
            description={project.description}
            website={project.website}
            github={project.github}
          />
        ))}
      </>
    );
  }
}

export default Projects;
