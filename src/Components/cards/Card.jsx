import React, { useState } from "react";
import "./card.css";
import Modal from "../modal/Modal";

export default function Card({ project }) {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(!showModal);
  }
  return (
    <>
      {showModal && <Modal project={project} toggleModal={toggleModal} />}
      <div className="card" onClick={toggleModal}>
        <h2 className="card-title">{project.title}</h2>
        <img src={project.image} alt="holidaze" className="card-image"></img>
      </div>
    </>
  );
}
