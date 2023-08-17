import React, { useEffect, useState } from 'react'
import './ExerciseList.css'
import { exerciseOptions, fetchData } from '../../fetchData'
import ExerciseCard from '../ExerciseCard/ExerciseCard'
import { useNavigate } from 'react-router-dom'

export default function ExerciseList({ bodyPart, setBodyPart, targetMuscle, setTargetMuscle, equipment, setEquipment, exercisesToDisplay, setExercisesToDisplay, setProgress }) {
    const [bodyParts, setBodyParts] = useState([])
    const [targetMuscles, setTargetMuscles] = useState([])
    const [equipments, setEquipments] = useState([])
    let nav = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
        const fetchFilterData = async () => {
            setProgress(10);
            let dataBodyParts = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setProgress(40)
            let dataTargetMuscles = await fetchData('https://exercisedb.p.rapidapi.com/exercises/targetList', exerciseOptions);
            setProgress(70)
            let dataEquipment = await fetchData('https://exercisedb.p.rapidapi.com/exercises/equipmentList', exerciseOptions);
            setBodyParts([...dataBodyParts])
            setTargetMuscles([...dataTargetMuscles])
            setEquipments([...dataEquipment])
            setProgress(100)
        }
        fetchFilterData();
        }
        else{
            nav('/login')
        }
    }, [])
    useEffect(() => {
        setExercisesToDisplay([])
        setProgress(10);
        const fetchDataToShow = async () => {
            let dataToShow = [];
            setProgress(50)
            if (bodyPart !== 'all') dataToShow = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart.item}`, exerciseOptions);
            else if (targetMuscle !== 'all') dataToShow = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${targetMuscle.item}`,
                exerciseOptions);
            else if (equipment !== 'all') dataToShow = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment.item}`, exerciseOptions);
            else dataToShow = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            setProgress(100)
            setExercisesToDisplay(dataToShow);
        }
        fetchDataToShow();
        setProgress(100)
    }, [bodyPart, targetMuscle, equipment])

    return (
        <div className='outer-container'>
            <div className='filterbar'>
                <div className="filter-container">
                    <h1>Body Parts</h1>
                    <ul>
                        {
                            bodyParts.map((item) => {
                                let result = item.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('');
                                return (<li onClick={() => {
                                    setBodyPart({ item });
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
                            targetMuscles.map((item) => {
                                let result = item.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('');
                                return (<li onClick={() => {
                                    setEquipment('all');
                                    setTargetMuscle({ item });
                                    setBodyPart('all');
                                }} key={item.id || item}>{result}</li>)
                            })}
                    </ul>
                </div>
                <div className="filter-container">
                    <h1>Equipment</h1>
                    <ul>
                        {
                            equipments.map((item) => {
                                let result = item.split('').map((char, index) => index === 0 ? char.toUpperCase() : char).join('');
                                return (<li onClick={() => {
                                    setEquipment({ item });
                                    setTargetMuscle('all');
                                    setBodyPart('all');
                                }} key={item.id || item}>{result}</li>)
                            })}
                    </ul>
                </div>
            </div>
            <div className='itemlist'>
                <h1>Results:</h1>
                <div className='card-container'>
                    {
                        exercisesToDisplay.map((element) => {
                            return (
                                <ExerciseCard element={element} key={element.id} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
