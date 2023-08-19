import React from 'react'
import './SimilarBodyPartExercises.css'
import SimilarCard from '../SimilarCard/SimilarCard';

export default function SimilarBodyPartExercises({ exercises }) {
  let display = exercises.slice(0, 5);
  return (
    <div className='similar-container'>
      <h1 className='similar-heading'>Other Exrecises which target {exercises[0]?.bodyPart}:</h1>
      <div className='similar-card-container'>
        {display.map((element) => {
          return (<SimilarCard key={element.id} element={element} />)
        }
        )}
      </div>
    </div>
  )
}
