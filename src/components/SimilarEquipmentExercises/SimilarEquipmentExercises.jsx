import React from 'react'
import './SimilarEquipmentExercises.css'
import SimilarCard from '../SimilarCard/SimilarCard';

export default function SimilarEquipmentExercises({exercises}) {
    let display = exercises.slice(0,5);
  return (
    <div className='similar-container'>
        <h1 className='similar-heading'>Other Exercises which use {exercises[0]?.equipment}:</h1>
        <div className='similar-card-container'>
        {display.map((element) =>
            {
                return(<SimilarCard element={element}/>)
            }
        )}
        </div>
    </div>
  )
}
