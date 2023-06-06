import React from "react";
import ecom from "../../images/ecom.png";
import "./styles.css";

export default function Modal({selectedProject}) {
  const project = {
    title: "e-com for å handle",
    task: "Create an E-commerce site using an API that's been delivered by the school. The webpage should follow certain criterias such as haveing a homepage, individual product-page, cart page, checkout success page. Use React Router for moving between the pages",
    description: "Delivery from when I learned about Javascript Frameworks",
    links: {
      github: "https://github.com/DanielPyb/JavaScript-Frameworks-ca",
      livesite: "https://gentle-moonbeam-0d36cb.netlify.app/",
    },
    tools: ["React", "Bootstrap", "Figma"],
    image: ecom,
    created: "Apr 02 2023",
    id: 3,
  };
  return (
    <>
    <div className="modal-overlay"></div>
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
  );
}
