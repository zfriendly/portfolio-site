import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      file(id: { eq: "fbefd7b9-5a11-5813-9e42-f8a29412f55e" }) {
        id
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
