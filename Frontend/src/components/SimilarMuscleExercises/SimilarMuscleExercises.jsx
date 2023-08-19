import React from 'react'
import './SimilarMuscleExercises.css'
import SimilarCard from '../SimilarCard/SimilarCard';

export default function SimilarMuscleExercises({ exercises }) {
  let display = exercises.slice(0, 5);
  return (
    <div className='similar-container'>
      <h1 className='similar-heading'>Other Exercises which enhances the {exercises[0]?.target}:</h1>
      <div className='similar-card-container'>
        {display.map((element) => {
          return (<SimilarCard key={element.id} element={element} />)
        }
        )}
      </div>
    </div>
  )
}
