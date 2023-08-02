import './Hero.css';
import React from 'react';
import HeroImage from '../../assets/hero.png'
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
    <div className='container'>
        <div className='image'>
            <img src={HeroImage} alt="Gym-man" />
        </div>
        <div className='text'>
              <h1>Sweat, Smile </h1>
              <h1 className='bottom-text'> and Repeat</h1>
              <p>Explore highly effective exercises without the need for a trainer.</p>
              <div className='explore-button'>
                <Link className='btn-txt' to='/exercises'>Explore Now   <i class='bx bx-right-arrow' ></i></Link>
              </div>
        </div>    
    </div>
    <div className='subtext'>
    <span>#WORKOUT</span>
  </div>
  </>
  )
}
