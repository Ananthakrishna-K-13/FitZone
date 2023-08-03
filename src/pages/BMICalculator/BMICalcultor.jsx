import React, { useState } from 'react'
import './BMICalculator.css'
import Navbar from '../../components/Navbar/Navbar'
import image from '../../assets/image.png'
import { calculatorOptions, fetchData } from '../../fetchData';
import spinner from '../../assets/spinner.gif'
import 'animate.css'

export default function BMICalcultor() {
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [health, setHealth] = useState('');
  const [healthyRange,setHealthyrRange] = useState('');
  const handleclick=async ()=>{
    let frm=document.getElementById("bmi-frm")
    frm.style.display="none";
    let spn = document.getElementById("spinbmi")
    spn.style.display="flex";
    let item = await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`,calculatorOptions);
    setBmi(item.data.bmi);
    setHealth(item.data.health);
    setHealthyrRange(item.data.healthy_bmi_range);
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
          <div className="result" id='bmi-result'>
                <h1>Your BMI is :  <span>{bmi}</span></h1>
                <h1>Health status :  <span>{health}</span></h1>
                <h1>Healthy BMI Range : <span>{healthyRange}</span></h1>

              </div>
              <div className="spinner-bmi" id="spinbmi">
                <img  src={spinner} alt="Loading..." />
              </div>
          <div className='bmi-img'>
              <img className=' animate__animated animate__fadeInRight' src={image} alt="bmi" />
          </div>
        </div>
    </div>
  )
}
