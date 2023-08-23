import './Navbar.css'
import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar() {
  let nav = useNavigate();
  const handleclick = () => {
    let dd = document.getElementById("dd");
    console.log(dd.style.display)
    if (dd.style.display === '') dd.style.display = 'block';
    else dd.style.display = ''
  }
  const handleLogout = () => {
    localStorage.removeItem('token')
    nav('/login')
  }
  useEffect(() => {
    let login = document.getElementById("login");
    let logout = document.getElementById("logout");
    if (localStorage.getItem('token')) {
      login.style.display = 'none';
      logout.style.display = 'block'
    }
    else {
      login.style.display = 'block';
      logout.style.display = 'none'
    }
  }, [])

  return (
    <>
      <div className='nav-container'>
        <div className="logo">
          <h1><i style={{ color: 'black' }} className='bx bx-dumbbell'></i>FitZone</h1>
        </div>
        <ul className="routes">
          <li>
            <Link className='Link' to='/' >Home</Link>
          </li>
          <li >
            <Link className='Link' to='/exercises' >Exercises</Link>
          </li>
          <li className='dropdown'>
            <span className='Link' onClick={handleclick}>Utilities<i className='bx bx-chevron-down'></i></span>
            <div id='dd' className="dropdown-list">
              <Link to='/bmi'>BMI calculator</Link>
              <Link to='/weight'>Ideal Weight</Link>
              <Link to='/calorie'>Daily calorie reqirement</Link>
            </div>
          </li>
          <span onClick={handleLogout} id='logout' style={{ display: "none" }} className='Link'>Logout</span>
          {/* <Link id='profile' className='Link' to='/profile'>Profile&nbsp;<i className='bx bxs-user-account bx-sm'></i></Link> */}
          <Link id='login' className='Link' to='/login' >Login</Link>
        </ul>
      </div>
    </>
  )
}
