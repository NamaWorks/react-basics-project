import React from 'react'
import { getDate } from '../../../../utils/functions/getDate'
import "./MainCardWeather.css"
import "../../cards/cards.css"

const MainCardWeather = ({ weatherDescription, weatherIcon, mainTemp }) => {

  return (
    <div id="main-card-weather" className='card'>
    <div className="top-card">
      <h3 className="top-card-date">{getDate().month} {getDate().weekDay} {getDate().dayNumber}</h3>
      <h3 className="top-card-last-time-check">{getDate().curentTime}</h3>
    </div>

    <div className="bottom-card">
      <div className="bottom-card-main">
        <h2>{Math.floor(mainTemp)}°</h2>
        <div className='bottom-card-main-image-container'>
          <img src={`/assets/icons/${weatherIcon}@2x.png`} alt="" />
  
        </div>
      </div>
      <p><span className='card-data'>{weatherDescription}</span></p>
    </div>

  </div>
  )
}

export default MainCardWeather