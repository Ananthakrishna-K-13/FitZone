import React from 'react'
import './VideoSuggestion.css'
import VideoCard from '../VideoCard/VideoCard'

export default function VideoSuggestion({videos}) {
  return (
    <div>
      <h1>YT vidoes related to the exercise</h1>
      <div className='video-continer'>
      </div>
    </div>
  )
}
