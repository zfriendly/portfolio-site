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
        "A full-stack MERN app guide to attractions in Michelin-guide cities across America.",
      deployed: "https://michelin-city-explorer.netlify.app/",
    },
    {
      name: "Wild West Hangman",
      languages: "Javascript | HTML | CSS",
      img: "https://i.imgur.com/Jmv4qbo.png",
      githubURL: "https://github.com/zfriendly/hangman-game",
      description:
        "An interactive Hangman game built using VanillaJS, incorporating a random word API.",
      deployed: "https://zfriendly.github.io/hangman-game/",
    },
    {
      name: "CoTripper",
      languages: "React.JS | Jest | Django | PostgreSQL",
      img: "https://i.imgur.com/JfT0pxi.png",
      githubURL: "https://github.com/CotripperPlatform/CoTrip",
      description:
        "Tourism website dedicated to helping single mothers travel.",
      deployed: "https://www.cotripper.co/",
    },
    {
      name: "Pawsitivity",
      languages: "Mongo DB | Express.JS | React.JS | Node.JS (MERN)",
      img: "https://i.imgur.com/YzQCNjx.png",
      githubURL: "https://github.com/saralaffin/best-in-show",
      description: "An Instagram-style app where users add their own pets.",
      deployed: "https://pawsitivity.netlify.app/",
    },
    {
      name: "Cocktail Recipe Generator",
      languages: "React.JS | CSS",
      img: "https://i.imgur.com/yzpoSAh.png",
      githubURL: "https://github.com/zfriendly/cocktail-react-ui",
      description:
        "A random cocktail recipe generator to practice building modals in React.JS.",
      deployed: "https://zfriendly-cocktail-react-ui.netlify.app/",
    },
    {
      name: "Game of War",
      languages: "Javascript | HTML",
      img: "https://i.imgur.com/BFA0Isx.png",
      githubURL: "https://github.com/zfriendly/Game-of-War.io",
      description: "A Game of War built to play in the browser console.",
      deployed: "https://github.com/zfriendly/Game-of-War.io",
    },
    {
      name: "Component Library",
      languages: "React.JS | CSS",
      img: "https://i.imgur.com/IXuc3xu.png",
      githubURL: "https://github.com/zfriendly/component-library",
      description:
        "A component library built in Storybook based off an Adobe XD mock-up.",
      deployed:
        "https://zack-component-storybook.netlify.app/?path=/story/button--primary",
    },
    {
      name: "D.C. Trivia Game",
      languages: "Python | PostgreSQL | PeeWee",
      img: "https://i.imgur.com/iiHHAIB.png",
      githubURL: "https://github.com/zfriendly/python-cli-game",
      description:
        "D.C. Trivia game built in Python to be played in the terminal.",
      deployed: "https://github.com/zfriendly/python-cli-game",
    },
    {
      name: "National Parks API",
      languages: "React.JS | CSS",
      img: "https://i.imgur.com/Eo9joWF.png",
      githubURL: "https://github.com/zfriendly/national-parks-api",
      description:
        "A guide to America's National Parks, built using NPS API data.",
      deployed: "https://github.com/zfriendly/national-parks-api",
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
