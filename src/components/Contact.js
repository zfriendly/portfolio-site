import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Icon, Image } from "semantic-ui-react"
import "./Section.css"

const Contact = () => {
  const hoverEvent = el => {
    console.log(el)
    // el.classList.add("animated", "bounce")
  }
  return (
    <div className="section" id="contact">
      <Header size="huge">Got a question? Feel free to drop me a line.</Header>
      <div className="contact_icons">
        <a href="https://github.com/zfriendly" target="_blank">
          <Icon
            className="animate-icon"
            name="github"
            size="massive"
            className="click_icon"
          ></Icon>
        </a>
        <a href="https://www.linkedin.com/in/zackfriendly/" target="_blank">
          <Icon
            className="animate-icon"
            name="linkedin"
            size="massive"
            className="click_icon"
          ></Icon>
        </a>
        <a href="mailto:zfriendly@gmail.com" target="_blank">
          <Icon
            className="animate-icon"
            name="mail"
            size="massive"
            className="click_icon"
          ></Icon>
        </a>
      </div>
    </div>
  )
}

export default Contact
