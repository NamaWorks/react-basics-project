import "./TempsCard.css"
import "../../cards/cards.css"

import React from 'react'

const TempsCard = ({ weather }) => {
  return (
    <div className="card">
      <div className="top-card">
        <h3>temperature <br/>status</h3>
      </div>

      <div className="bottom-card">
        <p>Minimum: <span className="card-data">{weather ? JSON.parse(weather).main.temp_min : 0}°</span></p>
        <p>Maximum: <span className="card-data">{weather ? JSON.parse(weather).main.temp_max : 0}°</span></p>
        <p>Feels like: <span className="card-data">{weather ? JSON.parse(weather).main.feels_like : 0}°</span></p>
      </div>
    </div>
  )
}

export default TempsCard