import React from 'react'
import "./MiscCard.css"

const MiscCard = ({ coordinates, city, mainHumidity, mainSeaLevel, mainGroundLevel, visibility }) => {
  return (
    <div className='card' id='misc-card'>
      <div className='top-card'>
        <h3>Additional <br/> info</h3>
      </div>

      <div className="bottom-card">
        {/* <p>Coordinates: <span className='card-data'>lat:{coordinates[0]}, lon:{coordinates[1]}</span></p> */}
        <p>City: <span className='card-data'>{city}</span></p>
        <p>Humidity: <span className='card-data'>{mainHumidity} %</span></p>
        <p>Sea level: <span className="card-data">{mainSeaLevel}m </span></p>
        <p>Ground level: <span className="card-data">{mainGroundLevel} m</span></p>
        <p>Visibility: <span className="card-data">{visibility} m</span></p>
      </div>
    </div>
  )
}

export default MiscCard