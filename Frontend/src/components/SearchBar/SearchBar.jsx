import React from "react";
import "./SearchBar.css";
import { useState } from "react";
import { fetchData,exerciseOptions } from "../../fetchData";

export default function SearchBar({setExercisesToDisplay}) {
  const [search, setSearch] = useState("");
  const handleSearch = async ()=>{
    if(search!==''){
      setExercisesToDisplay([]);
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
        Discover over 1300 exercises
        <br /> and explore your fitness potential.
      </h1>
      <div className="search-div">
        <input
          type="search"
          className="search"
          value={search}
          onChange={(evnt)=> setSearch(evnt.target.value.toLowerCase())}
          placeholder="Search Exercises, Body parts, Muscles or Equipments."
        />
        <button type="submit" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
