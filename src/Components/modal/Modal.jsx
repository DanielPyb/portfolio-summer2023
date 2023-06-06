import React from "react";
import "./styles.css";

export default function Modal({ project, toggleModal}) {
  return (
    <>
    {project && (
        <>
    <div className="modal-overlay" onClick={toggleModal}></div>
    <div className="modal">
    <div className="modal-content">
      <h1>{project.title}</h1>
      <img src={project.image} className="modal-image" />
        <div className="modal-body">
      <div className="left-modal">
        <h3>Task description</h3>
        <p>{project.task}</p>
      </div>
      <div className="right-modal">
        <h3>Description</h3>
        <p>{project.description}</p>
        <h3>Created with</h3>
        <ul>
          {project.tools.map((tool) => {
            return <li>{tool}</li>;
          })}
        </ul>
      </div>
      </div>
      <div className="bottom-modal">
        <h2>Check it out here</h2>
        <p>
          <a href={project.links.github}> GitHub</a>
        </p>
        <p>
          <a href={project.links.livesite}> LiveSite</a>
        </p>
      </div>
      </div>
    </div>
    </>
    )}
    </>
  );
}
