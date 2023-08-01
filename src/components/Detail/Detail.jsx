import React from 'react'
import './Detail.css'

export default function Detail({detailToDisplay}) {
  const capfirst=(string)=>{
    string = string.charAt(0).toUpperCase()+string.slice(1);
    return string
  }
  let bodypart = capfirst(detailToDisplay.bodyPart)
  let targetmuscle = capfirst(detailToDisplay.target)
  let equip = capfirst(detailToDisplay.equipment)
  return (
    <div className='detail-container'>
        <img src={detailToDisplay.gifUrl} alt="url" />
        <div className='detail-text'>
            <h1>{capfirst(detailToDisplay.name)}</h1>
            <p>This exercise targets the <span>{bodypart}</span>. It enhances the <span>{targetmuscle}</span>, and utilizes <span>{equip}</span> for optimal effectiveness.</p>
        </div>
    </div>
  )
}
