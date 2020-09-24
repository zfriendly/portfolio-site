import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "Resume" }) {
        publicURL
      }
    }
  `)
  return (
    <Fragment>
      <h2>
        <a href={data.file.publicURL} target="_blank">
          Resume
        </a>
      </h2>
    </Fragment>
  )
}
export default Resume
