import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Grid, Menu, Sticky } from "semantic-ui-react"
import Resume from "./Resume"
import Contact from "./Contact"
import "./Header.css"

const Header = ({ siteTitle }) => {
  const scrollTo = id => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="header_bar">
      <h2>Zack Friendly</h2>
      <Menu floated="right" secondary>
        <Menu.Item>
          <h2
            onClick={() => {
              scrollTo("#about")
            }}
          >
            About
          </h2>
        </Menu.Item>
        <Menu.Item>
          <h2
            onClick={() => {
              scrollTo("#projects")
            }}
          >
            Projects
          </h2>
        </Menu.Item>
        <Menu.Item>
          <Resume />
        </Menu.Item>
        <Menu.Item>
          <h2
            onClick={() => {
              scrollTo("#contact")
            }}
          >
            Contact
          </h2>
        </Menu.Item>
      </Menu>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
