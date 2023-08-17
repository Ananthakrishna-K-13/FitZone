import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Detail from '../components/Detail/Detail'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { exerciseOptions, fetchData, youtubeOptions } from '../fetchData';
import SimilarMuscleExercises from '../components/SimilarMuscleExercises/SimilarMuscleExercises';
import SimilarBodyPartExercises from '../components/SimilarBodyPartExercises/SimilarBodyPartExercises';
import SimilarEquipmentExercises from '../components/SimilarEquipmentExercises/SimilarEquipmentExercises';
import VideoSuggestion from '../components/VideoSuggestion/VideoSuggestion';
import LoadingBar from 'react-top-loading-bar'

export default function ExerciseDetail() {
  const [detailToDisplay, setDetailToDisplay] = useState({
    "bodyPart": "shoulders",
    "equipment": "smith machine",
    "gifUrl": "https://api.exercisedb.io/image/iJAwG6Fk5PYkPv",
    "id": "0765",
    "name": "smith seated shoulder press",
    "target": "delts"
  }/* {} */)
  const [similarMusclesData, setSimilarMusclesData] = useState( [
    {
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://api.exercisedb.io/image/HjOliWF24iSTZi",
      "id": "3420",
      "name": "v-sit on floor",
      "target": "abs"
    },
    {
      "bodyPart": "waist",
      "equipment": "body weight",
      "gifUrl": "https://api.exercisedb.io/image/XicKnQ81bZfTVj",
      "id": "0826",
      "name": "vertical leg raise (on parallel bars)",
      "target": "abs"
    },
    {
      "bodyPart": "waist",
      "equipment": "weighted",
      "gifUrl": "https://api.exercisedb.io/image/dJQeFvEzFPHSGg",
      "id": "0832",
      "name": "weighted crunch",
      "target": "abs"
    },
    {
      "bodyPart": "waist",
      "equipment": "weighted",
      "gifUrl": "https://api.exercisedb.io/image/JCkgaDC4q8hUHV",
      "id": "3670",
      "name": "weighted decline sit-up",
      "target": "abs"
    },
    {
      "bodyPart": "waist",
      "equipment": "weighted",
      "gifUrl": "https://api.exercisedb.io/image/8YI1XI1NR1m16t",
      "id": "2135",
      "name": "weighted front plank",
      "target": "abs"
    }
  ]/* [] */ )
  const [similarBodyPartData, setSimilarBodyPartData] = useState([ {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://api.exercisedb.io/image/HjOliWF24iSTZi",
    "id": "3420",
    "name": "v-sit on floor",
    "target": "abs"
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://api.exercisedb.io/image/XicKnQ81bZfTVj",
    "id": "0826",
    "name": "vertical leg raise (on parallel bars)",
    "target": "abs"
  },
  {
    "bodyPart": "waist",
    "equipment": "weighted",
    "gifUrl": "https://api.exercisedb.io/image/dJQeFvEzFPHSGg",
    "id": "0832",
    "name": "weighted crunch",
    "target": "abs"
  },
  {
    "bodyPart": "waist",
    "equipment": "weighted",
    "gifUrl": "https://api.exercisedb.io/image/JCkgaDC4q8hUHV",
    "id": "3670",
    "name": "weighted decline sit-up",
    "target": "abs"
  },
  {
    "bodyPart": "waist",
    "equipment": "weighted",
    "gifUrl": "https://api.exercisedb.io/image/8YI1XI1NR1m16t",
    "id": "2135",
    "name": "weighted front plank",
    "target": "abs"
  }]/* [] */)
  const [similarEquipmentData, setSimilarEquipmentData] = useState( [{
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://api.exercisedb.io/image/HjOliWF24iSTZi",
    "id": "3420",
    "name": "v-sit on floor",
    "target": "abs"
  },
  {
    "bodyPart": "waist",
    "equipment": "body weight",
    "gifUrl": "https://api.exercisedb.io/image/XicKnQ81bZfTVj",
    "id": "0826",
    "name": "vertical leg raise (on parallel bars)",
    "target": "abs"
  },
  {
    "bodyPart": "waist",
    "equipment": "weighted",
    "gifUrl": "https://api.exercisedb.io/image/dJQeFvEzFPHSGg",
    "id": "0832",
    "name": "weighted crunch",
    "target": "abs"
  },
  {
    "bodyPart": "waist",
    "equipment": "weighted",
    "gifUrl": "https://api.exercisedb.io/image/JCkgaDC4q8hUHV",
    "id": "3670",
    "name": "weighted decline sit-up",
    "target": "abs"
  },
  {
    "bodyPart": "waist",
    "equipment": "weighted",
    "gifUrl": "https://api.exercisedb.io/image/8YI1XI1NR1m16t",
    "id": "2135",
    "name": "weighted front plank",
    "target": "abs"
  }]/* [] */)
  const [exerciseVideos, setExerciseVideos] = useState( {
    "contents": [
      {
        "video": {
          "channelId": "UC6MSzdTnry2uynOWIB-tSDg",
          "channelName": "Daisy Keech",
          "description": "Hi Peaches!! These are some of my favorite ab exercises I've put into a quick workout that you can do 2-3 rounds of, if one round ...",
          "lengthText": "9:36",
          "publishedTimeText": "2 years ago",
          "thumbnails": [
            {
              "height": 202,
              "url": "https://i.ytimg.com/vi/779jI4Rwl5c/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCvNO9ltuu4tp7cbvDvkXpMM6mmLw",
              "width": 360
            },
            {
              "height": 404,
              "url": "https://i.ytimg.com/vi/779jI4Rwl5c/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDzNzV9qCdQ-JliGPAtRRk8MpzeQw",
              "width": 720
            }
          ],
          "title": "Quarantine Abs | My 8 Minute Go-To Cinch Waist Workout",
          "videoId": "779jI4Rwl5c",
          "viewCountText": "38,119,999 views"
        }
      },
      {
        "video": {
          "channelId": "UCaBqRxHEMomgFU-AkSfodCw",
          "channelName": "CHRIS HERIA",
          "description": "Follow along with Chris Heria as he shows you a workout that you can do Everyday in 2023 For 6 Pack ",
          "lengthText": "12:08",
          "publishedTimeText": "7 months ago",
          "thumbnails": [
            {
              "height": 270,
              "url": "https://i.ytimg.com/vi/yVQF_Vr_XCE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDFlBxkzIwh-YFCsAFSaOC-K6xw7A",
              "width": 480
            }
          ],
          "title": "Do This Everyday in 2023 For 6 Pack Abs",
          "videoId": "yVQF_Vr_XCE",
          "viewCountText": "3,212,777 views"
        }
      },
      {
        "video": {
          "channelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
          "channelName": "MadFit",
          "description": "#HomeWorkout #AbsWorkout #fitness DONATE TO LEARNING FOR HUMANITY: https://learningforhumanity.org/madfit/ ...",
          "lengthText": "12:12",
          "publishedTimeText": "1 month ago",
          "thumbnails": [
            {
              "height": 202,
              "url": "https://i.ytimg.com/vi/JNaDuyTJaUU/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCGae13cr6hZdfXVouEJXKZuxZXwA",
              "width": 360
            },
            {
              "height": 404,
              "url": "https://i.ytimg.com/vi/JNaDuyTJaUU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDkrFfvUNcCXEc2g8wv1zaPGGMOUQ",
              "width": 720
            }
          ],
          "title": "10 MIN INTENSE ABS (No Equipment) - Total Killer Core",
          "videoId": "JNaDuyTJaUU",
          "viewCountText": "442,109 views"
        }
      },
      {
        "video": {
          "channelId": "UCOpsZxrmeDARilha1uq4slA",
          "channelName": "Heather Robertson",
          "description": "This quick 10 minute ",
          "lengthText": "12:22",
          "publishedTimeText": "1 year ago",
          "thumbnails": [
            {
              "height": 202,
              "url": "https://i.ytimg.com/vi/31O70ckvY3c/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDD8WZ5SLiSkVaL4a1HF9PY-VZ7eQ",
              "width": 360
            },
            {
              "height": 404,
              "url": "https://i.ytimg.com/vi/31O70ckvY3c/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAj0-rTOIOOo8NaoXv6F-ewfIt3hQ",
              "width": 720
            }
          ],
          "title": "10 Minute ABS Workout",
          "videoId": "31O70ckvY3c",
          "viewCountText": "1,293,820 views"
        }
      },
      {
        "video": {
          "channelId": "UCg8LTugCdsOLuwtd9n0d8kA",
          "channelName": "Rowan Row",
          "description": "THE BEST ",
          "lengthText": "13:53",
          "publishedTimeText": "2 years ago",
          "thumbnails": [
            {
              "height": 202,
              "url": "https://i.ytimg.com/vi/EPXbWEFQ008/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCRZxPxo5jTew4j7dtXT2VDVDsi8w",
              "width": 360
            },
            {
              "height": 404,
              "url": "https://i.ytimg.com/vi/EPXbWEFQ008/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAv58wp9gQPydbKEapY2MPQuXzNwg",
              "width": 720
            }
          ],
          "title": "THE BEST ABS WORKOUT | Get ABS in 3 WEEKS | Rowan Row",
          "videoId": "EPXbWEFQ008",
          "viewCountText": "3,498,058 views"
        }
      }
    ],
    "estimatedResults": "39288565",
    "next": "EpYDEgNhYnMajgNTQlNDQVF0VVR6RnJWamsxTjFwa1JZSUJDMU14UjFaeVdVaEVNR1J2Z2dFTGNESjZWREpJUVZKdWRHdUNBUXRQU0ZOWk5FbzRkMTl3VllJQkN6SndURlF0YjJ4blZVcHpnZ0VMYUhocVMxcGpUMVF4TjBXQ0FRdFBaazFMTVhJME1VcDZNSUlCQzBWbVNqUmhRbDlsYmxaRmdnRUxXR2RKWDNBNFlrdG5OemlDQVF0V2VHaE9ibTVZWW5CR1NZSUJDMlZGU2twbFZFUm9XWEZGZ2dFTE56YzVha2swVW5kc05XT0NBUXQ1VmxGR1gxWnlYMWhEUllJQkMwcE9ZVVIxZVZSS1lWVlZnZ0VMTXpGUE56QmphM1paTTJPQ0FRdEZVRmhpVjBWR1VUQXdPSUlCQ3prMlgzcFJaM2hpUTBwcmdnRUxUWEpXTkhaRGIzUnBiekNDQVF0TlVscG1aVVl5ZVZKc1VZSUJDMk5pUTNRMk9WaEJWVXRCc2dFR0NnUUlHQkFDNmdFQ0NBSSUzRBiB4OgYIgtzZWFyY2gtZmVlZA%3D%3D"
  } /* {"contents":[]} */)
  const [progress, setProgress] = useState(0)

  const {exerciseId} = useParams();
   /* useEffect(() => {
    const fetchDetailData = async ()=>{
      console.log(exerciseId)
      setProgress(10);
      let exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`, exerciseOptions);
      setDetailToDisplay(exerciseDetailData);
      setProgress(30)
      let videosData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name.split(' ').join('%20')}%20exercise`,youtubeOptions);
      setExerciseVideos(videosData);
      setProgress(50)
      let MusclesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
      setSimilarMusclesData(MusclesData);
      setProgress(70)
      let BodyPartData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${exerciseDetailData.bodyPart}`,exerciseOptions);
      setSimilarBodyPartData(BodyPartData);
      setProgress(100)
      let EquipmentData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setSimilarEquipmentData(EquipmentData);
    }
    fetchDetailData();
  }, [exerciseId])  */
  /* Commented to save API free use */
  
  return (
    <div>
      <Navbar/>
      <LoadingBar color='#f11946' height={6} progress={progress}/>
      <Detail detailToDisplay={detailToDisplay}/>
      <VideoSuggestion videos={exerciseVideos}/>
      <SimilarMuscleExercises exercises={similarMusclesData}/>
      <SimilarBodyPartExercises exercises={similarBodyPartData}/>
      <SimilarEquipmentExercises exercises={similarEquipmentData}/>
    </div>
  )
}
