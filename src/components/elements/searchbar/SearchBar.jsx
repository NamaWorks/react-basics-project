import './SearchBar.css'
import React, { useState } from 'react'
import { getCityCoordinates, getCurrentLocation, getWeather } from '../../../api/getLocation'



const SearchBar = ({ setCoordinates, coordinates }) => {
  console.log(coordinates)
  return (
  <div id='searchbar'>
    <h2>{coordinates}</h2>
    <button onClick={function(){setCoordinates(coordinates + 1)}}>click</button>
    <input 
      type="text" 
      id='city-input'  
      placeholder='search City' 
      onBlur={async function(e){
        if (e.target.value) {
          try {
            const cityCoords = await getCityCoordinates(e.target.value);
            const weather = await getWeather(
              cityCoords[0].lat,
              cityCoords[0].lon
            );
            console.log(weather);
            e.target.value = weather.name
          } catch (error) {
            console.log(error);
          }
        }
    }}
      onKeyDown={async function(e){
        if (e.code == "Enter") {
          if (e.target.value) {
            try {
              const cityCoords = await getCityCoordinates(e.target.value);
              const weather = await getWeather(
                cityCoords[0].lat,
                cityCoords[0].lon
              );
              console.log(weather);
              e.target.value = weather.name
            } catch (error) {
              console.log(error);
            }
          }
        }
    }}
    />
  </div>
  )
}

export default SearchBar