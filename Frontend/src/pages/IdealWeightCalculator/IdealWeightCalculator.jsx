import React, { useState } from 'react'
import './IdealWeightCalculator.css'
import Navbar from '../../components/Navbar/Navbar'
import image from '../../assets/image.png'
import { calculatorOptions, fetchData } from '../../utils/fetchData';
import spinner from '../../assets/spinner.gif'


export default function IdealWeightCalculator() {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const handleclick = async () => {
    let frm = document.getElementById("bmi-frm")
    frm.style.display = "none";
    let spn = document.getElementById("spinbmi")
    spn.style.display = "flex";
    let item = await fetchData(`https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&height=${height}`, calculatorOptions);
    setWeight(item.data.Robinson);
    spn.style.display = "none";
    let res = document.getElementById("bmi-result")
    res.style.display = "flex";

  }
  return (
    <div>
      <Navbar />
      <div className='bmi-cont'>
        <div className='bmi-form slide-left' id="bmi-frm">
          <div className='param'>
            <p>Enter your gender: <br />('male' / 'female')</p>
            <input type="text" value={gender} onChange={(evnt) => setGender(evnt.target.value)} />
          </div>
          <div className='param'>
            <p>Enter your height:<br />(in cm) </p>
            <input type="text" value={height} onChange={(evnt) => setHeight(evnt.target.value)} />
          </div>
          <div onClick={handleclick} className='bmi-btn'>
            <p>Submit</p>
          </div>
        </div>
        <div className="result" id='bmi-result'>
          <h1>Ideal weight for your height :  <span>{weight}</span> kgs</h1>
        </div>
        <div className="spinner-bmi" id="spinbmi">
          <img src={spinner} alt="Loading..." />
        </div>
        <div className='bmi-img'>
          <img className='slide-right' src={image} alt="bmi" />
        </div>
      </div>
    </div>
  )
}
