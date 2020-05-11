import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Icon, Image } from "semantic-ui-react"
import "./Section.css"

const About = () => {
  return (
    <div className="section" id="about">
      <Image
        src="https://i.imgur.com/DJxH6eh.png"
        size="medium"
        circular
        className="headshot"
      />
      <div className="about_text">
        <Header size="huge">// About Me</Header>
        <Header className="about_textboxes">
          I am a resourceful software engineer with a knack for ideating
          creative solutions to complex problems. Experienced in working across
          a wide range of disciplines, from app-building and software debugging
          to large-scale event production to discreet investigations. Compelled
          by a desire to understand the entirety of an issue and a willingness
          to dig into the minutiae.
        </Header>
        <Header size="huge">// Skills</Header>
        <Header className="about_textboxes">
          <span className="skill_titles">Front-End: </span> HTML, CSS,
          Javascript, React, Vue, Gatsby/GraphQL
          <br />
          <span className="skill_titles">Back-End: </span> Node, Express,
          Python, Django, MongoDB, PostgreSQL
          <br />
          <span className="skill_titles">Deployment/Management: </span> Git,
          Github, NPM, Heroku, Pip
          <br />
          <span className="skill_titles">Other Skills: </span> Adobe
          Photoshop/XD, Jira, Trello, Salesforce
        </Header>
        <div className="about_icons">
          <a href="https://github.com/zfriendly" target="_blank">
            <Icon name="github" size="huge" className="click_icon"></Icon>
          </a>
          <a href="https://www.linkedin.com/in/zackfriendly/" target="_blank">
            <Icon name="linkedin" size="huge" className="click_icon"></Icon>
          </a>
          <a href="mailto:zfriendly@gmail.com" target="_blank">
            <Icon name="mail" size="huge" className="click_icon"></Icon>
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
