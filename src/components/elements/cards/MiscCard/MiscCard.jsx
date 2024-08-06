import React from 'react'
import "./MiscCard.css"

const MiscCard = ({ coordinates, city, weather }) => {
  return (
    <div className='card' id='misc-card'>
      <div className='top-card'>
        <h3>Additional <br/> info</h3>
      </div>

      <div className="bottom-card">
        <p>Coordinates: <span className='card-data'>lat:{weather ? JSON.parse(weather).coord.lat : 0}, lon:{weather ? JSON.parse(weather).coord.lon : 0}</span></p>
        <p>City: <span className='card-data'>{weather ? JSON.parse(weather).name : "city"}</span></p>
        <p>Humidity: <span className='card-data'>{weather ? JSON.parse(weather).main.humidity : "0"} %</span></p>
        <p>Sea level: <span className="card-data">{weather ? JSON.parse(weather).main.sea_level : 0}m </span></p>
        <p>Ground level: <span className="card-data">{weather ? JSON.parse(weather).main.grnd_level : 0} m</span></p>
        <p>Visibility: <span className="card-data">{weather ? JSON.parse(weather).visibility : 0} m</span></p>
      </div>
    </div>
  )
}

export default MiscCard