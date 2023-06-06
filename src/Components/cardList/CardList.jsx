import React from 'react'
import projectList from '../../list/List'
import Card from '../cards/Card'
import "./styles.css"


export default function CardList() {
  return (
    <div className='card-list'>
        {projectList.map(project => { 
            return <Card project={project} />
        })}
    </div>
  )
}
