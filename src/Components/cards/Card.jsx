import React from 'react'
import "./card.css"


export default function Card({project}) {
  console.log(project)
    return (
    <div className='card'>
        <h2 className='card-title'>{project.title}</h2>
        <img src={project.image} alt="holidaze" className='card-image'></img>
    </div>
  )
}
