import React, { Fragment } from "react"
import Project from "./Project"
import { Grid } from "semantic-ui-react"
import "./Section.css"

const Projects = () => {
  const projects = [
    {
      name: "Michelin City Explorer",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/aTeBiUF.png",
      githubURL: "https://github.com/zfriendly/city-explorer",
      description:
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
    {
      name: "Wild West Hangman",
      languages: "Javascript | HTML | CSS",
      img: "https://i.imgur.com/Jmv4qbo.png",
      githubURL: "https://github.com/zfriendly/hangman-game",
      description:
        "An interactive Hangman game built using VanillaJS, incorporating a random word API",
      deployed: "https://zfriendly.github.io/hangman-game/",
    },
    {
      name: "CoTripper",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/JfT0pxi.png",
      githubURL: "https://github.com/zfriendly/city-explorer",
      description:
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
    {
      name: "Pawsitivity",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/YzQCNjx.png",
      githubURL: "https://github.com/zfriendly/city-explorer",
      description:
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
    {
      name: "Cocktail Recipe Generator",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/yzpoSAh.png",
      githubURL: "https://github.com/zfriendly/city-explorer",
      description:
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
    {
      name: "Dog Breeds Info Modal",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/NXopcxL.png",
      githubURL: "https://github.com/zfriendly/city-explorer",
      description:
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
    {
      name: "Game of War",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/BFA0Isx.png",
      githubURL: "https://github.com/zfriendly/city-explorer",
      description:
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
    {
      name: "Component Library",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/IXuc3xu.png",
      githubURL: "https://github.com/zfriendly/city-explorer",
      description:
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
    {
      name: "D.C. Trivia Game",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/iiHHAIB.png",
      githubURL: "https://github.com/zfriendly/city-explorer",
      description:
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
  ]
  return (
    <div className="section" id="projects">
      <div className="projects_grid">
        {projects.map(project => (
          <Project projectData={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
