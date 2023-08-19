import React from 'react'
import './VideoCard.css'

export default function VideoCard({ item }) {
  return (
    <a target="_blank" rel="noreferrer" className='vcard-cont' href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>
      <img src={item.video.thumbnails[0].url} alt="" />
      <h1>{item.video.title}</h1>
      <span>{item.video.lengthText}</span>
      <p>{item.video.channelName}</p>
      <p>{item.video.publishedTimeText} | {item.video.viewCountText}</p>
    </a>

  )
}
