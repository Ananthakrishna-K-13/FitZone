import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from '../components/SearchBar/SearchBar'
import ExerciseList from '../components/ExerciseList/ExerciseList'
import { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

export default function Exercises() {
  const [exercisesToDisplay, setExercisesToDisplay] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [targetMuscle, setTargetMuscle] = useState('all');
  const [equipment, setEquipment] = useState('all');
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Navbar />
      <LoadingBar color='#f11946' height={6} progress={progress} />
      <SearchBar setExercisesToDisplay={setExercisesToDisplay} />
      <ExerciseList bodyPart={bodyPart} setBodyPart={setBodyPart} targetMuscle={targetMuscle} setTargetMuscle={setTargetMuscle} equipment={equipment} setEquipment={setEquipment} exercisesToDisplay={exercisesToDisplay} setExercisesToDisplay={setExercisesToDisplay} setProgress={setProgress} />
    </div>
  )
}
