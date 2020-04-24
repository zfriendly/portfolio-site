import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Icon, Image } from "semantic-ui-react"
import "./Section.css"

const Contact = () => {
  return (
    <div className="section" id="contact">
      <Header color="black" size="huge">
        Got a question? Feel free to drop me a line.
      </Header>
      <div className="about_icons">
        <a href="https://github.com/zfriendly" target="_blank">
          <Icon name="github" size="massive"></Icon>
        </a>
        <a href="https://www.linkedin.com/in/zackfriendly/" target="_blank">
          <Icon name="linkedin" size="massive"></Icon>
        </a>
        <a href="mailto:zfriendly@gmail.com" target="_blank">
          <Icon name="mail" size="massive"></Icon>
        </a>
      </div>
    </div>
  )
}

export default Contact
