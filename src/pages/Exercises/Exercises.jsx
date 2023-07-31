import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import ExerciseList from '../../components/ExerciseList/ExerciseList'
import { useState } from 'react'

export default function Exercises() {
  const [exercisesToDisplay, setExercisesToDisplay] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [targetMuscle, setTargetMuscle] = useState('all');
  const [equipment, setEquipment] = useState('all');

  return (
    <div>
        <Navbar/>
        <SearchBar setExercisesToDisplay={setExercisesToDisplay} />
        <ExerciseList bodyPart={bodyPart} setBodyPart={setBodyPart} targetMuscle={targetMuscle} setTargetMuscle={setTargetMuscle} equipment={equipment} setEquipment={setEquipment} exercisesToDisplay={exercisesToDisplay} setExercisesToDisplay={setExercisesToDisplay} />
    </div>
  )
}
