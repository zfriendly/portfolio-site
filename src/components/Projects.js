import React, { Fragment } from "react"
import Project from "./Project"
import "./Section.css"

const Projects = () => {
  const projects = [
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "",
      githubURL: "",
    },
  ]
  return (
    <Fragment>
      {projects.map(project => (
        <Project projectData={project} />
      ))}
    </Fragment>
  )
}

export default Projects
