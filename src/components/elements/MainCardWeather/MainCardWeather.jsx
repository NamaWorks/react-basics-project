import React from 'react'
import { getDate } from '../../../utils/functions/getDate'

const MainCardWeather = ({ weatherDescription, weatherIcon, mainTemp, mainFeelsLike, windSpeed, mainTempMin, mainHumidity, mainTempMax }) => {

  return (
    <div id="main-card-weather">
    <div className="top-card">
      <p className="top-card-weekday">{getDate().month} {getDate().weekDay} {getDate().dayNumber}</p>
      <p className="top-card-last-time-check">{getDate().curentTime} {getDate().timezone}</p>
    </div>

    <div className="bottom-card">
      <div className="bottom-card-left">
        <p>Current temp: {Math.floor(mainTemp)}°</p>
        <div>
          <img src={`../../../../public/assets/icons/${weatherIcon}@2x.png`} alt="" />
        </div>
        <p>Real feel: <span>{Math.floor(mainFeelsLike)}°</span></p>
        <p>Min temp: <span>{Math.floor(mainTempMin)}°</span></p>
        <p>Max temp: <span>{Math.floor(mainTempMax)}°</span></p>
        <p>Wind speed: <span>{Math.floor(windSpeed)} km/h</span></p>
        <p>Description: {weatherDescription}</p>
        <p>Humidity: {mainHumidity}</p>
      </div>
      
    </div>

  </div>
  )
}

export default MainCardWeather