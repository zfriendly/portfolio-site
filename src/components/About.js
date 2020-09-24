import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Icon, Image } from "semantic-ui-react"
import "./Section.css"

const About = () => {
  return (
    <div className="section" id="about">
      <Image
        src="https://i.imgur.com/fDUtTPD.jpg"
        size="medium"
        circular
        className="headshot"
      />
      <div className="about_text">
        <Header size="huge">// About Me</Header>
        <Header className="about_textboxes">
          I am a resourceful software engineer with a knack for ideating
          creative solutions to complex problems. My career as a private
          investigator by day and music events producer by night allowed me
          develop a capacity to independently problem-solve and balance multiple
          competing deadlines and tight budgets. I approach each problem with
          thoughftulness and a willingness to work within a team to reach a
          shared goal. I am experienced in working across a wide range of
          disciplines, from app-building and software debugging to large-scale
          event production to discreet investigations.
        </Header>
        <Header size="huge">// Skills</Header>
        <Header className="about_textboxes">
          <span className="skill_titles">Programming Languages: </span>{" "}
          JavaScript, Python, SQL, CSS, HTML
          <br />
          <span className="skill_titles">Platforms and Frameworks: </span>{" "}
          React, Node, Vue, Gatsby, Django, Express, MongoDB, GIT
          <br />
          <span className="skill_titles">Other skills: </span> RESTful APIs,
          GitHub, Mongoose, Agile, Heroku, Bootstrap, MaterialUI, Storybook,
          Netlify, Peewee, Application and Database Object-Oriented Design,
          Encapsulation, Testing, Data Structures, Debugging, Responsive Design,
          Adobe Photoshop, Salesforce, CRM
          <br />
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
