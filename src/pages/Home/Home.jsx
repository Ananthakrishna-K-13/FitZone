import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'

export default function Home() {
  return (
    <div className='top-bar'>
        <Navbar/>
        <Hero/>
    </div>
  )
}
