import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import { fetchData,exerciseOptions } from "../../fetchData";

export default function SearchBar({setExercisesToDisplay}) {
  const [search, setSearch] = useState("");
  const handleSearch = async ()=>{
    if(search!=''){
      const exercisesData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      let requiredExercises = exercisesData.filter(
        (item)=>item.name.toLowerCase().includes(search) ||
                item.equipment.toLowerCase().includes(search) ||
                item.target.toLowerCase().includes(search) ||
                item.bodyPart.toLowerCase().includes(search)
        )
        setSearch('');
        setExercisesToDisplay(requiredExercises);
    }
  }

  return (
    <div className="form">
      <h1>
        Search for Exercises, Body Parts,
        <br /> Target Muscles or Equipments
      </h1>
      <div className="search-div">
        <input
          type="search"
          className="search"
          value={search}
          onChange={(evnt)=> setSearch(evnt.target.value.toLowerCase())}
          placeholder="Search"
        />
        <button type="submit" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
