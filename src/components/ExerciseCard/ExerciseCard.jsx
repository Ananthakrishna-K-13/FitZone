import React from 'react'
import './ExerciseCard.css'
import { Link } from 'react-router-dom'

export default function ExerciseCard({element}){
    const capfirst=(string)=>{
        string = string.charAt(0).toUpperCase()+string.slice(1);
        return string
}
  return (
    <Link to={`/exercise/${element.id}`} className='container-card'>
        <img src={element.gifUrl} alt="url" />
        <h1>{element.name.toUpperCase()}</h1>
        <p>Body Part : {capfirst(element.bodyPart)}</p>
        <p>Target Muscle : {capfirst(element.target)}</p>
        <p>Equipment : {capfirst(element.equipment)}</p>
    </Link>
  )
}
