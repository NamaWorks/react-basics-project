import { useEffect, useState } from "react"
import { getWeather } from "../../../api/getLocation"


const Weather = ({ coordinates, weather, city, weatherMain, weatherDescription, weatherIcon, mainTemp, mainFeelsLike, mainTempMin, mainTempMax, mainHumidity, mainSeaLevel, mainGroundLevel, visibility, windSpeed, winDeg, clouds }) => {

  // useEffect(() => {

  // },[weather]);

  return (
    <main id="weather">
      {/* <h2>{coordinates[0]}, {coordinates[1]}</h2> */}
      <h2>{city}</h2>
      {/* <h3>temp : {JSON.parse(weather).main.temp}</h3> */}
      <h3>COMPONENT INSIDE WEATHER</h3>
      <h3>COMPONENT INSIDE WEATHER</h3>
      <h3>COMPONENT INSIDE WEATHER</h3>
      <h3>COMPONENT INSIDE WEATHER</h3>
    </main>
  )
}

export default Weather