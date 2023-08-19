import React from 'react'
import './VideoSuggestion.css'
import VideoCard from '../VideoCard/VideoCard'

export default function VideoSuggestion({ videos }) {
  return (
    <div className='VideoSuggestion-container'>
      <h1>YT vidoes related to this exercise:</h1>
      <div className='video-container'>
        {videos?.contents?.slice(0, 4)?.map((item) => {
          return (<VideoCard key={item.video.videoId} item={item} />)
        })}
      </div>
    </div>
  )
}
