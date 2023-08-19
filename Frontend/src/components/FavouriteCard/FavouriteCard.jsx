import React from 'react'
import './FavouriteCard.css'
import { Link } from 'react-router-dom'

const FavouriteCard = (props) => {
  const capfirst = (string) => {
    string = string.charAt(0).toUpperCase() + string.slice(1);
    return string
  }
  return (
    <Link to={`/exercise/${props.element.exercise}`} className='favcard-container'>
      <div className="fav-title">
        <h1>{capfirst(props.element.name)}</h1>
        <i className='bx bx-link-external bx-sm'></i>
      </div>
      <div className="fav-info">
        <h1>{capfirst(props.element.target)} | {capfirst(props.element.bodyPart)} | {capfirst(props.element.equipment)} </h1>
      </div>
    </Link>
  )
}

export default FavouriteCard