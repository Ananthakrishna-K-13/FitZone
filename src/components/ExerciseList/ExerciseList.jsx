import React, { useEffect, useState } from 'react'
import './ExerciseList.css'
import { exerciseOptions, fetchData } from '../../fetchData'

export default function ExerciseList({bodyPart, setBodyPart, targetMuscle, setTargetMuscle, equipment, setEquipment, exercisesToDisplay}) {
    const [bodyParts, setBodyParts] = useState([])
    const [targetMuscles, setTargetMuscles] = useState([])
    const [equipments, setEquipments] = useState([])
    /* useEffect(() => {
        const fetchFilterData = async() =>{
            let dataBodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
            let dataTargetMuscles = await fetchData('https://exercisedb.p.rapidapi.com/exercises/targetList',exerciseOptions);
            let dataEquipment = await fetchData('https://exercisedb.p.rapidapi.com/exercises/equipmentList',exerciseOptions);
            setBodyParts([...dataBodyParts])
            setTargetMuscles([...dataTargetMuscles])
            setEquipments([...dataEquipment])
        }
        fetchFilterData();
    }, []) */
  return (
    <div className='outer-container'>
        <div className='filterbar'>
            <div className="filter-container">
                <h1>Body Parts</h1>
                <ul>
                {      
                    bodyParts.map((item) =>{
                        let result = item.split('').map((char, index) =>  index === 0 ? char.toUpperCase() : char).join('');
                    return(<li onClick={()=>{
                         setBodyPart({item});
                         setEquipment('all');
                         setTargetMuscle('all');
                    }}
                     key={item.id || item}>{result}</li>)
                })}
                </ul>
            </div>
            <div className="filter-container">
                <h1>Target Muscles</h1>
                <ul>
                {      
                    targetMuscles.map((item) =>{
                        let result = item.split('').map((char, index) =>  index === 0 ? char.toUpperCase() : char).join('');
                    return(<li onClick={()=>{
                        setEquipment('all');
                        setTargetMuscle({item});
                        setBodyPart('all');
                    }} key={item.id || item}>{result}</li>)
                })}
                </ul>
            </div>
            <div className="filter-container">
                <h1>Equipment</h1>
                <ul>
                {      
                    equipments.map((item) =>{
                        let result = item.split('').map((char, index) =>  index === 0 ? char.toUpperCase() : char).join('');
                    return(<li  onClick={()=>{
                        setEquipment({item});
                        setTargetMuscle('all');
                        setBodyPart('all');
                    }} key={item.id || item}>{result}</li>)
                })}
                </ul>
            </div>
        </div>
        <div className='itemlist'>
            <h1>Search Results</h1>
            
        </div>
    </div>
  )
}
