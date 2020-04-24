import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Icon } from "semantic-ui-react"
import "./Section.css"

const Home = () => {
  const scrollTo = id => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="section" id="home">
      <Header as="h1" className="header_1">
        Hi! I'm Zack Friendly.
      </Header>
      <Header as="h2" className="header_2">
        I'm a full-stack software engineer.
      </Header>
      <div>
        <Icon
          name="arrow circle down"
          size="huge"
          className="click_more"
          onClick={() => {
            scrollTo("#about")
          }}
        ></Icon>
      </div>
    </div>
  )
}

export default Home
