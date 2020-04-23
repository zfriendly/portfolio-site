import React from "react"
import { Icon, Modal, Header, Image } from "semantic-ui-react"
import "./Project.css"

const Project = data => {
  const {
    name,
    languages,
    img,
    githubURL,
    description,
    deployed,
  } = data.projectData
  return (
    <div
      className="project_cell"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "300px",
        height: "200px",
      }}
    >
      <div className="project_details">
        <div>
          <h2>{name}</h2>
          <h3>{languages}</h3>

          <Modal
            size="large"
            dimmer="blurring"
            trigger={
              <Icon
                className="click_icon"
                name="arrow circle down"
                size="big"
              />
            }
          >
            <Modal.Header className="project_header">{name}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size="huge" src={`${img}`} />
              <Modal.Description className="project_modal">
                <h2>{description}</h2>
                <h3>{languages}</h3>
                <div className="project_icons">
                  <a href={`${githubURL}`} target="_blank">
                    <Icon name="github" size="huge"></Icon>
                  </a>
                  <a href={`${deployed}`} target="_blank">
                    <Icon name="play circle" size="huge"></Icon>
                  </a>
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Project
