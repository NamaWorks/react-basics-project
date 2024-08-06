import React, { useEffect } from 'react'
import { getDate } from '../../../../utils/functions/getDate'
import "./MainCardWeather.css"
import "../../cards/cards.css"

const MainCardWeather = ({ weather }) => {

  return (
    <div id="main-card-weather" className='card'>
    <div className="top-card">
      <h3 className="top-card-date">{getDate().month} {getDate().weekDay} {getDate().dayNumber}</h3>
      <h3 className="top-card-last-time-check">{getDate().curentTime}</h3>
    </div>

    <div className="bottom-card">
      <div className="bottom-card-main">
        <h2>{weather ? Math.floor(JSON.parse(weather).main.temp) : 0}°</h2>
        <div className='bottom-card-main-image-container'>
          <img src={`/assets/icons/${weather ? JSON.parse(weather).weather[0].icon : "01d"}@2x.png`} alt="" />
  
        </div>
      </div>
      <p><span className='card-data'>{weather ? JSON.parse(weather).weather[0].description : "loading"}</span></p>
    </div>

  </div>
  )
}

export default MainCardWeather