import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Detail from '../components/Detail/Detail'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import SimilarMuscleExercises from '../components/SimilarMuscleExercises/SimilarMuscleExercises';
import SimilarBodyPartExercises from '../components/SimilarBodyPartExercises/SimilarBodyPartExercises';
import SimilarEquipmentExercises from '../components/SimilarEquipmentExercises/SimilarEquipmentExercises';
import VideoSuggestion from '../components/VideoSuggestion/VideoSuggestion';
import LoadingBar from 'react-top-loading-bar'

export default function ExerciseDetail() {
  const [detailToDisplay, setDetailToDisplay] = useState({})
  const [similarMusclesData, setSimilarMusclesData] = useState([])
  const [similarBodyPartData, setSimilarBodyPartData] = useState([])
  const [similarEquipmentData, setSimilarEquipmentData] = useState([])
  const [exerciseVideos, setExerciseVideos] = useState({ "contents": [] })
  const [progress, setProgress] = useState(0)
  const nav = useNavigate()

  const { exerciseId } = useParams();
  useEffect(() => {
    const fetchDetailData = async () => {
      if (!localStorage.getItem('token')) {
        nav('/login')
        return
      }
      setProgress(10);
      let exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`, exerciseOptions);
      setDetailToDisplay(exerciseDetailData);
      setProgress(30)
      let videosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name.split(' ').join('%20')}%20exercise`, youtubeOptions);
      setExerciseVideos(videosData);
      setProgress(50)
      let MusclesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setSimilarMusclesData(MusclesData);
      setProgress(70)
      let BodyPartData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exerciseDetailData.bodyPart}`, exerciseOptions);
      setSimilarBodyPartData(BodyPartData);
      setProgress(100)
      let EquipmentData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setSimilarEquipmentData(EquipmentData);
    }
    fetchDetailData();
    // eslint-disable-next-line
  }, [exerciseId])

  return (
    <div>
      <Navbar />
      <LoadingBar color='#f11946' height={6} progress={progress} />
      <Detail detailToDisplay={detailToDisplay} />
      <VideoSuggestion videos={exerciseVideos} />
      <SimilarMuscleExercises exercises={similarMusclesData} />
      <SimilarBodyPartExercises exercises={similarBodyPartData} />
      <SimilarEquipmentExercises exercises={similarEquipmentData} />
    </div>
  )
}
