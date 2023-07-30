import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <div className='nav-container'>
        <div className='logo'>
            <h1><i style={{color:'black'}} className='bx bx-dumbbell'></i>HomeFit</h1>
        </div>
        <div className='routes'>
            <Link to='/' className='Link'>Home</Link>
            <Link to='/exercises' className='Link'>Exercises</Link>
        </div>
    </div>
  )
}
