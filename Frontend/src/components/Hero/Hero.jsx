import './Hero.css';
import React from 'react';
import HeroImage from '../../assets/hero.png'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <>
    <div className='container'>
        <div className='image'>
            <img src={HeroImage} alt="Gym-man" />
        </div>
        <div className='text'>
              <h1><TypeAnimation sequence={["Workout.",2000,"PowerUp.",2000,"Improve.",2000,"Progress.",2000]} speed={5} repeat={Infinity} /></h1>
              <p>By exploring highly effective exercises without the need for a trainer.</p>
              <div className='explore-button'>
                <Link className='btn-txt' to='/exercises'>Explore Now   <i class='bx bx-right-arrow' ></i></Link>
              </div>
        </div>    
    </div>
    <div className='subtext'>
    <span>#STRONG</span>
  </div>
  </>
  )
}
