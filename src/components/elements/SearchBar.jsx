import React, { useState } from 'react'
import { getCityCoordinates, getCurrentLocation, getWeather } from '../../api/getLocation'

const SearchBar = () => {
  return (
  <>
    <input 
      type="text" 
      id='city-input'  
      placeholder='search City' 
    //   onBlur={async function(e){
    //     const cityCoords = await getCityCoordinates(e.target.value)
    //     console.log(cityCoords)
    // }}
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
    <button onClick={getCurrentLocation}>get current location</button>
  </>
  )
}

export default SearchBar