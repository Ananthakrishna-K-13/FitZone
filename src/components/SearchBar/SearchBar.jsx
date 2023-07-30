import React from 'react'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <div className='form'>
        <h1>Search for Exercises, Body Parts,<br/> Target Muscles or Equipments</h1>
        <div className='search-div'>
        <input type="search" className='search' placeholder='Search Exercises' />
        <button type="submit">Search</button>
        </div>
    </div>
  )
}
