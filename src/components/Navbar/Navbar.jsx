import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const handleclick=()=>{
      let dd = document.getElementById("dd");
      if(dd.style.display==='none') dd.style.display='block';
      else dd.style.display='none'
  }

  return (
    <div className='nav-container'>
        <div className='logo'>
            <h1><i style={{color:'black'}} className='bx bx-dumbbell'></i>FitZone</h1>
        </div>
        <div className='routes'>
            <Link to='/' className='Link'>Home</Link>
            <Link to='/exercises' className='Link'>Exercises</Link>
            <div  className='dropdown' >
              <span onClick={handleclick} className='Link' >Utilities<i class='bx bx-chevron-down'></i></span>
                <div id='dd' className="dropdown-list">
                  <Link to='/bmi'>BMI calculator</Link>
                  <Link to='/weight'>Ideal Weight</Link>
                  <Link to='/calorie'>Daily calorie reqirement</Link>
                </div>
            </div>
        </div>
    </div>
  )
}
