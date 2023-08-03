import React, { useState } from 'react'
import './DCRCalculator.css'
import Navbar from '../../components/Navbar/Navbar'
import image from '../../assets/image.png'
import { calculatorOptions, fetchData } from '../../fetchData';
import spinner from '../../assets/spinner.gif'
import 'animate.css'

export default function DCRCalculator() {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight,setWeight] = useState('');
  const [age, setAge] = useState('');
  const [maintainWeight, setMaintainWeight] = useState('');
  const [loseWeight, setLoseWeight] = useState('');
  const [gainWeight, setGainWeight] = useState('');
  const handleclick= async ()=>{
    let frm=document.getElementById("bmi-frm")
    frm.style.display="none";
    let spn = document.getElementById("spinbmi")
    spn.style.display="flex";
    let item = await fetchData(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=level_2`,calculatorOptions)
    setMaintainWeight(item.data.goals["maintain weight"])
    setGainWeight(item.data.goals["Weight gain"].calory)
    setLoseWeight(item.data.goals["Weight loss"].calory)
    spn.style.display="none"
    let res=document.getElementById("bmi-result")
    res.style.display="flex";
  }
  return (
    <div>
        <Navbar/>
        <div className='bmi-cont'>
          <div className='bmi-form animate__animated animate__fadeInLeft' id="bmi-frm">
              <div className='param'>
                <p>Enter your age:</p>
                <input type="text" value={age} onChange={(evnt)=>setAge(evnt.target.value)}/>
              </div>
              <div className='param'>
                <p>Enter your gender: <br />('male' / 'female')</p>
                <input type="text" value={gender} onChange={(evnt)=>setGender(evnt.target.value)}/>
              </div>
              <div className='param'>
                <p>Enter your height:<br />(in cm) </p>
                <input type="text" value={height} onChange={(evnt)=>setHeight(evnt.target.value)} />
              </div>
              <div className='param'>
                <p>Enter your weight: <br />(in kgs)</p>
                <input type="text" value={weight} onChange={(evnt)=>setWeight(evnt.target.value)}/>
              </div>
              <div onClick={handleclick} className='bmi-btn'>
                <p>Submit</p>
              </div>
          </div>
          <div className="result-cal" id='bmi-result'>
                <h1>To maintain your current weight, <br /> you require <span>{maintainWeight}</span> calories</h1>
                <h1>To lose weight by 0.5Kg, <br /> you require <span>{loseWeight}</span> calories</h1>
                <h1>To gain weight by 0.5Kg, <br /> you require <span>{gainWeight}</span> calories</h1>
            </div>
            <div className="spinner-bmi" id="spinbmi">
                <img src={spinner} alt="Loading..." />
              </div>
           <div className='bmi-img'>
              <img src={image} className=' animate__animated animate__fadeInRight' alt="bmi" />
          </div>
        </div>
    </div>
  )
}
