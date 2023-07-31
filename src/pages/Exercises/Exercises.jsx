import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import ExerciseList from '../../components/ExerciseList/ExerciseList'

export default function Exercises() {
  return (
    <div>
        <Navbar/>
        <SearchBar/>
        <ExerciseList/>
    </div>
  )
}
