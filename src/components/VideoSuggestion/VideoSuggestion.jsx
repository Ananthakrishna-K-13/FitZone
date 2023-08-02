import React from 'react'
import './VideoSuggestion.css'
import VideoCard from '../VideoCard/VideoCard'

export default function VideoSuggestion({videos}) {
  return (
    <div className='VideoSuggestion-container'>
      <h1>YT vidoes related to the exercise</h1>
      <div className='video-container'>
        {console.log(videos)}
        {videos?.contents?.slice(0,4)?.map((item)=>{
          return(<VideoCard item={item}/>)
        })}
      </div>
    </div>
  )
}
