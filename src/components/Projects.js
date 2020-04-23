import React, { Fragment } from "react"
import Project from "./Project"
import { Grid } from "semantic-ui-react"
import "./Section.css"

const Projects = () => {
  const projects = [
    {
      name: "First Cool Project",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
    {
      name: "First Cool Project",
      languages: ["jquery", "react", "python"],
      img: "https://i.imgur.com/7svqxvu.png",
      githubURL: "",
    },
  ]
  return (
    <div className="section">
      <div className="projects_grid">
        {projects.map(project => (
          <Project projectData={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
