import React from "react"
import { Icon, Modal, Header } from "semantic-ui-react"
import "./Project.css"

const Project = data => {
  const { name, languages, img } = data.projectData
  return (
    <div
      className="project_cell"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "450px",
        height: "300px",
      }}
    >
      <div className="project_details">
        <div>
          <h1>{name}</h1>
          <h2>{languages}</h2>

          <Modal
            size="large"
            dimmer="blurring"
            trigger={
              <Icon
                className="click_icon"
                name="arrow circle down"
                size="huge"
              />
            }
          >
            <Modal.Header>{name}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <p>
                  We've found the following gravatar image associated with your
                  e-mail address.
                </p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Project
