import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import BodyPartList from '../../components/BodyPartList/BodyPartList'

export default function Exercises() {
  return (
    <div>
        <Navbar/>
        <SearchBar/>
        <BodyPartList/>
    </div>
  )
}
