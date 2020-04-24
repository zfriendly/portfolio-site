import React from "react"
import { Link } from "gatsby"
import "semantic-ui-css/semantic.min.css"
import { Button, Sticky } from "semantic-ui-react"
import { Home, About, Projects, Layout, SEO, Contact } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
