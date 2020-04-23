import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Icon } from "semantic-ui-react"
import "./Section.css"

const About = () => {
  return (
    <div className="section" id="about">
      <Header as="h1">About Me</Header>
      <Header as="h2">
        I am a resourceful software engineer with a knack for ideating creative
        solutions to complex problems. Experienced in working across a wide
        range of disciplines, from app-building and software debugging to
        large-scale event production to discreet investigations. Compelled by a
        desire to understand the entirety of an issue and a willingness to dig
        into the minutiae.
      </Header>
      <Header as="h1">Skills</Header>
      <Header as="h2">
        Front-end: HTML/CSS, Sass, Javascript, React, Vue <br />
        Back-end: Node, Express, Python, Django, MongoDB, PostgreSQL
        <br />
        Management/Deployment: Git, Heroku, NPM, Pip/Pipenv
      </Header>
      <div>
        <a href="https://github.com/zfriendly" target="_blank">
          <Icon name="github" size="huge"></Icon>
        </a>
        <a href="https://www.linkedin.com/in/zackfriendly/" target="_blank">
          <Icon name="linkedin" size="huge"></Icon>
        </a>
        <a href="mailto:zfriendly@gmail.com" target="_blank">
          <Icon name="mail" size="huge"></Icon>
        </a>
      </div>
    </div>
  )
}

export default About
