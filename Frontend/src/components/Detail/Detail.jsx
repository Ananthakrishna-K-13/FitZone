import React, { useEffect } from 'react'
import './Detail.css'

export default function Detail({detailToDisplay}) { 
  useEffect(() => {
    let addbtn = document.getElementById('addbtn')
    let removebtn = document.getElementById('removebtn')
    const buttonshow = async()=>{
      let response = await fetch('http://localhost:5000/api/favs/isfav',{
      method:"POST",
      headers:{
        "content-type":"application/json",
        "authtoken": localStorage.getItem('token')
      },
      body:JSON.stringify({
        'exercise': detailToDisplay.id
      })
    })
    console.log(detailToDisplay.id)
    response = await response.json()
    console.log(response.isfav)
    if(response.isfav){
      addbtn.style.display="none";
    }
    else{
      removebtn.style.display="none"
    }
  }
  buttonshow()
  }, [])
  
  const capfirst=(string)=>{
    string = string?.charAt(0).toUpperCase()+string?.slice(1);
    return string
  }
  let bodypart = capfirst(detailToDisplay.bodyPart)
  let targetmuscle = capfirst(detailToDisplay.target)
  let equip = capfirst(detailToDisplay.equipment)

  const handleAddClick = async()=>{
    let addbtn = document.getElementById('addbtn')
    let removebtn = document.getElementById('removebtn')
    let response = await fetch('http://localhost:5000/api/favs/addfav',{
      method:"POST",
      headers:{
        "content-type":"application/json",
        "authtoken": localStorage.getItem('token')
      },
      body:JSON.stringify({
        'exercise': detailToDisplay.id,
        "name":detailToDisplay.name,
        "equipment":detailToDisplay.equipment,
        "bodyPart":detailToDisplay.bodyPart,
        "target":detailToDisplay.target
      })
    })
    alert("Added to favourites")
    addbtn.style.display="none"
    removebtn.style.display="block"
  }

  const handleRemoveClick = async ()=>{
    let addbtn = document.getElementById('addbtn')
    let removebtn = document.getElementById('removebtn')
    let response = await fetch('http://localhost:5000/api/favs/removefav',{
      method:"DELETE",
      headers:{
        "content-type":"application/json",
        "authtoken": localStorage.getItem('token')
      },
      body:JSON.stringify({
        'exercise': detailToDisplay.id
      })
    })
    alert("Removed from favourites")
    addbtn.style.display="block"
    removebtn.style.display="none"
  }

  return (
    <div className='detail-container'>
        <img src={detailToDisplay.gifUrl} alt="url" />
        <div className='detail-text'>
            <h1>{capfirst(detailToDisplay.name)}</h1>
            <p>This exercise targets the <span>{bodypart}</span>. It enhances the <span>{targetmuscle}</span>, and utilizes <span>{equip}</span> for optimal effectiveness.</p>
            <p className='instruct'>Scroll below for similar exercises and more information.</p>
            <div className='detail-buttons'>
              <button onClick={handleAddClick} id='addbtn'>Add to favourites</button>
              <button onClick={handleRemoveClick} id='removebtn'>Remove from favourites</button>
            </div>
            
        </div>
    </div>
  )
}
