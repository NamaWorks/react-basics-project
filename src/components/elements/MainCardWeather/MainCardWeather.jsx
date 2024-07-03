import React from 'react'
import { getDate } from '../../../utils/functions/getDate'
import "./MainCardWeather.css"

const MainCardWeather = ({ weatherDescription, weatherIcon, mainTemp, mainFeelsLike, windSpeed, mainTempMin, mainHumidity, mainTempMax }) => {

  return (
    <div id="main-card-weather">
    <div className="top-card">
      <h2 className="top-card-weekday">{getDate().month} {getDate().weekDay} {getDate().dayNumber}</h2>
      <h2 className="top-card-last-time-check">{getDate().curentTime} {getDate().timezone}</h2>
    </div>

    <div className="bottom-card">
      <div className="bottom-card-left">
        <h3>{Math.floor(mainTemp)}°</h3>
        <p>Description: {weatherDescription}</p>
        <p>Real feel: <span>{Math.floor(mainFeelsLike)}°</span></p>
        <p>Min temp: <span>{Math.floor(mainTempMin)}°</span></p>
        <p>Max temp: <span>{Math.floor(mainTempMax)}°</span></p>
      </div>

      <div className='bottom-card-right'>
        <div>
          <img src={`../../../../public/assets/icons/${weatherIcon}@2x.png`} alt="" />
        </div>
        <p>Wind speed: <span>{Math.floor(windSpeed)} km/h</span></p>
        <p>Humidity: {mainHumidity}</p>
      </div>
      
    </div>

  </div>
  )
}

export default MainCardWeather