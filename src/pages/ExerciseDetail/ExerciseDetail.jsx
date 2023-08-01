import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Detail from '../../components/Detail/Detail'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { exerciseOptions, fetchData } from '../../fetchData';
import SimilarMuscleExercises from '../../components/SimilarMuscleExercises/SimilarMuscleExercises';
import SimilarBodyPartExercises from '../../components/SimilarBodyPartExercises/SimilarBodyPartExercises';
import SimilarEquipmentExercises from '../../components/SimilarEquipmentExercises/SimilarEquipmentExercises';
import VideoSuggestion from '../../components/VideoSuggestion/VideoSuggestion';

export default function ExerciseDetail() {
  const [detailToDisplay, setDetailToDisplay] = useState({
    "bodyPart": "shoulders",
    "equipment": "smith machine",
    "gifUrl": "https://api.exercisedb.io/image/iJAwG6Fk5PYkPv",
    "id": "0765",
    "name": "smith seated shoulder press",
    "target": "delts"
  })
  const {exerciseId} = useParams();
  /* useEffect(() => {
    const fetchDetailData = async ()=>{
      let exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`, exerciseOptions);
    }
  }, [exerciseId]) */
  
  return (
    <div>
      <Navbar/>
      <Detail detailToDisplay={detailToDisplay}/>
      <SimilarMuscleExercises/>
      <SimilarBodyPartExercises/>
      <SimilarEquipmentExercises/>
      <VideoSuggestion/> 
    </div>
  )
}
