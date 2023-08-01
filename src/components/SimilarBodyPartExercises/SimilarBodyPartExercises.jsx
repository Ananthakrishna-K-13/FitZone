import React from 'react'
import './SimilarBodyPartExercises.css'
import SimilarCard from '../SimilarCard/SimilarCard';

export default function SimilarBodyPartExercises({exercises}) {
    let display = exercises.slice(0,5);
  return (
    <div className='similar-container'>
        <h1 className='similar-heading'>Exercises which use the same equipment:</h1>
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
